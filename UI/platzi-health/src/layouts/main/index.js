import NavLink from './navlink';
import Footer from './footer';
import { Container, Stack } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Stack className='vh-100 justify-content-between'>
        <NavLink />
        <Container fluid><Outlet/></Container>
        <Footer />
      </Stack>
    </>
  );
};

export default MainLayout;
