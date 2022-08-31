import { Container, Nav, Navbar } from 'react-bootstrap';

const Links = [
  {
    name: 'Inicio',
    to: '/',
  },
  {
    name: 'Registro',
    to: '/registro',
  },
];

function NavLink() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="./images/platzi-health-logo.png"
            width="80"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          {Links.map(({ name, to }) => (
            <Nav.Link key={name} href={to}>
              {name}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavLink;
