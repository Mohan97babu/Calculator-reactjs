import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from './Sidebar';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import NavBar from './Navbar';

const NewUser = () => {
    return (
        <Container fluid className='ps-0'  >
            <NavBar />
            <Row className=' background' >
        <Col  md={4} lg={2} xl={2} className='d-none d-md-block ' >
           <SideBar />
        </Col>
        <Col   md={8} lg={10} xl={10} className='d-block pe-4' >
            <Row className=' mt-3 ms-3'> 

         <Card className=' px-0' >
         <Card.Header ><span className='textcolor1 fw-bold '> New User</span></Card.Header>
          <Card.Body>

        <Form  >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email " />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Mobile number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} cols={50} style={{resize:"none"}}  placeholder="Message"/>
            </Form.Group>
            <div className='text-end p-3  '>

            <Button variant="primary" className=' alignbtn btncolor'>Submit</Button>{' '}
            </div>
        </Form>
          </Card.Body>
         </Card>
            </Row>
        </Col>
        </Row>
        </Container>
    );
}
export default NewUser;