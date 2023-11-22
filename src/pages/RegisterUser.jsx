import { Card, Col, Table, Pagination } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SideBar from "../components/layout/Sidebar";
import NavBar from "../components/layout/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { Icon } from "@iconify/react";

const ApiTable = ({ setActive, active, setEdit, data, setData }) => {

    const listApi = () => {
        axios.get(" https://fts-backend.onrender.com/admin/testing/getallusers?page=1&size=10")
            .then(response => { setData(response.data.response.paginationOutput.results); })
            .catch(err => { console.log(err) });
    }

    const handleDelete = (id) => {
        axios.delete(`https://fts-backend.onrender.com/admin/testing/deleteUserById?id=${id}`)
            // .then(setData(data.filter((data) => data.id !== id)))
            .then(response => { console.log("deleted successfully", response); listApi(); })
            .catch(err => console.log(err, "error deleting data"))


    }

    useEffect(() => {
        listApi()
    }, [])
    // useEffect(() => {
    //     axios.get(" https://fts-backend.onrender.com/admin/testing/getallusers?page=1&size=10")
    //         .then(response => { setData(response.data.response.paginationOutput.results); })
    //         .catch(err => { console.log(err) });
    // }, [handleDelete])

    return (
        <Container fluid className='ps-0' >
            <NavBar />
            <Row className=' background'>
                <Col md={4} lg={2} xl={2} className='d-none d-md-block '>
                    <SideBar
                        active={active}
                        setActive={setActive}
                        setEdit={setEdit} />

                </Col>
                <Col md={8} lg={10} xl={10} className='d-block pe-4'>
                    <div className="row pt-4">
                        <div className="d-flex fw-medium  mb-3"><h5 className="pe-2 text-secondary">FTS Registered User</h5> &#10095; <h5 className="ps-2">User List</h5> </div>
                    </div>
                    <Row className='mt-3 ms-1 '>
                        <Card className="px-0">
                            <Card.Header className="cardcolor py-2 "><h5 className="textcolor1 mt-1 "> User List</h5></Card.Header>
                            <Card.Body className="p-0">
                                <Table striped bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <td className="fw-bold text-secondary">S.no.</td>
                                            <td className="fw-bold text-secondary">Name</td>
                                            <td className="fw-bold text-secondary">E-mail id</td>
                                            <td className="fw-bold text-secondary">Mobile Number</td>
                                            <td className="fw-bold text-secondary">Message</td>
                                            <td className="fw-bold text-secondary">Actions</td>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {data.map((user, index) => {
                                            return <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone_number}</td>
                                                <td>{user.message}</td>
                                                <td>
                                                    <div className="d-flex justify-content-between" >
                                                        <span> <Icon icon="uil:edit" color="#7464bc" width="20" height="20" style={{ cursor: "pointer" }} /> </span>
                                                        <span> <Icon icon="fluent:delete-16-filled" color="#7464bc" width="20" height="20" style={{ cursor: "pointer" }} onClick={() => handleDelete(user.id)} /> </span>
                                                        <span> <Icon icon="carbon:view" color="#7464bc" width="20" height="20" style={{ cursor: "pointer" }} /></span>
                                                    </div>
                                                </td>
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