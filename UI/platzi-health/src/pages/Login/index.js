import { Container, Stack } from 'react-bootstrap';
import Wallet from '../../components/Wallet';


export default function Login() {


  return (
    <Container fluid className="vh-100">
      <Stack gap={3} className="h-100 col-md-5 mx-auto justify-content-center">
        <img src="./images/care-connect.png" alt="logo"></img>
        <Wallet />
      </Stack>
    </Container>
  );
}
