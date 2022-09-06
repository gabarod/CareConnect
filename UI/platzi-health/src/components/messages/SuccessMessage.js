import { useState } from 'react';
import { Toast } from 'react-bootstrap';

const SuccessMessage = ({ header, message }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div style={{ position: 'fixed', right: '0', zIndex: '20180210' }}>
        <Toast
          onClose={() => {
            setShow(false);
          }}
          show={show}
          delay={3000}
          bg={'success'}
          autohide
        >
          <Toast.Header    >
            <strong className="mr-auto">{header}</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </div>
    </>
  );
};

export default SuccessMessage;