import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const NewUser = ({ setData, formData, setFormData, clearState}) => {
    const navigate = useNavigate();    
    const postapiUrl = process.env.REACT_APP_POSTAPI_NEWUSER;    
    const putapiUrl = process.env.REACT_APP_PUTAPI_NEWUSER;    
    const getapiUrl = process.env.REACT_APP_GETAPI_NEWUSER;

    const handleSubmit  = async (values, { setSubmitting }) => {
        if (param.id) {
           await axios({
                method: "put",
                url: `${putapiUrl}id=${param.id}`,
                data: values,
            })
                .then(response => {
                 setData(response.data.response.user);
                    toast.success("Edited Successfully");
                })
                .catch(err => console.log(err))
                .finally(() => {
                    setSubmitting(false);
                });
        }
        else {
            values.phone_number = values.phone_number.toString();
          await axios({
                method: "post",
                url: `${postapiUrl}`,
                data: values,
            })
                .then(response => { setFormData(response.formData); toast.success("Submitted Successfully"); })
                .catch(err => console.log(err))
                .finally(() => {
                    setSubmitting(false);
                });
        }
        setTimeout(() => {
            navigate("/user-list");
        }, 2000);
        clearState();
    }
    const schema = yup.object().shape({
        name: yup.string("Enter Valid Name").required("Name is Required"),
        email: yup.string().email("Enter Valid Email").required("E-mail is Required"),
        phone_number: yup.string("Enter Valid mobile number").required("Mobile Number is Required"),
        message: yup.string().required("Message is Required"),
    });
    const param = useParams();
    useEffect(() => {
      
        if (param.id) {
            axios({
                method: "get",
                url: `${getapiUrl}id=${param.id}`
            })
                .then(response => { setFormData(response.data.response.user); })
                .catch(err => console.log(err))
        }
    }, [param.id])
    
    return (

        <Container fluid className='ps-0'  >
            <Row>
                    <div className="row pt-4">
                        <div className="d-flex fw-medium "><h5 className="pe-2 text-secondary cursorhand" onClick={() => navigate("/user-list")}>FTS Dashboard</h5> &#10095; <h5 className="ps-2">{param.id ? "Edit" : "Add"}User</h5> </div>
                    </div>                   
                    <Row className=' mt-3 ms-1'>
                        <Card className=' px-0' >
                            <Card.Header ><span className='textcolor1 fw-bold '>FTS {param.id ? "Edit" : "Add"} User</span></Card.Header>
                            <Card.Body>
                                <Formik
                                    validationSchema={schema}
                                    onSubmit={handleSubmit}
                                    initialValues={{
                                        name: formData.name || "",
                                        email: formData.email || "",
                                        phone_number: formData.phone_number || "",
                                        message: formData.message || "",
                                    }}
                                    
                                    enableReinitialize={true}
                                >
                                    {({ handleSubmit, handleChange, values, errors }) => (
                                        <Form noValidate onSubmit={handleSubmit} >
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label className='fw-medium'>Name:</Form.Label>
                                                <Form.Control type="text" placeholder="Enter Name" name="name" value={values.name} onChange={handleChange} onBlur={handleChange} onKeyDown={(e) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "*"].includes(e.key) && e.preventDefault()} isInvalid={!!errors.name} />
                                                <Form.Control.Feedback type={"invalid"} >{errors.name}</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                                <Form.Label className='fw-medium'>E-mail: </Form.Label>
                                                <Form.Control type="email" placeholder="Enter Email " name="email" value={values.email} onChange={handleChange} onBlur={handleChange} isInvalid={!!errors.email} />
                                                <Form.Control.Feedback type={"invalid"} >{errors.email}</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                                <Form.Label className='fw-medium'>Mobile Number:</Form.Label>
                                                <Form.Control type="number" placeholder="Enter Mobile Number" name="phone_number" value={values.phone_number} onChange={handleChange} onBlur={handleChange} onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} isInvalid={!!errors.phone_number} />
                                                <Form.Control.Feedback type={"invalid"} >{errors.phone_number}</Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label className='fw-medium'>Message:</Form.Label>
                                                <Form.Control as="textarea" rows={4} cols={50} className='address' name="message" value={values.message} placeholder=" Enter Message" onChange={handleChange} onBlur={handleChange} isInvalid={!!errors.message} />
                                                <Form.Control.Feedback type={"invalid"} >{errors.message}</Form.Control.Feedback>
                                            </Form.Group>
                                            <div className='text-end p-3 '>
                                                <Button variant="primary" type="submit" className=' alignbtn btncolor me-2 text-black fw-medium' >{param.id ? "Update" : "Submit"}</Button>
                                                <Button variant="primary" className=' alignbtn btncolor text-black fw-medium' onClick={() => (clearState(), navigate("/user-list"))}>Cancel</Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </Card.Body>
                        </Card>
                    </Row>
            </Row>
            <ToastContainer />
        </Container>
    );
}
export default NewUser