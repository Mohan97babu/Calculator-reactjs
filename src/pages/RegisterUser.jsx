import { Card, Col, Table ,Pagination } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SideBar from "../components/layout/Sidebar";
import NavBar from "../components/layout/Navbar";
import axios from "axios";
import { useEffect } from "react";

const ApiTable = ({setActive,active,setEdit,data,setData}) => {
    
    useEffect(()=>
    {    
       axios.get(" https://fts-backend.onrender.com/admin/testing/getallusers?page=1&size=5")
       .then(response => {setData(response.data.response.paginationOutput.results);})
       .catch(err =>{console.log(err)});
    },[])
   
    return (
        <Container fluid className='ps-0' >
            <NavBar />
            <Row className=' background'>
                <Col  md={4} lg={2} xl={2} className='d-none d-md-block '>
                    <SideBar
                    active={active}
                    setActive={setActive}
                    setEdit={setEdit} />

                </Col>
                <Col md={8} lg={10} xl={10} className='d-block pe-4'>
                    <Row className='mt-3 ms-3 '>
                        <Card className="px-0">
                            <Card.Header><span className="textcolor1 fw-bold "> Table</span></Card.Header>
                            <Card.Body className="p-0">
                                <Table striped bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <td className="fw-bold text-secondary">S.no.</td>
                                            <td className="fw-bold text-secondary">Name</td>
                                            <td className="fw-bold text-secondary">E-mail id</td>
                                            <td className="fw-bold text-secondary">Mobile Number</td>
                                            <td className="fw-bold text-secondary">Message</td>
                                        </tr>
                                    </thead>
                                    <tbody>

                                       {data.map((user,index) =>{
                                        return <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone_number}</td>
                                            <td>{user.message}</td>
                                        </tr>
                                          
                                     })}
                                        
                                       
                                    </tbody>
                                </Table>
                                <div className="d-flex justify-content-end px-2">
                                <Pagination>
                                    <Pagination.Prev />
                                    <Pagination.Item>{1}</Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Item>{3}</Pagination.Item>
                                    <Pagination.Next />
                                </Pagination>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
}
export default ApiTable