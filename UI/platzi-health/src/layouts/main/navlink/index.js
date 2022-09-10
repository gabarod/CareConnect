import { Container, Nav, Navbar } from 'react-bootstrap';
import Wallet from '../../../components/Wallet';
import useNavLinks from '../../../hooks/useNavLinks';
import { Link as RouterLink }  from 'react-router-dom';

function NavLink() {
  const { Links } = useNavLinks();

  return (
    <Navbar bg="light" expand="lg" className='mb-5'>
      <Container fluid>
        <Navbar.Brand as={RouterLink} to="/">
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
              <Nav.Link as={RouterLink} key={name} to={to}>
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
