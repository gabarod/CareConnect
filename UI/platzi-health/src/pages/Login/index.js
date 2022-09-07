import { Container, Stack } from 'react-bootstrap';
import './styles.css';
import Wallet from '../../components/Wallet';

export default function Login() {
  return (
    <Container fluid className='vh-100'>
      <Stack gap={3} className="h-100 col-md-5 mx-auto justify-content-center">
        <img src="./images/platzi-health.png" alt='logo'></img>
        <Wallet />
      </Stack>
    </Container>
  );
}
