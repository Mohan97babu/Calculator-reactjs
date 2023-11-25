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
import * as yup from 'yup';
import { Formik } from 'formik';
const NewUser = ({ setActive, active, setEdit, data, setData }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone_number: "",
        message: ""
    });
    const handleChange = (e) => {
        e.persist();
        const value = e.target.name === 'phone_number' ? String(e.target.value) : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    }

    const handleSubmit = (values, { setSubmitting }) => {
        axios.post("https://fts-backend.onrender.com/user/newRegistration", values)
            .then(response => setData(response.data))
            .catch(err => console.log(err))
            .finally(() => {
                setSubmitting(false);
            });
        navigate("/user-list");
                                            
    }
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        phone_number: yup.string().required(),
        message: yup.string().required(),
    });
    const convert =()=>
    {
        String(values.phone_number);
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
                                <Formik
                                    validationSchema={schema}
                                    onSubmit={handleSubmit}
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        phone_number: '',
                                        message: '',
                                    }}
                                >
                                    {({ handleSubmit,handleChange, values, errors }) => (
                                        <Form noValidate onSubmit={handleSubmit} >
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label className='fw-medium'>Name:</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Name" name="name" value={values.name} onChange={(e) => handleChange(e)}  onBlur={(e) => handleChange(e)} isInvalid={!!errors.name}/>
                                                <Form.Control.Feedback type ={"invalid"} >{errors.name}</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label className='fw-medium'>Email: </Form.Label>
                                                <Form.Control type="email" placeholder="Enter Email " name="email" value={values.email} onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)} isInvalid={!!errors.email}/>
                                                <Form.Control.Feedback type ={"invalid"} >{errors.email}</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label className='fw-medium'>Mobile Number:</Form.Label>
                                                <Form.Control type="number" placeholder="Enter Mobile Number" name="phone_number" value={String(values.phone_number)} onChange={(e) => handleChange(e)} onBlur={() =>  convert()} isInvalid={!!errors.phone_number} />
                                                <Form.Control.Feedback type ={"invalid"} >{errors.phone_number}</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label className='fw-medium'>Message:</Form.Label>
                                                <Form.Control as="textarea" rows={4} cols={50} style={{ resize: "none" }} name="message" value={values.message} placeholder=" Enter Message" onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)} isInvalid={!!errors.message}/>
                                                <Form.Control.Feedback type ={"invalid"} >{errors.message}</Form.Control.Feedback>
                                            </Form.Group>
                                            <div className='text-end p-3  '>

                                                <Button variant="primary" type="submit" className=' alignbtn btncolor' >Submit</Button>{' '}
                                                <Button variant="primary" className=' alignbtn btncolor' onClick={() =>navigate("/user-list")}>Cancel</Button>{' '}
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default NewUser;