import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MdWarningAmber } from "react-icons/md";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Container className="py-5 d-flex justify-content-center">
          <Row>
               <div className="col-md-2 text-center">
                    <p><MdWarningAmber size={'4rem'}/><br/>Código: 403</p>
               </div>
               <div className="col-md-10">
                    <h3>Lo sentimos</h3>
                    <p>No tienes acceso para ver esta información.<br/>Por favor retorna para continuar con la navegación.</p>
                    <Button className="btn btn-primary" onClick={goBack}>Volver</Button>
               </div>
          </Row>
     </Container>
  );
};

export default Unauthorized;
