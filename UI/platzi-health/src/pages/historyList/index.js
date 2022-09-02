import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MdRemoveRedEye } from 'react-icons/md';

const HistoryList = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Card>
        <ListGroup variant="flush">
          {[0, 1, 2].map((item) => (
            <ListGroup.Item key={item}>
              <Row className="mx-auto align-items-center">
                <Col xs={3} md={2} className="text-center">
                  18/05
                </Col>
                <Col xs={7} md={9}>
                  Lorem ipsum dolor sit amet. Non quis sapiente aut culpa
                  eligendi vel itaque cupiditate vel.
                </Col>
                <Col xs={2} md={1}>
                  <MdRemoveRedEye size="1.5rem" />
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default HistoryList;
