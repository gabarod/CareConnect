import NavLink from './navlink';
import Footer from './footer';
import { Container, Stack } from 'react-bootstrap';

const MainLayout = ({ children }) => {
  return (
    <>
      <Stack className='vh-100 justify-content-between'>
        <NavLink />
        <Container fluid>{children}</Container>
        <Footer />
      </Stack>
    </>
  );
};

export default MainLayout;
