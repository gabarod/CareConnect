import Form from 'react-bootstrap/Form';

function Gender({handleChange}) {
  return (
    <Form.Select aria-label="Default select example" onChange={handleChange}>
      <option value="">Selecciona una opción</option>
      <option value="F">Femenino</option>
      <option value="M">Masculino</option>
    </Form.Select>
  );
}

export default Gender;