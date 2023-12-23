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
import { toast, ToastContainer } from 'react-toastify';




const NewUser = ({ setActive, active, setEdit, data, setData, formData, setFormData, clearState ,setIsSignedIn }) => {
    const navigate = useNavigate();
    
    const postapiUrl = process.env.REACT_APP_POSTAPI_NEWUSER;
    
    const putapiUrl = process.env.REACT_APP_PUTAPI_NEWUSER;
    
    const getapiUrl = process.env.REACT_APP_GETAPI_NEWUSER;
    
    // axios.interceptors.request.use(
    //     (config) => {

    //         const accessToken = localStorage.getItem('accesstoken');

    //         if (accessToken) {
    //             config.headers['Authorization'] = `Bearer ${accessToken}`;
    //         }

    //         return config;
    //     },
    //     (error) => {
    //         return Promise.reject(error);
    //     }
    // );
    // axios.interceptors.response.use(
    //     (response) => {

    //         return response;
    //     },
    //     async (error) => {
    //         const originalRequest = error.config;


    //         if (error.response.status === 401 && !originalRequest._retry) {
    //             originalRequest._retry = true;


    //             navigate("/");

    //             return Promise.reject(error);
    //         }

    //         return Promise.reject(error);
    //     }
    // );
    const handleSubmit  = async (values, { setSubmitting }) => {

        if (param.id) {
           await axios({
                method: "put",
                url: `${putapiUrl}id=${param.id}`,
                data: values,
            })
                // axios.put(`https://fts-backend.onrender.com/admin/testing/editUserById?id=${param.id}`, values)
                .then(response => {
                    console.log(response);
                 setData(response.data.response.user);
                    console.log(setData,"546");
                    console.log("toast work1");
                    toast.success("Edited Successfully");
                    console.log("toast work2");
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
                //    axios.post("https://fts-backend.onrender.com/user/newRegistration", values)
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


    // const handleSuccessToast = () => {
    //     toast.success("Edited Successfully");
    //   };
    // const handleSubmit = async (values, { setSubmitting }) => {
    //     try {
    //         if (param.id) {
    //             const response = await axios.put(`${putapiUrl}id=${param.id}`, values);
    //             setData(response.data.response.paginationOutput.results(formData));
    //             toast.success("Edited Successfully");

    //         } else {
    //             values.phone_number = values.phone_number.toString();
    //             const response = await axios.post(postapiUrl, values);
    //             setFormData(response.data.formData);
    //             toast.success("submitted Successfully");

    //         }
    //     } catch (error) {
    //         console.error(error);
    //         // Handle error as needed
    //     } finally {
    //         setSubmitting(false);
    //         setTimeout(() => {
    //             navigate("/user-list");
    //             clearState();
    //         }, 2000);
    //     }
    // };



    const schema = yup.object().shape({
        name: yup.string("Enter Valid Name").required(),
        email: yup.string().email("Enter Valid Email").required(),
        phone_number: yup.string("Enter Valid mobile number").required(),
        message: yup.string().required(),
    });
    const param = useParams();

//    const product =useSelector((state) => state.productListData)
//    console.log(product,"product");


    useEffect(() => {
      
        if (param.id) {
            axios({
                method: "get",
                url: `${getapiUrl}id=${param.id}`
            })
                // axios.get(` https://fts-backend.onrender.com/admin/testing/getUserById?id=${param.id}`)
                .then(response => { setFormData(response.data.response.user); })
                .catch(err => console.log(err))
        }
    }, [param.id])
    
    
    return (

        <Container fluid className='ps-0'  >
            {/* <NavBar 
            setIsSignedIn={setIsSignedIn}/> */}
            <Row  >
                {/* <Col md={4} lg={2} xl={2} className='d-none d-md-block '>
                    <SideBar
                        active={active}
                        setActive={setActive}
                        setEdit={setEdit}
                    />
                </Col> */}
                {/* <Col md={8} lg={10} xl={10} className='d-block pe-4' > */}
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
                                                <Form.Label className='fw-medium'>Email: </Form.Label>
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
                                                <Form.Control as="textarea" rows={4} cols={50} style={{ resize: "none" }} name="message" value={values.message} placeholder=" Enter Message" onChange={handleChange} onBlur={handleChange} isInvalid={!!errors.message} />
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
                {/* </Col> */}
            </Row>
            <ToastContainer />
        </Container>
    );
}
export default NewUser