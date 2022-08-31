import './Report.css';
import { Button, Form } from 'react-bootstrap';

const Report = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="form-container border border-1 rounded p-3">
        <h2>Informe del Paciente</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Wallet Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="8ffv...5445"
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Motivo</Form.Label>
            <Form.Control type="text" placeholder="Ingrese motivo" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Diagnóstico</Form.Label>
            <Form.Control type="text" placeholder="Ingrese diagnóstico" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Informe</Form.Label>
            <Form.Control as="textarea" rows={4} />
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
