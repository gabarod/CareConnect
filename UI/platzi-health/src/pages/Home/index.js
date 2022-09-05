import {Container, Row, Stack } from "react-bootstrap";
import "./styles.css";
import Wallet from '../../components/Wallet';

export default function Home() {

  return (
    <Container fluid className="home-background-image">
      <Container>
        <Row>
          <Stack gap={2} className="col-md-12 px-0">
            <Wallet/>
          </Stack>
        </Row>
      </Container>
    </Container>
  );
}
