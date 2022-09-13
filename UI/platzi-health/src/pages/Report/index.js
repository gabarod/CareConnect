import './Report.css';
import { Button, Form } from 'react-bootstrap';
import uploadIpfs from '../../utils/ipfs/ipfsProvider';
import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';
import usePlatziHealthContract from '../../hooks/usePlatziHealthContract';import ErrorMessage from '../../components/messages/ErrorMessage';
import SuccessMessage from '../../components/messages/SuccessMessage';
import InfoMessage from '../../components/messages/InfoMessage';
import moment from 'moment';

const Report = () => {
  const { account } = useWeb3React();
  const platziHealthContract = usePlatziHealthContract();
  const [patientId, setPatientId] = useState('');
  const [reason, setReason] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [report, setReport] = useState('');
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const addRecord = platziHealthContract.methods.addRecord;
    const date = moment(new Date()).format('DD/MM/YYYY');

    const patientReport = {
      doctorId: account,
      patientId: patientId,
      reason: reason,
      diagnosis: diagnosis,
      report: report,
    };

    const jsonString = JSON.stringify(patientReport);
    const fileReport = new Blob([jsonString], { type: 'application/json' });

    uploadIpfs(fileReport).then((hashFile) => {
      const patientRecord = {
        isActive: true,
        doctorId: account,
        patientId,
        date,
        diagnosisFile: {typeFile: 'application/json', hashFile},
      };

      const record = addRecord(patientRecord)
        .send({ from: account, gas: 1500000 })
        .on('transactionHash', (txHash) => {
          toastInfo(txHash);
        })
        .on('receipt', () => {
          toastSuccess('Transacción éxitosa');
        })
        .on('error', (error) => {
          toastError(`Transacción errónea ${error.message}`);
        });  
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
          <h2>Informe del Paciente</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Wallet Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="8ffv...5445"
                onChange={(e) => setPatientId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Motivo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese motivo"
                onChange={(e) => setReason(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Diagnóstico</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese diagnóstico"
                onChange={(e) => setDiagnosis(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Informe</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                onChange={(e) => setReport(e.target.value)}
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

export default Report;
