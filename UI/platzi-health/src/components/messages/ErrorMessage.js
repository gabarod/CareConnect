import { useState } from 'react';
import { Toast } from 'react-bootstrap';

const ErrorMessage = ({ header, message }) => {
  const [show, setShow] = useState(true);

  const action = () => {
    setShow(false);
  };

  return (
    <>
      <div style={{ position: 'fixed', right: '0', zIndex: '20180210' }}>
        <Toast onClose={action} show={show} delay={3000} bg={'error'} autohide >
          <Toast.Header style={{ background: 'red', color: 'white', fontWeight: 'bold' }}>
            <strong className="mr-auto">{header}</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </div>
    </>
  );
};

export default ErrorMessage;
