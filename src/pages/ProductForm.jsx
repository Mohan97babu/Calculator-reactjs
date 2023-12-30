import { Card, Container, Row, Form, Button, Col } from "react-bootstrap";
import { PostProductList } from "../redux/actions/PostProductList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EditProductList } from "../redux/actions/EditProductList";
import { toast ,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ProductForm = ({ addProducts, setAddProducts,setEditOn ,editOn }) => {
    const params =useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setAddProducts({ ...addProducts, [e.target.name]: e.target.value })
    }   
    const getMessage = () => {
        if (addProducts.rating >= 0 && addProducts.rating < 1) {
          return { text: 'So Poor', color:"#cc0000"  , emoji : "😭" }; 
        } else if (addProducts.rating >= 1 && addProducts.rating < 2) {
            return { text: 'Poor', color: '#ff3333' , emoji : "😢" };
        } else if (addProducts.rating >= 2 && addProducts.rating < 3) {
            return { text: 'Fair', color: '#ffaf1a'  , emoji : "😐"};
        } else if (addProducts.rating >= 3 && addProducts.rating < 4) {
            return { text: 'Good', color: ' #80ff80' , emoji : "😊" };
        } else if (addProducts.rating >= 4 && addProducts.rating <= 5) {
            return { text: 'Excellent', color: '#00cc00' , emoji : "😄" };
        } else {
            return { text: 'Invalid range', color: 'black' };
        }
    };   
    const handleSubmit = async () => {
        if(setEditOn)
        {
            try{                 
                const response = await EditProductList(dispatch,params.id)
                console.log(response);
            }
            catch(err){
                console.log(err);
            }
            setEditOn(false); 
            toast.success("Edited Successfully")
            

        }
        else
        {            
            try {
                const actions =  await PostProductList(addProducts);
                console.log(actions,"formact");
                dispatch(actions);          
                toast.success("Submitted Successfully")
                    
                } catch (err) {
                    console.log(err);
                }
            }
            setTimeout(() =>
            {
              navigate("/product-list")
            },
            3000)
        }
        const message = getMessage();       
          const product = useSelector((state) => state.productListData.singleProduct?.data?.data)
        console.log(editOn,"form");
        return (
            <Container fluid>
            <Row>
                 <h5 className="mt-3"><span className="text-secondary" onClick={() => {navigate("/product-list"); }} style={{cursor :"pointer"}}>Product List</span> &nbsp;{ params.id ? (<span className="text-secondary" style={{cursor :"pointer"}} onClick={() => {navigate(`/product-show/${params.id}`); setEditOn(false);}}>&#10095;{product?.title}</span>): null}&nbsp;&#10095;&nbsp;{ params.id?"Edit":"Add"}</h5> 
                <Card className="px-0 mt-3">
                    <Card.Header >
                        <span className="textcolor1 fw-bold ">{params.id ? "Edit":"Add"} Product</span>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="fw-medium">Image Url:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Image Url" name="imageurl" value={(params.id ? product?.image: addProducts.imageurl )} onChange={(e) => handleChange(e)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="fw-medium">Title:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" name="title" value={(params.id ? product?.title:addProducts.title )} onChange={(e) => handleChange(e)} />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label className="fw-medium ">Category:</Form.Label>
                                    <Form.Select aria-label="Default select example" className="mb-3" value={(params.id ?product?.category : addProducts.category ) } name="category" onChange={(e) => handleChange(e)} >
                                        <option>Select Category</option>
                                        <option value="jewelery">Jewellery</option>
                                        <option value="men's clothing">Men's Clothing</option>
                                        <option value="women's clothing">Women's Clothing</option>
                                        <option value="electronics">Electronics</option>
                                    </Form.Select>
                                    <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlInput2">
                                        <Form.Label className="fw-medium">Price:</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Price" value={(params.id ? product?.price : addProducts.price)} name="price" onChange={(e) => handleChange(e)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                        <Form.Label className="fw-medium">Count:</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Count" name="count" value={(params.id ?product?.rating?.count : addProducts.count )} onChange={(e) => handleChange(e)} />
                                    </Form.Group>

                                    <Form.Label className="fw-medium mt-2">Rating:</Form.Label>
                                    <Form.Range name="rating" value={(params.id ?product?.rating?.rate : addProducts.rating )} onInput={(e) => handleChange(e)} min="0" max="5" step="0.1"  />
                                    {addProducts.rating || params.id && product?.rating?.rate ? <p className="fw-bold "style={{ color: message.color }}>{params.id ?product.rating.rate : addProducts.rating }&nbsp;{message.text}{message.emoji}</p> : "0"}
                                </Col>
                            </Row>                            
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="fw-medium">Description:</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Enter Description" name="description" value={(params.id ?product?.description : addProducts.description )} style={{ resize: "none" }} onChange={(e) => handleChange(e)} />
                            </Form.Group>
                            <div className="d-flex justify-content-end">
                                <Button variant="primary" className="btncolor me-2 text-black fw-medium" onClick={(e) => handleSubmit(e)}>{params.id ? "Update" :"Submit"}</Button>{' '}
                                <Button variant="primary" className=" btncolor text-black fw-medium" onClick={() => navigate("/product-list")}>Cancel</Button>{' '}
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>
            <ToastContainer/>
        </Container>
    )
}
export default ProductForm