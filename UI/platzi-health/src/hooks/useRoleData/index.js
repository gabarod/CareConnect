import { useWeb3React } from '@web3-react/core';
import { useCallback, useEffect, useState } from 'react';
import usePlatziHealthContract from '../usePlatziHealthContract';
import { ROLES } from '../../constants';

const useRoleData = () => {
  const [role, setRole] = useState('');
  const { account } = useWeb3React();

  const platziHealthContract = usePlatziHealthContract();

  const update = useCallback(async () => {
    if (platziHealthContract) {
      const [isPatient, isDoctor, isHospital, isOWner] = await Promise.all([
        platziHealthContract.methods.isPatient(account).call(),
        platziHealthContract.methods.isDoctor(account).call(),
        platziHealthContract.methods.isHospital(account).call(),
        platziHealthContract.methods.isManager(account).call(),
      ]);
      if (isPatient) {
        setRole(ROLES.Patient);
      } else if (isDoctor) {
        setRole(ROLES.Doctor);
      } else if (isHospital) {
        setRole(ROLES.Hospital);
      } else if (isOWner) {
        setRole(ROLES.Owner);
      } else {
        setRole(ROLES.Visitor);
      }
    }
  }, [role, account]);

  useEffect(() => {
    update();
  }, [update]);

  return {
    role,
  };
};

export default useRoleData;
