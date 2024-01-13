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

const ApiTable = ({ data, setData, spinner, setSpinner }) => {
    const baseurl = process.env.REACT_APP_BASEURL_INTERCEPTORS;
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const [show, setShow] = useState(false)
    const handleOpen = (user) => { setShow(true); setUser(user) }
    const handleClose = () => { setShow(false); setUser(null) }

    const [user, setUser] = useState(null)
    const [deleteShow, setDeleteShow] = useState({
        openModal: false,
        confirmDelete: false,
        deleteId: "",
        setTotal: null,
        perPage: 5,
    });
    let limit = deleteShow.perPage;
    const navigate = useNavigate();
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
                url: `${baseurl}/admin/testing/deleteUserById?id=${deleteShow.deleteId}`,
            })
                .then(response => { console.log("deleted successfully", response); listApi(); toast.success("Deleted successfully"); setDeleteShow({ openModal: false, deleteId: "", confirmDelete: false }); })
                .catch(err => { console.log(err, "error deleting data") })
        }
        else {
            setDeleteShow({ openModal: true, confirmDelete: false });
        }
    }

    // useEffect(() => {

    //     listApi(currentPage);
    // }, []);
    useEffect(() => {
        listApi(currentPage);
      

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
        <Container fluid className='ps-0 pe-0' >
            <Row  className="w-100">
                <div className="row pt-4 px-0 w-100 text-end ">
                    {/* <Col xs={6}>

                    <span className="d-flex fw-bold textcolor2 mb-3 fs-4">FTS Dashboard  
                    </span>
                    </Col> */}
                    <Col xs={12} className=" pe-0 ">

                        <Button variant="primary" className="btncolor textcolor2" onClick={() => navigate("/new-user")}>
                            <Icon icon="mingcute:user-add-fill" className="mb-1 me-2" />
                            Add</Button>
                    </Col>
                </div>
                <Row className='mt-3 ms-1 pe-0 '>
                    {spinner ? <div className="d-flex justify-content-center align-items-center mt-5">
                        <div className="spinner-border " role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> : <Card className="px-0">
                        <Card.Header className="back py-2 "><h5 className="text-white mt-1 "> FTS Dashboard</h5></Card.Header>
                        <Card.Body className="p-0">
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th className="fw-bold text-secondary">S.no</th>
                                        <th className="fw-bold text-secondary">Name</th>
                                        <th className="fw-bold text-secondary">E-mail</th>
                                        <th className="fw-bold text-secondary">Mobile Number</th>
                                        <th className="fw-bold text-secondary">Message</th>
                                        <th className="fw-bold text-secondary text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(data) && data.map((user, index) => {
                                        const serialNumber = (currentPage - 1) * (limit) + index + 1;
                                        return (

                                            <tr key={index}>
                                                {spinner ? (<div className="d-flex justify-content-center align-items-center mt-5">
                                                    <div className="spinner-border " role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                </div> )
                                                 : 
                                                  (
                                                  <>
                                                  
                                                  <td>{serialNumber}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone_number}</td>
                                                    <td>{user.message}</td>
                                                    <td>
                                                        <div className="d-flex justify-content-between" >
                                                            <Link title="Edit" to={`/edit-user/${user.id}`} > <Icon icon="uil:edit" color="#7464bc" width="20" height="20"  className="cursorhand" /> </Link>
                                                            <span title="Delete"> <Icon icon="fluent:delete-16-filled" color="#7464bc" width="20" height="20" className="cursorhand" onClick={() => handleOpenDelete(user)} /> </span>
                                                            <span title="View"> <Icon icon="carbon:view" color="#7464bc" width="20" height="20" className="cursorhand" onClick={() => handleOpen(user)} /></span>
                                                        </div>
                                                    </td>
                                                  </>
                                                    )}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                            <Modal show={show} onHide={handleClose}>
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
                                <Modal.Header className="back text-white" closeButton>
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
                                <Modal.Footer className="back">
                                    <Button className="btncolor text-black" onClick={() => { handleDelete() }}>
                                        Ok
                                    </Button>
                                    <Button className="btncolor text-black" onClick={handleCloseDelete}>
                                        Cancel
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <div className=" row d-flex justify-content-between px-2">
                               <div className="col-sm-12 col-md-12 col-lg-3 col-xl-4">

                                <select className="form-select " aria-label="Default select example" onChange={(e) => setDeleteShow({ ...deleteShow, perPage: e.target.value })}>
                                    <option value="5">5 items per page</option>
                                    <option value="10">10 items per page</option>

                                </select>
                               </div>

                                <div className="col-sm-12 col-md-12 col-lg-3 col-xl-4 text-center">
                                    <p className="fw-medium me-3 mt-2">Total of Entries : {deleteShow.setTotal ? deleteShow.setTotal : 0}</p>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 d-flex justify-content-end " >
                                    <ReactPaginate
                                        previousLabel={"<"}
                                        nextLabel={">"}
                                        breakLabel={window.innerWidth < 768 ?"...":null}
                                        pageCount={pageCount}
                                        pageRangeDisplayed={5}
                                        onPageChange={handlePageClick}
                                        containerClassName={"pagination  "}
                                        pageClassName={"page-item  "}
                                        pageLinkClassName={"page-link  "}
                                        previousClassName={"page-item  "}
                                        previousLinkClassName={"page-link  "}
                                        nextClassName={"page-item "}
                                        nextLinkClassName={"page-link  "}
                                        breakClassName={"page-item"}
                                        breakLinkClassName={"page-link"}
                                        activeClassName={"active  "}
                                      
                                    />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>}
                </Row>
            </Row>
            <ToastContainer />
        </Container>
    );
}
export default ApiTable