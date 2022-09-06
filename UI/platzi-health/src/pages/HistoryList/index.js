import { Button, Form, Col, Row, Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MdRemoveRedEye } from 'react-icons/md';
import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';
import usePlatziHealthContract from '../../hooks/usePlatziHealthContract';
import { useNavigate } from 'react-router-dom';

const HistoryList = () => {
  const { account } = useWeb3React();
  const platziHealthContract = usePlatziHealthContract();
  const [diagnosis, setDiagnosis] = useState([]);
  const navigate = useNavigate();

  const toDiagnosisPage = () => {
    navigate('/informe');
  }

  const toDetailsPage = (report) => {
    navigate('/historial',{ state: report });
  }

  const fetchReports = async (patientWallet) => {
    const ids = await platziHealthContract.methods.getPatientToRecord(patientWallet).call({from: account});
    let elements = [];
    ids.forEach(async (id) => {
      const record = await platziHealthContract.methods.getRecord(id,patientWallet).call({from: account});
      const diagnosisFile = record.diagnosisFile;
      const ipfsUrl = "https://ipfs.cryptostore.com.bo/ipfs/"+diagnosisFile.hashFile;
      fetch(ipfsUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let report = data;
          report["date"] = record.date;
          console.log(report);
          elements.push(report);
          setDiagnosis(elements);
        })
    });
  }

  return (
    <Stack className='wm-75 mx-auto'>
      <div className="d-flex align-items-center justify-content-end mb-2">
        <Button variant="primary" onClick={toDiagnosisPage}>Agregar Diagnóstico</Button>
      </div>
      <Form>
       <Form.Group>
         <Form.Label>Paciente</Form.Label>
         <Form.Control
           type="text"
           placeholder="Ingrese wallet de paciente"
           onChange={(e) => fetchReports(e.target.value)}
         />
       </Form.Group>
      </Form>
      <div className="d-flex flex-column align-items-center">
        <Card style={{ width: '100%' }}>
          <ListGroup variant="flush">
            {diagnosis.map((item, i) => 
              <ListGroup.Item key={i}>
		<Row className="mx-auto align-items-center">
		  <Col xs={3} md={2} className="text-center">
		    {item.date}
		  </Col>
		  <Col xs={7} md={9}>
		    {item.diagnosis}
		  </Col>
		  <Col xs={2} md={1}>
		    <MdRemoveRedEye size="1.5rem" onClick={() => toDetailsPage(item)} />
		  </Col>
		</Row>
              </ListGroup.Item>
           )}
           {(() => { if (diagnosis.length == 0) {
              return <ListGroup.Item>
		<Row className="mx-auto align-items-center">
		  <Col xs={3} md={2} className="text-center">
		  </Col>
		  <Col xs={7} md={9}>
		    No se encontraron registros
		  </Col>
		  <Col xs={2} md={1}>
		  </Col>
		</Row>
              </ListGroup.Item>

           }})()}
          </ListGroup>
        </Card>
      </div>
    </Stack>
  );
};

export default HistoryList;
