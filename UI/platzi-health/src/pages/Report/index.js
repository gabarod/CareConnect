import './Report.css';
import { Button, Form } from 'react-bootstrap';
import uploadIpfs from '../../utils/ipfs/ipfsProvider';
import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';
import usePlatziHealthContract from '../../hooks/usePlatziHealthContract';
import moment from 'moment';

const Report = () => {
  const { account } = useWeb3React();
  const platziHealthContract = usePlatziHealthContract();
  const [patientId, setPatientId] = useState('');
  const [reason, setReason] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [report, setReport] = useState('');

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
        .then((receipt) => {
          console.log(receipt);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
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
  );
};

export default Report;
