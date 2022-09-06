import './Hospital.css';
import { Button, Form, Toast } from 'react-bootstrap';
import usePlatziHealthContract from '../../hooks/usePlatziHealthContract';
import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';
import ErrorMessage from '../../components/messages/ErrorMessage';
import SuccessMessage from '../../components/messages/SuccessMessage';
import InfoMessage from '../../components/messages/InfoMessage';

const Hospital = () => {
  const { account } = useWeb3React();
  const platziHealthContract = usePlatziHealthContract();
  const [hospitalAccount, setHospitalAccount] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [hospitalAddress, setHospitalAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
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

  const saveHospital = async (event) => {
    event.preventDefault();
    const hospitalData = {
      id,
      isActive: true,
      name,
      hospitalAddress,
      phoneNumber,
    };

    await platziHealthContract.methods
      .addHospital(hospitalAccount, hospitalData)
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
    setHospitalAccount('');
    setId('');
    setName('');
    setHospitalAddress('');
    setPhoneNumber('');
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
          <h2>Registrar Hospital</h2>
          <Form onSubmit={saveHospital}>
            <Form.Group className="mb-3">
              <Form.Label>Cuenta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese cuenta"
                value={hospitalAccount}
                onChange={(e) => setHospitalAccount(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese dirección"
                value={hospitalAddress}
                onChange={(e) => setHospitalAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Número telefónico</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese Número telefónico"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={saveHospital}>
              Guardar
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Hospital;
