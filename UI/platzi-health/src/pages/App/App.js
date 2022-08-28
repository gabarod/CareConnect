import './App.css';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from "@ethersproject/providers";
import MainLayout from '../../layouts/main';

function getLibrary(provider) {
  return new Web3Provider(provider);
}

function App({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Web3ReactProvider>
  );
}

export default App;
