import { Card,  Table, Modal, Button, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ApiTable = ({  data, setData }) => {
 
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const [spinner, setSpinner] = useState(true);
    const [show, setShow] = useState(false)
    const handleOpen = (user) => { setShow(true); setUser(user) }
    const handleClose = () => { setShow(false); setUser(null) }

    const [user, setUser] = useState(null)
    const [deleteShow, setDeleteShow] = useState({
        openModal: false,
        confirmDelete: false,
        deleteId: "",
        setTotal: null,
        perPage: 2,
    });
    let limit = deleteShow.perPage;
    const navigate =useNavigate();
    const handleOpenDelete = (user) => {
        setUser(user);
        setDeleteShow({ openModal: true, confirmDelete: true, deleteId: user.id });
    };

    const handleCloseDelete = () => { setDeleteShow({ openModal: false, confirmDelete: false, deleteId: "" }); setUser(null) };
    const apiUrl = process.env.REACT_APP_GETAPI_REGISTEREDUSER;

    const listApi = async (page) => {
        try {
            const response = await axios({
                method: 'get',
                url: apiUrl,
                params: {
                    page: page,
                    size: limit,
                },
            });
            const total = response.data.response.paginationOutput.totalResults;
            setPageCount(Math.ceil(total / limit));
            setDeleteShow({ ...deleteShow, setTotal: total });
            setData(response.data.response.paginationOutput.results);
            setSpinner(false);
        } catch (error) {
            console.error("Error in listApi:", error);
        }
    };
    const handleDelete = async () => {

        if (deleteShow.confirmDelete) {

            await axios({
                method: 'delete',
                url: `https://fts-backend.onrender.com/admin/testing/deleteUserById?id=${deleteShow.deleteId}`,
            })
                .then(response => { console.log("deleted successfully", response); listApi(); toast.success("Deleted successfully"); setDeleteShow({ openModal: false, deleteId: "", confirmDelete: false }); })
                .catch(err => { console.log(err, "error deleting data") })
        }
        else {
            setDeleteShow({ openModal: true, confirmDelete: false });
        }
    }

    useEffect(() => {

        listApi(currentPage);
    }, []);
    useEffect(() => {
        listApi(currentPage);
        setCurrentPage(1);

    }, [deleteShow.perPage])
    const handlePageClick = (data) => {
        const newPage = data.selected + 1;
        setCurrentPage(newPage);

        try {
            const commentsFromServer = listApi(newPage);
            setData(commentsFromServer);
        } catch (error) {
            console.error('Error handling page click:', error);
        }
    };
    return (
        <Container fluid className='ps-0' >
            <Row >
                <div className="row pt-4 px-0 d-flex ">
                    <Col xs={6}>

                    <span className="d-flex fw-bold textcolor2 mb-3 fs-4">FTS Dashboard  
                    </span>
                    </Col>
                   <Col xs={6} className="text-end pe-0 ">
                   
                    <Button variant="primary" className="btncolor textcolor2" onClick={() => navigate("/new-user")}>
                    <Icon icon="mingcute:user-add-fill"  className="mb-1 me-2" />
                        Add</Button>
                   </Col>  
                </div>
                <Row className='mt-3 ms-1 '>
                   {spinner ? <div className="d-flex justify-content-center align-items-center mt-5">                    
                    <div class="spinner-border " role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> 
                </div> : <Card className="px-0">
                        <Card.Header className="back py-2 "><h5 className="text-white mt-1 "> FTS Dashboard</h5></Card.Header>
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
                                    {Array.isArray(data) && data.map((user, index) => {
                                        const serialNumber = (currentPage - 1) * (limit) + index + 1;
                                        return (
                                            <>
                                                    <tr key={index}>   
                                                    <td>{serialNumber}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone_number}</td>
                                                    <td>{user.message}</td>
                                                    <td>
                                                        <div className="d-flex justify-content-between" >
                                                            <Link title="Edit" to={`/edit-user/${user.id}`} > <Icon icon="uil:edit" color="#7464bc" width="20" height="20" style={{ cursor: "pointer" }} /> </Link>
                                                            <span title="Delete"> <Icon icon="fluent:delete-16-filled" color="#7464bc" width="20" height="20" style={{ cursor: "pointer" }} onClick={() => handleOpenDelete(user)} /> </span>
                                                            <span title="View"> <Icon icon="carbon:view" color="#7464bc" width="20" height="20" style={{ cursor: "pointer" }} onClick={() => handleOpen(user)} /></span>
                                                        </div>
                                                    </td>                                                    
                                                </tr> 
                                            </>
                                        )
                                    })}
                                </tbody>
                            </Table>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header className="cardcolor textcolor1 " closeButton>
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
                                <Modal.Footer className="cardcolor" >
                                    <Button variant="primary" className="btncolor" onClick={handleClose}>
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
                            </Modal>
                            <div className="d-flex justify-content-between px-2">

                                <select className="form-select w-25 h-25" aria-label="Default select example" onChange={(e) => setDeleteShow({ ...deleteShow, perPage: e.target.value })}>
                                    <option value="2">2 items per page</option>
                                    <option value="4">4 items per page</option>
                                    <option value="6">6 items per page</option>
                                </select>

                                <div>
                                    <p className="fw-medium me-3 mt-2">Total of Entries : {deleteShow.setTotal ? deleteShow.setTotal : 0}</p>
                                </div>
                                <div className="d-flex">
                                     <ReactPaginate
                                        previousLabel={"<<"}
                                        nextLabel={">>"}
                                        breakLabel={"..."}
                                        pageCount={pageCount}
                                        pageRangeDisplayed={limit}
                                        onPageChange={handlePageClick}
                                        containerClassName={"pagination  "}
                                        pageClassName={"page-item  "}
                                        pageLinkClassName={"page-link  "}
                                        previousClassName={"page-item  "}
                                        previousLinkClassName={"page-link  "}
                                        nextClassName={"page-item "}
                                        nextLinkClassName={"page-link "}
                                        breakClassName={"page-item"}
                                        breakLinkClassName={"page-link"}
                                        activeClassName={"active "}
                                        nextAriaLabel={">>>"}
                                    /> 
                                </div>
                            </div>
                        </Card.Body>
                    </Card> }
                </Row>
            </Row>
            <ToastContainer />
        </Container>
    );
}
export default ApiTable