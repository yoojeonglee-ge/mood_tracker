import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
   return (
      <Container className="px-0" fluid>
         <Row className="py-3 bg-warning justify-content-between">
            <Col md={12} lg={1} className="p-1 mx-2 fw-bold">Moody</Col>
            <Col md={12} lg={1} className="p-1 mx-2">Login</Col>
         </Row>
      </Container>
   );
}

export default Header;
