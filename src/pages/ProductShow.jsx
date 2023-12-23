import { Card, Button, CardTitle, Row, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { productList } from '../redux/actions/productList';
import { singleProduct } from '../redux/actions/singleProduct';
import { useEffect, useState } from "react";
import TextTruncate from 'react-text-truncate';
import { Icon } from "@iconify/react";
import { PostProductList } from "../redux/actions/PostProductList";
import DeleteProduct from "../redux/actions/DeleteProduct";
import { EditProductList } from "../redux/actions/EditProductList";
import { useNavigate } from "react-router-dom";
const ProductShow = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [show, setShow] = useState(false);
    const [details, setDetails] = useState([])
    const [textShow ,setTextShow] = useState(false)
    // const [deleteId,setDeleteId] = useState(null);
    const handleOpen = (products) => { setShow(true); setDetails(products) }
    const handleClose = () => { setShow(false); setDetails([]) }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector((state) => state.productListData)
    // const postProduct = useSelector((state) => state.postProductList)

    useEffect(() => {
        const fetchdata = async () => {
            await productList(dispatch);
            
            await PostProductList(dispatch);
            await productList(dispatch);
        }
        fetchdata();
    }, [dispatch])
    const handleSingleProduct = async (products) =>
    {
        
         await singleProduct(dispatch,products.id);
       
        navigate(`/product-show/${products.id}`);
    }  

    // const handleDelete = async (id) => {
    //     await DeleteProduct(dispatch, id)

    // }
    // const handleEdit = async (id) => {
    //     await EditProductList(dispatch, id)
    // }

    return (
        <div className="container-fluid ">

            <div className="row mt-3 ">
                <h5 className="pe-2 py-3 cardcolor  ">Product Listing</h5>
                {Array.isArray(product.productList?.data) && product.productList?.data.map((products,index) => {

                    return (
                       

                            <Card  className="  hov m-2 px-0   mt-3  h-100 text-trunacte " onMouseOver={() => setTextShow(index)} onMouseLeave={() => setTextShow(false)} style={{width:"18rem",cursor : "pointer" }} onClick={() => handleSingleProduct(products)} >
                                <img variant="top" src={products.image} alt="..." width={"150px"} height="150px"  className="px-2 mt-3 mx-auto "  />
                                
                                <Card.Body  className="">
                                <Card.Title  className={`${ index !== textShow  ? "text-truncate" : null }  textbright text-center`}>{products.title} </Card.Title>

                                    {/* <CardTitle className="fs-5 text-black-50 rounded-5 textbright text-center">Price {products.price}</CardTitle> */}
                                   
                                </Card.Body>
                                {/* <Row className="d-flex justify-content-between mx-0 px-2">
                                    <div className="w-25 textcolor1 ps-0 " style={{ whiteSpace: "nowrap", cursor: "pointer" }} >

                                        <Icon icon="uil:edit" color="#7464bc" width="20" height="20" style={{ verticalAlign: "bottom" }} onClick={() => handleEdit(products.id)} />
                                        &nbsp;  Edit
                                    </div>
                                    <div className="w-25 textcolor1 ps-0" style={{ whiteSpace: "nowrap", cursor: "pointer" }}>

                                        <Icon icon="fluent:delete-16-filled" color="#7464bc" width="20" height="20" style={{ verticalAlign: "bottom" }} onClick={() => handleDelete(products.id)} />
                                        &nbsp;  Delete
                                    </div>
                                    <div className="w-25 textcolor1 ps-0" style={{ whiteSpace: "nowrap", cursor: "pointer" }}>

                                        <Icon icon="carbon:view" color="#7464bc" width="20" height="20" style={{ verticalAlign: "bottom" }} onClick={() => handleOpen(products)} />
                                        &nbsp;View
                                    </div>
                                </Row> */}
                            </Card>   
                                            
                    )
                })}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton className="cardcolor textcolor1">
                        <Modal.Title>Product Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {details !== null ?
                            <div key={details.id}>

                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={details.image} alt="...." height="200px" />
                                </div>
                                {/* <div className="fw-medium mb-2">{details.image}</div> */}
                                <label className="text-secondary " >Title:</label>
                                <div className="fw-medium mb-2 fs-4">{details.title}</div>
                                <label className="text-secondary" >Description:</label>
                                <div className="fw-medium mb-2">{details.description}</div>
                                <label className="text-secondary" >Price:</label>
                                <div className="fw-medium mb-2">{details.price}</div>
                            </div>
                            : <div> No data found</div>}
                    </Modal.Body>
                    <Modal.Footer className="cardcolor">

                        <Button variant="primary" className="btncolor" onClick={handleClose}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* <Card className="mt-3">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>

                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>

                    </Card.Body>
                </Card> */}


            </div>
        </div>
    )
}
export default ProductShow;