import './FormDoctor.css';
import { Button, Form } from 'react-bootstrap';

const FormDoctor = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="form-container border border-1 rounded p-3">
        <h2>Registrar Doctor</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Wallet Address</Form.Label>
            <Form.Control type="text" placeholder="Ingrese address" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese nombre" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Ingrese apellido" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Especialidad</Form.Label>
            <Form.Control type="text" placeholder="Ingrese especialidad" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default FormDoctor;
