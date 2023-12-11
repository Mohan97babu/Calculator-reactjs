import { Card, Col, Table, Modal, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SideBar from "../components/layout/Sidebar";
import NavBar from "../components/layout/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ApiTable = ({ setActive, active, setEdit, data, setData }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    let limit = 5;
    const [show, setShow] = useState(false)
    const handleOpen = (user) => { setShow(true); setUser(user) }
    const handleClose = () => { setShow(false); setUser(null) }
    const [user, setUser] = useState(null)
    const [deleteShow, setDeleteShow] = useState({
        openModal: false,
        confirmDelete: false,
        deleteId: "",
    });
    let id1;
    const handleOpenDelete = (id) => {
       // id1 = id;
        console.log(id1, "789");
        setDeleteShow({ openModal: true, confirmDelete: true, deleteId: id });
    };
    const handleCloseDelete = () => setDeleteShow({ openModal: false, confirmDelete: false, deleteId: "" });
    const apiUrl = process.env.REACT_APP_GETAPI_REGISTEREDUSER;
    const navigate = useNavigate();
    axios.interceptors.request.use(
        (config) => {

            const accessToken = localStorage.getItem('accesstoken');


            if (accessToken) {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
                config.headers[`object`] =`hiii;`;
            }

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    axios.interceptors.response.use(
        (response) => {

            return response;
        },
        async (error) => {



            if (error.response.status === 400) {

                console.log("error");

                navigate("/");

                return Promise.reject(error);
            }

            return Promise.reject(error);
        }
    );

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
            setData(response.data.response.paginationOutput.results);
        } catch (error) {
            console.error("Error in listApi:", error);


            if (error.response && error.response.status === 400) {
                console.log("Data not found");
            } else {
                console.log("Server is busy");
            }


            navigate("/dashboard");
        }
    };
    const handleDelete = async () => {
        
        // setDeleteShow({ ...deleteShow, openModal: true });

        if (deleteShow.confirmDelete) {

            await axios({
                method: 'delete',
                url: `https://fts-backend.onrender.com/admin/testing/deleteUserById?id=${deleteShow.deleteId}`,
            })
                .then(response => { console.log("deleted successfully", response); listApi(); toast.success("Deleted successfully"); setDeleteShow({ openModal:false,deleteId:"", confirmDelete: false }); })
                .catch(err => { console.log(err, "error deleting data") })
        }
        else {
            setDeleteShow({ openModal: true, confirmDelete: false });
        }
    }
    // const handleDelete = async (id) => {

    //   console.log(deleteShow,"ok button");
    //     try {
    //         if (deleteShow.confirmDelete) {

    //              await axios.delete(`https://fts-backend.onrender.com/admin/testing/deleteUserById?id=${deleteShow.deleteId}`);

    //             console.log(`User with ID ${id} deleted successfully`);


    //             listApi();


    //             setDeleteShow({ openModal: false, confirmDelete: false });

    //             toast.success("Deleted successfully");
    //         } else {
    //             // If confirmDelete is not true, open the modal for confirmatio
    //             setDeleteShow({ openModal: true, confirmDelete: false });
    //         }
    //     } catch (error) {
    //         console.error(`Error deleting user with ID ${id}:`, error);
    //         // Handle error scenarios, display error messages, etc.
    //         setDeleteShow({ openModal: false, confirmDelete: false });
    //     }
    // };
    
    useEffect(() => {
        
        listApi(currentPage);
    }, []);
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
                                                                <Link to={`/edit-user/${user.id}`} > <Icon icon="uil:edit" color="#7464bc" width="20" height="20" style={{ cursor: "pointer" }} /> </Link>
                                                                <span> <Icon icon="fluent:delete-16-filled" color="#7464bc" width="20" height="20" style={{ cursor: "pointer" }} onClick={() => handleOpenDelete(user.id)} /> </span>
                                                                <span> <Icon icon="carbon:view" color="#7464bc" width="20" height="20" style={{ cursor: "pointer" }} onClick={() => handleOpen(user)} /></span>
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
                                    <Modal.Header className="cardcolor"closeButton>
                                        {/* <Modal.Title></Modal.Title> */}
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p className="fw-semibold">Are you sure you want to Delete this Entry???</p>
                                    </Modal.Body>
                                    <Modal.Footer className="cardcolor">
                                        <Button  className="btncolor" onClick={() => { handleDelete() }}>
                                            Ok
                                        </Button>
                                        <Button  className="btncolor" onClick={handleCloseDelete}>
                                            Cancel
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <div className="d-flex justify-content-end  px-2">
                                    <ReactPaginate
                                        previousLabel={"<<"}
                                        nextLabel={">>"}
                                        breakLabel={"..."}
                                        pageCount={pageCount}
                                        pageRangeDisplayed={limit}
                                        onPageChange={handlePageClick}
                                        containerClassName={"pagination  "}
                                        pageClassName={"page-item "}
                                        pageLinkClassName={"page-link  "}
                                        previousClassName={"page-item  "}
                                        previousLinkClassName={"page-link  "}
                                        nextClassName={"page-item  "}
                                        nextLinkClassName={"page-link "}
                                        breakClassName={"page-item"}
                                        breakLinkClassName={"page-link"}
                                        activeClassName={"active "} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
}
export default ApiTable