import './App.css';
import { Web3ReactProvider } from '@web3-react/core';
import { Route, Routes } from 'react-router-dom';
import { Web3Provider } from '@ethersproject/providers';
import MainLayout from '../../layouts/main';
import Home from '../Home';
import Register from '../Register';
import Report from '../Report';
function getLibrary(provider) {
  return new Web3Provider(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/informe" element={<Report />} />
        </Routes>
      </MainLayout>
    </Web3ReactProvider>
  );
}

export default App;
