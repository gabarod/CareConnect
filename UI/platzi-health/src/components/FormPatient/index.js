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
  const [patientAccount, setpatientAccount] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [doctorAccount, setDoctorAccount] = useState([]);
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
      phoneNumber
    }
    const patientData = {
      personalInformation,
      isActive: true,
      doctorAccount,
    };

    await platziHealthContract.methods
      .addHospital(patientAccount, patientData)
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
          <h2>Registrar Paciente</h2>
          <Form onSubmit={savePatient}>
            <Form.Group className="mb-3">
              <Form.Label>Wallet Account</Form.Label>
              <Form.Control type="text" placeholder="Ingrese account" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>id</Form.Label>
              <Form.Control type="text" placeholder="Ingrese Id" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese Nombre" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Edad</Form.Label>
              <Form.Control type="text" placeholder="Ingrese Edad" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Género</Form.Label>
              <Form.Control type="text" placeholder="Ingrese Género" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Ingrese Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Código País</Form.Label>
              <Form.Control type="text" placeholder="Ingrese Código" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Número Telefónico</Form.Label>
              <Form.Control type="text" placeholder="Ingrese Telefóno" />
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
