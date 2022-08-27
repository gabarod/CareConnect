import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { injected } from "../../utils/connector/connector";
import { Alert, Button, Container, Row, Stack } from "react-bootstrap";
import "./styles.css";

export default function Home() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", true);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", false);
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected);
          localStorage.setItem("isWalletConnected", true);
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, []);

  return (
    <Container fluid className="home-background-image">
      <Container>
        <Row>
          {active ? (
            <Alert key="light" variant="primary">
              Connected with <b>{account}</b>
            </Alert>
          ) : (
            <span>Not connected</span>
          )}
        </Row>
        <Row>
          <Stack gap={2} className="col-md-12 px-0">
            {active ? (
              <Button onClick={disconnect} variant="secondary">
                Disconnect
              </Button>
            ) : (
              <Button onClick={connect} variant="primary">
                Connect to MetaMask
              </Button>
            )}
          </Stack>
        </Row>
      </Container>
    </Container>
  );
}
