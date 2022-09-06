import './App.css';
import { Web3ReactProvider } from '@web3-react/core';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/main';
import Home from '../Home';
import Register from '../Register';
import Report from '../Report';
import HistoryList from '../HistoryList';
import History from '../History';
import Web3 from "web3/dist/web3.min";
import Hospital from '../Hospital';

function getLibrary(provider) {
  return new Web3(provider)
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/informe" element={<Report />} />
          <Route path="/historiales" element={<HistoryList />} />
          <Route path="/historial" element={<History />} />
          <Route path="/hospital" element={<Hospital />} />
        </Routes>
      </MainLayout>
    </Web3ReactProvider>
  );
}

export default App;
