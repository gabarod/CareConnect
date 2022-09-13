import { Button, Form } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';
import { GrDocumentConfig } from 'react-icons/gr';
import ErrorMessage from '../../components/messages/ErrorMessage';
import SuccessMessage from '../../components/messages/SuccessMessage';
import InfoMessage from '../../components/messages/InfoMessage';
import usePlatziHealthContract from '../../hooks/usePlatziHealthContract';import useAuth from '../../hooks/useAuth';

const WhiteList = () => {
  const { auth } = useAuth();
  const { account } = useWeb3React();
  const [doctorAccount, setDoctorAccount] = useState("");
  const platziHealthContract = usePlatziHealthContract();
  const [showToastError, setShowToastError] = useState(false);
  const [showToastSuccess, setShowToastSuccess] = useState(false);
  const [showToastInfo, setShowToastInfo] = useState(false);
  const isPatient = auth.roles[0] === 4;
  const isHospital = auth.roles[0] === 2;
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

  const saveWhiteList = async (event) => {
    event.preventDefault();

    if(isPatient)
      savePatientWhiteList();

    if(isHospital)
      saveHospitalWhiteList();
    setDoctorAccount("");
  }

  const saveHospitalWhiteList = async () => {
    console.log("Hospital");
    await platziHealthContract.methods
      .HospitalGrantAccessToDoctor(doctorAccount)
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
  }

  const savePatientWhiteList = async () => {
    console.log("Patient");
    await platziHealthContract.methods
      .PatientGrantAccessToDoctor(doctorAccount)
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
  }
  
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
          <h2><GrDocumentConfig /> Configuración</h2>
          <Form onSubmit={saveWhiteList}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Whitelist</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
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
}

export default WhiteList;
