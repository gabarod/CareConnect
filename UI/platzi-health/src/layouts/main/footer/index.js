import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="border-top py-4">
      <Row className="row">
        <Col className="col-lg-6 col-md-12">
          <small>2022. Care Connect. Todos los derechos reservados</small>
        </Col>
        <Col className="col-lg-6 col-md-12">
          <ul className="list-inline text-lg-end">
            <li className="list-inline-item">
              <a href="#" className="text-dark text-decoration-none">
                <small>Términos y condiciones</small>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-dark text-decoration-none">
                <small>Aviso de privacidad</small>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
