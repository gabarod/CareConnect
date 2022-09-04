import './history.css';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const History = () => {
  return (
    <div className="wm-75 mx-auto">
      <div className="d-flex flex-column align-items-center mw-75">
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col xs={4} md={2} className="align-self-sm-start align-self-md-center text-center">
                  <span>18/05</span>
                </Col>
                <Col xs={8} md={10}>
                  <p>
                    Lorem ipsum dolor sit amet. Non quis sapiente aut culpa
                    eligendi vel itaque cupiditate vel.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet. Non quis sapiente aut culpa
                    eligendi vel itaque cupiditate vel. Lorem ipsum dolor sit
                    amet. Non quis sapiente aut culpa eligendi vel itaque
                    cupiditate vel. Lorem ipsum dolor sit amet. Non quis
                    sapiente aut culpa eligendi vel itaque cupiditate vel.
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
