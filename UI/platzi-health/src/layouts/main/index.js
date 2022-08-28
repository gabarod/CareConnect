import NavLink from './navlink';
import Footer from './footer';
import { Container } from 'react-bootstrap';

const MainLayout = ({ children }) => {
  return (
    <>
      <Container fluid>
        <NavLink />
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default MainLayout;
