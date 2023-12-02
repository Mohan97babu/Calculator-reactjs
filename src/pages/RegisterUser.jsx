import { Card, Col, Table, Pagination } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SideBar from "../components/layout/Sidebar";
import NavBar from "../components/layout/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ApiTable = ({ setActive, active, setEdit, data, setData, formData, setFormData, putApiShow, setPutApiShow }) => {

    // const handlePut =(key) =>
    // {
    //     axios.put(`https://fts-backend.onrender.com/admin/testing/editUserById?id=${key}`)
    //     .then(response => { listApi(); console.log(response.data.key);})
    //     // .then(response =>console.log("123456789",response))
    //     .catch(err => console.log(err))
    //     navigate("/new-user");
    //     console.log(key)
    // }
    const [state, setState] = useState({
        totalPages:"",
        totalResults:"",
        limit: 5,
        activePage: 1
    });
    
    const handlePageChange = (pageNumber) => {
        setState({ ...state, activePage: pageNumber })
    }
    const listApi = () => {
        axios.get(`https://fts-backend.onrender.com/admin/testing/getallusers?page=${state.activePage}&size=${state.limit}`)
            .then(response => { setData(response.data.response.paginationOutput.results);  })
            .then(response =>{ setState( state.totalPages === response.data.response.paginationOutput.totalPages) })
            .then(response =>{ setState( state.totalResults === response.data.response.paginationOutput.totalResults)})
            
            .catch(err => { console.log(err) });
    }

    const handleDelete = (id) => {
        axios.delete(`https://fts-backend.onrender.com/admin/testing/deleteUserById?id=${id}`)
            .then(response => { console.log("deleted successfully", response); listApi(); })
            .catch(err => { console.log(err, "error deleting data") })
    }

    useEffect(() => {
        listApi();
    }, []);

    useEffect(() => {
        listApi();
    }, [state.activePage]);
    // useEffect(() => {
    //     axios.get(" https://fts-backend.onrender.com/admin/testing/getallusers?page=1&size=10")
    //         .then(response => { setData(response.data.response.paginationOutput.results); })
    //         .catch(err => { console.log(err) });
    // }, [[],handleDelete])
    console.log("Active Page:", state.activePage);
    console.log("Data:", state.data);
    console.log(state.totalPages,"totalpages");
    console.log(state.totalResults,"totalresults");
    return (
        <Container fluid className='ps-0' >
            <NavBar />
            <Row className=' background'>
                <Col md={4} lg={2} xl={2} className='d-none d-md-block '>
                    <SideBar
                        active={active}
                        setActive={setActive}
                        setEdit={setEdit}
                    />

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
                                            <td className="fw-bold text-secondary text-center">Actions</td>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {data.map((user, index) => {
                                            const serialNumber = (state.activePage-1) * (state.limit) + index+1;
                                            return <tr key={index}>
                                                <td>{serialNumber}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone_number}</td>
                                                <td>{user.message}</td>
                                                <td>
                                                    <div className="d-flex justify-content-between" >
                                                        <Link to={`/edit-user/${user.id}`} > <Icon icon="uil:edit" color="#7464bc" width="20" height="20" style={{ cursor: "pointer" }} /> </Link>
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
                                        <Pagination.Prev onClick={() => setState((prev) => ({ ...prev, activePage: prev.activePage - 1 }))} disabled={state.activePage === 1} />
                                        {Array.isArray(data) && data?.map((_, i) => (
                                            <Pagination.Item
                                                key={i+ 1}
                                                onClick={() => handlePageChange(i + 1)}
                                                active={i + 1 === state.activePage}
                                            >
                                                {i + 1}
                                            </Pagination.Item>
                                        ))}
                                        <Pagination.Next onClick={() => setState((prev) => ({ ...prev, activePage: prev.activePage + 1 }))} disabled={state.totalPages} />
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