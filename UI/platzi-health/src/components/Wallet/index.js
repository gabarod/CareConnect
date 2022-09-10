import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { connector } from "../../utils/connector/connector";
import { Button } from "react-bootstrap";
import useTruncatedAddress from "../../hooks/useTruncatedAddress";

export default function Wallet() {
  const { active, account, activate, deactivate, error } = useWeb3React();
  const truncatedAddress = useTruncatedAddress(account);

  const isUnsupportedChain = error instanceof UnsupportedChainIdError;

  async function connect() {
    try {
      await activate(connector);
      localStorage.setItem("isWalletConnected", true);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", false);
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(connector);
          localStorage.setItem("isWalletConnected", true);
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, []);

  return (
    <>
      {active ? (
        <Button onClick={disconnect} variant="secondary">
          {truncatedAddress} - Disconnect
        </Button>
      ) : (
        <Button
          onClick={connect}
          variant="primary"
          disabled={isUnsupportedChain}
        >
          {isUnsupportedChain ? "Unsupported chain" : "Connect Wallet"}
        </Button>
      )}
    </>
  );
}
