import { useWeb3React } from '@web3-react/core';
import { useMemo } from "react";
import PlatziHealthArtifacts from "../../config/web3/artifacts/PlatziHealthArtifacts";

const { address, abi } = PlatziHealthArtifacts;

const usePlatziHealthContract = () => {
  const { active, library, chainId } = useWeb3React();
  const platziHealthContract = useMemo(() => {
    if (active) return new library.eth.Contract(abi, address[chainId]);
  }, [active, chainId, library?.eth?.Contract]);

  return platziHealthContract
};

export default usePlatziHealthContract;
