import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
   return (
      <Container className="px-0 mt-auto" fluid>
         <Row className="py-3 bg-warning">
            <Col>&copy; 2022 Copyright: Yoojeong Lee</Col>
         </Row>
      </Container>
   );
}

export default Footer;
