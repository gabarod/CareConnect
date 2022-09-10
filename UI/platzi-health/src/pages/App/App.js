import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/main';
import Home from '../Home';
import Register from '../Register';
import Report from '../Report';
import HistoryList from '../HistoryList';
import History from '../History';
import Hospital from '../Hospital';
import Login from '../Login';
import RequireAuth from '../../components/RequireAuth';
import Unauthorized from '../Unauthorized';
import { ROLES } from '../../constants';




function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        element={
          <RequireAuth
            allowedRoles={[
              ROLES.Owner,
              ROLES.Hospital,
              ROLES.Doctor,
              ROLES.Patient,
              ROLES.Visitor,
            ]}
          />
        }
      >
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route element={<RequireAuth allowedRoles={[ROLES.Hospital]} />}>
            <Route path="/registro" element={<Register />} />
          </Route>

          <Route
            element={
              <RequireAuth allowedRoles={[ROLES.Doctor, ROLES.Patient]} />
            }
          >
            <Route path="/informe" element={<Report />} />
            <Route path="/historiales" element={<HistoryList />} />
            <Route path="/historial/:id" element={<History />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Owner]} />}>
            <Route path="/hospital" element={<Hospital />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
