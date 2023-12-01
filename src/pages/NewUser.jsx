import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from '../components/layout/Sidebar';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import NavBar from '../components/layout/Navbar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useEffect } from 'react';
const NewUser = ({ setActive, active, setEdit, data, setData, formData, setFormData, putApiShow, setPutApiShow, clearState }) => {
    const navigate = useNavigate();

    // const handleChange = (e) => {

    //     setFormData({ ...formData, [e.target.name]: e.target.value });

    // }

    const handleSubmit = (values, { setSubmitting }) => {
        
        if (param.id) {
             axios.put(`https://fts-backend.onrender.com/admin/testing/editUserById?id=${param.id}`, values)
                .then(response => { setData(response.data.response.paginationOutput.results(formData)); })
                .catch(err => console.log(err))
            navigate("/user-list");
            // setPutApiShow(false)
            
        }
        else {
            values.phone_number = values.phone_number.toString();
              axios.post("https://fts-backend.onrender.com/user/newRegistration", values)
                .then(response => setFormData(response.formData))
                .catch(err => console.log(err))
                .finally(() => {
                    setSubmitting(false);
                });
        }
        navigate("/user-list")
        
        clearState();
    }
    const schema = yup.object().shape({
        name: yup.string("enter valid name").required(),
        email: yup.string().email("enter valid email").required(),
        phone_number: yup.string("enter valid mobile number").required(),
        message: yup.string().required(),
    });
    const param = useParams();
    console.log(param, "123");
    
    useEffect(() => {
        if(param.id)
        {
        axios.get(` https://fts-backend.onrender.com/admin/testing/getUserById?id=${param.id}`)
            .then(response => { setFormData(response.data.response.user); })
            .catch(err => console.log(err))
        }
    }, [param.id])

    return (
        <Container fluid className='ps-0'  >
            <NavBar />
            <Row className=' background' >
                <Col md={4} lg={2} xl={2} className='d-none d-md-block '>
                    <SideBar
                        active={active}
                        setActive={setActive}
                        setEdit={setEdit}
                    />
                </Col>
                <Col md={8} lg={10} xl={10} className='d-block pe-4' >
                    <div className="row pt-4">
                        <div className="d-flex fw-medium "><h5 className="pe-2 text-secondary">FTS New User</h5> &#10095; <h5 className="ps-2">{param.id ? "Edit" : "Add"}User</h5> </div>
                    </div>
                    <Row className=' mt-3 ms-3'>

                        <Card className=' px-0' >
                            <Card.Header ><span className='textcolor1 fw-bold '>{param.id ? "Edit" : "Add"} User</span></Card.Header>
                            <Card.Body>
                                <Formik
                                    validationSchema={schema}
                                    onSubmit={handleSubmit}
                                    initialValues={{  name: formData.name || "",
                                    email: formData.email || "",
                                    phone_number: formData.phone_number || "",
                                    message: formData.message || "", }}  
                                    enableReinitialize={true}                                            
                                >
                                    {({ handleSubmit, handleChange, values, errors }) => (
                                        <Form noValidate onSubmit={handleSubmit} >
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label className='fw-medium'>Name:</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Name" name="name" value={values.name } onChange={handleChange} onBlur={handleChange} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "*"].includes(e.key) && e.preventDefault()} isInvalid={!!errors.name} />
                                                <Form.Control.Feedback type={"invalid"} >{errors.name}</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                                <Form.Label className='fw-medium'>Email: </Form.Label>
                                                <Form.Control type="email" placeholder="Enter Email " name="email" value={values.email } onChange={handleChange} onBlur={handleChange} isInvalid={!!errors.email} />
                                                <Form.Control.Feedback type={"invalid"} >{errors.email}</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                                <Form.Label className='fw-medium'>Mobile Number:</Form.Label>
                                                <Form.Control type="number" placeholder="Enter Mobile Number" name="phone_number" value={values.phone_number } onChange={handleChange} onBlur={handleChange} onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} isInvalid={!!errors.phone_number} />
                                                <Form.Control.Feedback type={"invalid"} >{errors.phone_number}</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label className='fw-medium'>Message:</Form.Label>
                                                <Form.Control as="textarea" rows={4} cols={50} style={{ resize: "none" }} name="message" value={values.message } placeholder=" Enter Message" onChange={handleChange} onBlur={handleChange} isInvalid={!!errors.message} />
                                                <Form.Control.Feedback type={"invalid"} >{errors.message}</Form.Control.Feedback>
                                            </Form.Group>
                                            <div className='text-end p-3  '>

                                                <Button variant="primary" type="submit" className=' alignbtn btncolor' >{param.id ? "Update" : "Submit"}</Button>
                                                <Button variant="primary" className=' alignbtn btncolor' onClick={() => (clearState(), navigate("/user-list"))}>Cancel</Button>
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
export default NewUser