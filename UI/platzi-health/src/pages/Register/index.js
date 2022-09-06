import { Tab, Tabs } from 'react-bootstrap';
import FormDoctor from '../../components/FormDoctor';
import FormPatient from '../../components/FormPatient';

const Register = () => {
  return (
    <Tabs
      defaultActiveKey="doctor"
      id="table-register"
      className="mb-3 col-12 col-md-4 mx-auto"
      fill
    >
      <Tab eventKey="doctor" title="Registrar Doctor(a)">
        <FormDoctor />
      </Tab>
      <Tab eventKey="patient" title="Registrar Paciente">
        <FormPatient />
      </Tab>
    </Tabs>
  );
};

export default Register;
