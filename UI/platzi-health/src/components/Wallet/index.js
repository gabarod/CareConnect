import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
import { injected } from '../../utils/connector/connector';
import { Button } from 'react-bootstrap';
import useTruncatedAddress from '../../hooks/useTruncatedAddress';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useRoleData from '../../hooks/useRoleData';

export default function Wallet() {
  const { active, account, activate, deactivate, error } = useWeb3React();
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const { role } = useRoleData();
  const from = location.state?.from?.pathname || '/';
  const truncatedAddress = useTruncatedAddress(account);

  const isUnsupportedChain = error instanceof UnsupportedChainIdError;

  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem('isWalletConnected', true);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem('isWalletConnected', false);
      setAuth({ account: false });
      navigate('/', { replace: true });
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected);
          localStorage.setItem('isWalletConnected', true);
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, []);

  useEffect(() => {
    if (account) {
      const currentRole = role || 5;
      setAuth({ account, roles: [currentRole]});
      navigate(from, { replace: true });
    }
  }, [account, role]);

  return (
    <>
      {active ? (
        <Button onClick={disconnect} variant="secondary">
          {truncatedAddress}
        </Button>
      ) : (
        <Button
          onClick={connect}
          variant="primary"
          disabled={isUnsupportedChain}
        >
          {isUnsupportedChain ? 'Red no soportada' : 'Conectar'}
        </Button>
      )}
    </>
  );
}
