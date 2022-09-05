import './Report.css';
import { Button, Form } from 'react-bootstrap';
import uploadIpfs from '../../utils/ipfs/ipfsProvider';

const Report = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const patientReport = {
      'wallet':  event.target.wallet.value,
      'motivo':  event.target.motivo.value,
      'diagnostico': event.target.diagnostico.value,
      'informe': event.target.informe.value 
    };
    const jsonString = JSON.stringify(patientReport);
    const fileReport = new Blob([jsonString],{type: 'application/json'});
    uploadIpfs(fileReport)
      .then((hashIpfs) =>{
        console.log(hashIpfs)
      })
      .catch(() => {
        console.error("Error uploading file to ipfs server");
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
              name="wallet"
              placeholder="8ffv...5445"
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Motivo</Form.Label>
            <Form.Control type="text" name="motivo" placeholder="Ingrese motivo" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Diagnóstico</Form.Label>
            <Form.Control type="text" name="diagnostico" placeholder="Ingrese diagnóstico" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Informe</Form.Label>
            <Form.Control as="textarea" rows={4} name="informe" />
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
