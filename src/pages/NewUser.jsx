import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from '../components/layout/Sidebar';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import NavBar from '../components/layout/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NewUser = ({ setActive, active, setEdit, data, setData }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone_number: "",
        message: ""
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        axios.post("https://fts-backend.onrender.com/user/newRegistration", formData)
            .then(response => setFormData(response))
            .catch(err => console.log(err))
        navigate("/Api-Table");

    }

    return (
        <Container fluid className='ps-0'  >
            <NavBar />
            <Row className=' background' >
                <Col md={4} lg={2} xl={2} className='d-none d-md-block '>
                    <SideBar
                        active={active}
                        setActive={setActive}
                        setEdit={setEdit} />
                </Col>
                <Col md={8} lg={10} xl={10} className='d-block pe-4' >
                    <div className="row pt-4">
                        <div className="d-flex fw-medium "><h5 className="pe-2 text-secondary">FTS New User</h5> &#10095; <h5 className="ps-2">Add User</h5> </div>
                    </div>
                    <Row className=' mt-3 ms-3'>

                        <Card className=' px-0' >
                            <Card.Header ><span className='textcolor1 fw-bold '> Add User</span></Card.Header>
                            <Card.Body>

                                <Form  >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label className='fw-medium'>Name:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" name="name" value={formData.name} onChange={(e) => handleChange(e)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label className='fw-medium'>Email: </Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email " name="email" value={formData.email} onChange={(e) => handleChange(e)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label className='fw-medium'>Mobile Number:</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Mobile Number" name="phone_number" value={formData.phone_number} onChange={(e) => handleChange(e)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className='fw-medium'>Message:</Form.Label>
                                        <Form.Control as="textarea" rows={4} cols={50} style={{ resize: "none" }} name="message" value={formData.message} placeholder=" Enter Message" onChange={(e) => handleChange(e)} />
                                    </Form.Group>
                                    <div className='text-end p-3  '>

                                        <Button variant="primary" type="submit" className=' alignbtn btncolor' onClick={(e) => handleSubmit(e)}>Submit</Button>{' '}
                                        <Button variant="primary" className=' alignbtn btncolor'>Cancel</Button>{' '}
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