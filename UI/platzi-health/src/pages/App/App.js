import './App.css';
import { useWeb3React } from '@web3-react/core';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/main';
import Home from '../Home';
import Register from '../Register';
import Report from '../Report';
import HistoryList from '../HistoryList';
import History from '../History';
import Hospital from '../Hospital';
import Login from '../Login';

function App() {
  const { account } = useWeb3React();
  if (account === undefined) {
    return (
        <Login />
    );
  }
  return (
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
  );
}

export default App;
