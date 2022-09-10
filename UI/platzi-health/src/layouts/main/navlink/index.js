import { Container, Nav, Navbar } from 'react-bootstrap';
import Wallet from '../../../components/Wallet';

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
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          {' '}
          <img
            alt=""
            src="./images/platzi-health-logo.png"
            width="80"
            height="40"
            className="d-inline-block align-baseline"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {Links.map(({ name, to }) => (
              <Nav.Link key={name} href={to}>
                {name}
              </Nav.Link>
            ))}
          </Nav>
          <div className="d-flex justify-content-lg-end">
            <Wallet />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavLink;
