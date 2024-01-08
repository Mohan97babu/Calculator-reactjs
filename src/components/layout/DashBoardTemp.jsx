import { Card, Table, Modal, Button, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TableMain from "../Table/Tablemain";

const DashBoardTemp = ({ navigateContent, spinner, createProfileData, setCreateProfileData, edit, setEdit, tablehead ,paginate,title }) => {


    return (
        <Container fluid className='ps-0' >
            <Row >
                <div className="row pt-4 px-0 text-end ">
                    {/* <Col xs={6}>

                    <span className="d-flex fw-bold textcolor2 mb-3 fs-4">FTS Dashboard  
                    </span>
                    </Col> */}
                    <Col xs={12} className=" pe-0 ">

                        <Button variant="primary" className="btncolor textcolor2" onClick={navigateContent}>
                            <Icon icon="mingcute:user-add-fill" className="mb-1 me-2" />
                            Add</Button>
                    </Col>
                </div>
                <Row className='mt-3 ms-1 '>
                     <Card className="px-0">
                        <Card.Header className="back py-2 "><h5 className="text-white mt-1 ">{title}</h5></Card.Header>
                        <Card.Body className="p-0">
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        {/*
                                        <th className="fw-bold text-secondary">S.no</th>
                                        <th className="fw-bold text-secondary">Name</th>
                                        <th className="fw-bold text-secondary">E-mail</th>
                                        <th className="fw-bold text-secondary">Mobile Number</th>
                                        <th className="fw-bold text-secondary">Message</th>
                                        <th className="fw-bold text-secondary text-center">Actions</th> 
                                        */}
                                        {tablehead}
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableMain
                                        createProfileData={createProfileData}
                                        setCreateProfileData={setCreateProfileData}
                                        edit={edit}
                                        setEdit={setEdit}
                                    />
                                </tbody>
                            </Table>
                            {/* <Modal show={show} onHide={handleClose}>
                                <Modal.Header className="back text-white" closeButton>
                                    <Modal.Title>User Details</Modal.Title>
                                </Modal.Header>
                                <Modal.Body  >
                                    {user !== null ?
                                        <div key={user.id}>
                                            {console.log(user)}

                                            <label className="text-secondary">Name:</label>
                                            <div className="fw-medium mb-2">{user.name}</div>
                                            <label className="text-secondary" >Email:</label>
                                            <div className="fw-medium mb-2">{user.email}</div>
                                            <label className="text-secondary" >Mobile Number:</label>
                                            <div className="fw-medium mb-2">{user.phone_number}</div>
                                            <label className="text-secondary" >Message:</label>
                                            <div className="fw-medium mb-2">{user.message}</div>
                                        </div>
                                        : <div> No data found</div>}
                                </Modal.Body >
                                <Modal.Footer className="back" >
                                    <Button variant="primary" className="btncolor text-black" onClick={handleClose}>
                                        Ok
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <Modal show={deleteShow.openModal} onHide={handleCloseDelete}>
                                <Modal.Header className="cardcolor textcolor1" closeButton>
                                    <Modal.Title>Delete User</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {user !== null ?
                                        <div key={user.id}>
                                            {console.log(user)}
                                            <p className="fw-medium">Are You Sure You want To Delete This Entry ???</p>
                                            <label className="text-secondary">Name:</label>
                                            <div className="fw-medium mb-2">{user.name}</div>
                                            <label className="text-secondary" >Email:</label>
                                            <div className="fw-medium mb-2">{user.email}</div>
                                            <label className="text-secondary" >Mobile Number:</label>
                                            <div className="fw-medium mb-2">{user.phone_number}</div>
                                            <label className="text-secondary" >Message:</label>
                                            <div className="fw-medium mb-2">{user.message}</div>
                                        </div>
                                        : <div> Are you sure you want to delelte this??</div>}
                                </Modal.Body>
                                <Modal.Footer className="cardcolor">
                                    <Button className="btncolor" onClick={() => { handleDelete() }}>
                                        Ok
                                    </Button>
                                    <Button className="btncolor" onClick={handleCloseDelete}>
                                        Cancel
                                    </Button>
                                </Modal.Footer>
                            </Modal> */}
                            <div className="d-flex justify-content-between px-2">

                                <select className="form-select w-25 h-25" aria-label="Default select example" >
                                    <option value="5">5 items per page</option>
                                    <option value="10">10 items per page</option>

                                </select>

                                <div>
                                    <p className="fw-medium me-3 mt-2">Total of Entries :</p>
                                </div>
                                <div className="d-flex">
                                  {paginate}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Row>
            <ToastContainer />
        </Container>
    );
}
export default DashBoardTemp