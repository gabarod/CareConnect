import './FormPatient.css';
import { Button, Form } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';
import usePlatziHealthContract from '../../hooks/usePlatziHealthContract';
import { useState } from 'react';
import ErrorMessage from '../messages/ErrorMessage';
import SuccessMessage from '../messages/SuccessMessage';
import InfoMessage from '../messages/InfoMessage';

const FormPatient = () => {
  const { account } = useWeb3React();
  const platziHealthContract = usePlatziHealthContract();
  const [patientAccount, setPatientAccount] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [doctorAccount, setDoctorAccount] = useState('');
  const [showToastError, setShowToastError] = useState(false);
  const [showToastSuccess, setShowToastSuccess] = useState(false);
  const [showToastInfo, setShowToastInfo] = useState(false);
  const [toast, setToast] = useState({
    header: '',
    message: '',
  });

  const toastError = (msg) => {
    setToast({
      header: 'Error',
      message: msg,
    });
    setShowToastError(!showToastError);
  };

  const toastSuccess = (msg) => {
    setToast({
      header: 'Success',
      message: msg,
    });
    setShowToastSuccess(!showToastSuccess);
  };

  const toastInfo = (msg) => {
    setToast({
      header: 'Info',
      message: msg,
    });
    setShowToastInfo(!showToastInfo);
  };

  const savePatient = async (event) => {
    event.preventDefault();
    const personalInformation = {
      id,
      name,
      age,
      gender,
      email,
      countryCode,
      phoneNumber,
    };
    const patientData = {
      personalInformation,
      isActive: true,
      doctorAccessList: [doctorAccount],
    };

    await platziHealthContract.methods
      .addPatient(patientAccount, patientData)
      .send({
        from: account,
      })
      .on('transactionHash', (txHash) => {
        toastInfo(txHash);
      })
      .on('receipt', () => {
        toastSuccess('Transacción éxitosa');
      })
      .on('error', (error) => {
        toastError(`Transacción errónea ${error.message}`);
      });
    setPatientAccount('');
    setId('');
    setName('');
    setAge('');
    setGender('');
    setEmail('');
    setCountryCode('');
    setPhoneNumber('');
    setDoctorAccount('');
  };
  return (
    <>
      {showToastError && (
        <ErrorMessage header={toast.header} message={toast.message} />
      )}
      {showToastSuccess && (
        <SuccessMessage header={toast.header} message={toast.message} />
      )}
      {showToastInfo && (
        <InfoMessage header={toast.header} message={toast.message} />
      )}
      <div className="d-flex flex-column align-items-center">
        <div className="form-container border border-1 rounded p-3">
          <h2>Datos Paciente</h2>
          <Form onSubmit={savePatient}>
            <Form.Group className="mb-3">
              <Form.Label>Cuenta Paciente</Form.Label>
              <Form.Control
                type="text"
                value={patientAccount}
                placeholder="Ingrese Cuenta del paciente"
                onChange={(e) => setPatientAccount(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>id</Form.Label>
              <Form.Control
                type="text"
                value={id}
                placeholder="Ingrese Id"
                onChange={(e) => setId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={name}
                placeholder="Ingrese Nombre"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="text"
                value={age}
                placeholder="Ingrese Edad"
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Género</Form.Label>
              <Form.Control
                type="text"
                value={gender}
                placeholder="Ingrese Género"
                onChange={(e) => setGender(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Ingrese Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Código País</Form.Label>
              <Form.Control
                type="text"
                value={countryCode}
                placeholder="Ingrese Código"
                onChange={(e) => setCountryCode(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Número Telefónico</Form.Label>
              <Form.Control
                type="text"
                value={phoneNumber}
                placeholder="Ingrese Telefóno"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cuenta de Doctor asignado</Form.Label>
              <Form.Control
                type="text"
                value={doctorAccount}
                placeholder="Ingrese Cuenta del doctor"
                onChange={(e) => setDoctorAccount(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FormPatient;
