import { useState } from 'react';
import { Form } from 'react-bootstrap';
import FormDoctor from '../../components/FormDoctor';
import FormPatient from '../../components/FormPatient';

const Register = () => {
  const [isFormDoctor, setIsFormDoctor] = useState(false);
  const switchButton = (e) => {
    setIsFormDoctor(e.target.checked);
  };
  return (
    <>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Registrar Doctor"
        onChange={switchButton}
      />
      {isFormDoctor ? <FormDoctor /> : <FormPatient />}
    </>
  );
};

export default Register;
