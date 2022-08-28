import { Button, Form } from "react-bootstrap"

const FormPatient = () => {
  return(
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Wallet Address</Form.Label>
        <Form.Control type="text" placeholder="Ingrese address" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese nombre" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  )
}

export default FormPatient;