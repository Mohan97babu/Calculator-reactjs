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

const NewUser = ({setActive,active,setEdit,data,setData}) => {
    const navigate =useNavigate();
    const [formData,setFormData] = useState({
        userName:"",
        email :"",
        mobile :"",
        message:""
    });
    const handleChange =(e) =>
    {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    
    const handleSubmit =() =>
    {
       const value = setData([...data,formData])
        axios.post("https://fts-backend.onrender.com/user/newRegistration",data)
        .then(response => setData(response.response.userDetails[value]))
        .catch(err =>console.log(err))
        navigate("/ApiTable");       
    }

    return (
        <Container fluid className='ps-0'  >    
            <NavBar />
            <Row className=' background' >
        <Col  md={4} lg={2} xl={2} className='d-none d-md-block ' >
           <SideBar
           active={active} 
           setActive={setActive}
           setEdit={setEdit}/>
        </Col>
        <Col   md={8} lg={10} xl={10} className='d-block pe-4' >
            <Row className=' mt-3 ms-3'> 

         <Card className=' px-0' >
         <Card.Header ><span className='textcolor1 fw-bold '> New User</span></Card.Header>
          <Card.Body>

        <Form  >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='fw-medium'>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={data.name} onChange={(e)=>handleChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='fw-medium'>Email: </Form.Label>
                <Form.Control type="email" placeholder="Enter Email "  onChange={(e)=>handleChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='fw-medium'>Mobile Number:</Form.Label>
                <Form.Control type="number" placeholder="Enter Mobile Number"  onChange={(e)=>handleChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className='fw-medium'>Message:</Form.Label>
                <Form.Control as="textarea" rows={4} cols={50} style={{resize:"none"}}  placeholder=" Enter Message" onChange={(e)=>handleChange(e)}/>
            </Form.Group>
            <div className='text-end p-3  '>

            <Button variant="primary" className=' alignbtn btncolor' onClick={(e)=>handleSubmit(e)}>Submit</Button>{' '}
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