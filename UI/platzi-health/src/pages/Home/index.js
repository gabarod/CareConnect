import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import { FaClinicMedical, FaUserNurse } from "react-icons/fa";
import { RiUserHeartFill } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <Container id="home">
        <Row className="g-0 h-100">
          <Col className="col-lg-6 col-12">
            <div className="content mx-auto align-self-center px-4 my-5">
              <small className="d-block text-primary mb-3">
                <span className="badge bg-primary me-2">Versión beta</span>
                Estamos en versión de pruebas, mejorando funcionalidades para ti.
              </small>
              <h1 className="display-4 fw-bold mb-4">
                Tu historial médico al alcance de un click
                <span className="text-primary">.</span>
              </h1>
              <p className="lead mb-4">
                Ahora puedes tener tu historial médico 100% disponible y con
                control total de quién accede a tu información.
              </p>
              <a href="/login" className="btn btn-primary mb-5">
                Accede hoy
              </a>
              <div className="d-flex">
                <div className="d-flex me-4">
                  <img
                    height={"200px"}
                    src="./images/medical.jpg"
                    className="me-3"
                    alt="logo"
                  />
                  <div>
                    {/* <small>Próximamente en</small>
                    <p className="fw-bold mb-0">App Store</p> */}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col-lg-6 col-12 bg-light">
            <div className="content mx-auto align-self-center px-4 my-5">
              <img src="./images/nurse.jpg" className="img-fluid" alt="phone" />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="py-6 align-self-center">
        <Row className="row">
          <Col className="col-lg-6">
            <div className="content mx-auto px-4 my-5">
              <img
                src="./images/medical-report.jpg"
                className="img-fluid"
                alt="imagen"
              />
            </div>
          </Col>
          <Col className="col-lg-6 d-flex">
            <div className="align-self-center my-5 px-4">
              <h2 className="display-4 fw-bold mb-5">
                Sé parte hoy mismo<span className="text-primary">.</span>
              </h2>

              <ul className="list-unstyled mb-0">
                <li className="d-flex mb-4">
                  <p className="lead fw-bold text-primary d-flex step">1</p>
                  <div className="ms-3">
                    <p className="lead fw-bold">
                      Ingresa a través de un centro médico registrado.
                    </p>
                    <p>
                      Un centro médico registrado se encargarà de validar tus
                      datos y registrarlos.
                    </p>
                  </div>
                </li>
                <li className="d-flex mb-4">
                  <p className="lead fw-bold text-primary d-flex step">2</p>
                  <div className="ms-3">
                    <p className="lead fw-bold">Registra tus citas médicas.</p>
                    <p>
                      Con la app el doctor puede ingresar los datos, el
                      diagnóstico de tu consulta y quedará el registro
                      almacenado en la blockchain
                    </p>
                  </div>
                </li>
                <li className="d-flex mb-4">
                  <p className="lead fw-bold text-primary d-flex">3</p>
                  <div className="ms-3">
                    <p className="lead fw-bold">Accede a tu cuenta.</p>
                    <p>
                      Con tus datos creados puedes acceder a los mismos
                      autenticandote con tu wallet.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="d-flex py-5 align-self-center">
        <Row className="bg-light call-to-action">
          <Row className="row">
            <div className="col-lg-7 d-flex">
              <div className="align-self-center p-5">
                <h2 className="display-4 fw-bold mb-4">
                  Transparencia de tus datos
                  <span className="text-primary">.</span>
                </h2>
                <p className="lead mb-4">
                  Tu historial médico quedará registrado de forma transparante
                  con la información del profesional de la salud que te atendiò
                  y en centro mèdico autorizado.
                </p>
                <a href="/login" className="btn btn-primary">
                  Accede ahora mismo
                </a>
              </div>
            </div>
            <div className="col-lg-5 d-flex">
              <div className="align-self-center text-center mx-auto p-5">
                <img
                  src="./images/man-using-digital-tablet.jpg"
                  className="img-fluid"
                  alt="imagen 2"
                />
              </div>
            </div>
          </Row>
        </Row>
      </Container>

      <Container className="py-5">
        <Row>
          <Col>
            <h2 className="display-4 fw-bold">
              Control y seguridad de tus datos
              <span className="text-primary">.</span>
            </h2>
            <p className="lead mb-5">
              Comienza a aprender con nuestros artículos
            </p>
            <Row className="gx-5">
              <Col className="col-lg-4 py-4">
                <a href="#" className="text-decoration-none">
                  <FaClinicMedical size={"100px"} className="img-fluid mb-4" />

                  <div className="d-flex mb-4">
                    <p className="flex-grow-1 text-dark mb-0">
                      Registra pacientes y doctores
                    </p>
                  </div>
                  <p className="lead text-dark fw-bold mb-4">Centro Médico</p>
                  <p className="text-primary fw-bold">
                    Leer más <i className="fas fa-arrow-right ms-2"></i>
                  </p>
                </a>
              </Col>
              <Col className="col-lg-4 py-4">
                <a href="#" className="text-decoration-none">
                  <FaUserNurse size={"100px"} className="img-fluid mb-4" />
                  <div className="d-flex mb-4">
                    <p className="flex-grow-1 text-dark mb-0">
                      Registra diagnósticos de pacientes
                    </p>
                  </div>
                  <p className="lead text-dark fw-bold mb-4">Doctor</p>
                  <p className="text-primary fw-bold">
                    Leer más <i className="fas fa-arrow-right ms-2"></i>
                  </p>
                </a>
              </Col>
              <Col className="col-lg-4 py-4">
                <a href="#" className="text-decoration-none">
                  <RiUserHeartFill size={"100px"} className="img-fluid mb-4" />
                  <div className="d-flex mb-4">
                    <p className="flex-grow-1 text-dark mb-0">
                      Administra tu historial
                    </p>
                  </div>
                  <p className="lead text-dark fw-bold mb-4">Paciente</p>
                  <p className="text-primary fw-bold">
                    Leer más <i className="fas fa-arrow-right ms-2"></i>
                  </p>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="pt-5 pb-0 align-self-center justify-content-center">
        <Row className="align-self-center">
          <div className="bg-primary text-light text-center p-5 rounded w-75 mx-auto mb-5">
            <h4 className="display-6 fw-bold">Lista de espera</h4>
            <p className="lead">Déjanos tu correo para registrarte</p>
            <div className="mt-2 position-relative mx-auto d-none d-md-block">
              <Stack gap={2}>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                />
                <Button type="submit" className="btn btn-light w-100">
                  Quiero Registrarme
                </Button>
              </Stack>
            </div>
          </div>
        </Row>
      </Container>
      <Container className="pt-5 pb-0">
        <Row className="mb-3">
          <Col className="col-lg-3 col-sm-6 my-4">
            <h5 className="fw-bold mb-3">GitHub</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="" className="text-dark text-decoration-none">
                  Repositorio
                </a>
              </li>
            </ul>
          </Col>
          <Col className="col-lg-3 col-sm-6 my-4">
            <h5 className="fw-bold mb-3">Desarroladores</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="" className="text-dark text-decoration-none">
                  Gabriel Rodriguez
                </a>
              </li>
              <li className="mb-3">
                <a href="" className="text-dark text-decoration-none">
                  Oriana Morillo
                </a>
              </li>
              <li>
                <a href="" className="text-dark text-decoration-none">
                  Rafael Ramirez
                </a>
              </li>
            </ul>
          </Col>
          <Col className="col-lg-3 col-sm-6 my-4">
            <h5 className="fw-bold mb-3">Documentación</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="" className="text-dark text-decoration-none">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="" className="text-dark text-decoration-none">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </Col>
          <Col className="col-lg-3 col-sm-6 my-4">
            <h5 className="fw-bold mb-3">Redes Sociales</h5>
            <ul className="list-unstyled">
              <ul className="list-inline">
                <li className="list-inline-item me-3">
                  <a href="" className="text-dark text-decoration-none">
                    Facebook
                  </a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="" className="text-dark text-decoration-none">
                    Discord
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" className="text-dark text-decoration-none">
                    Linkedin
                  </a>
                </li>
              </ul>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
