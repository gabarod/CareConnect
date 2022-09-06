import './history.css';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLocation } from "react-router-dom";

const History = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="wm-75 mx-auto">
      <div className="d-flex flex-column align-items-center mw-75">
        <h2>Detalle</h2>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col xs={4} md={2} className="align-self-sm-start align-self-md-center text-center">
                  <span>{state.date}</span>
                </Col>
                <Col xs={8} md={10}>
                  <p>
                    {state.reason}
                  </p>
                  <p>
                    {state.diagnosis}
                  </p>
                  <p>
                    {state.report}
                  </p>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default History;
