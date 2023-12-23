import { useState } from "react"
import { Card, Container, Row, Form, Button, Col } from "react-bootstrap";
import { PostProductList } from "../redux/actions/PostProductList";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductForm = ({ addProducts, setAddProducts }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setAddProducts({ ...addProducts, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        PostProductList(dispatch, addProducts);
        navigate("/product-list");
    }

    return (
        <Container fluid>
            <Row>
                <h5 className="mt-3">Add Products</h5>
                <Card className="px-0 mt-3">
                    <Card.Header >
                        <span className="textcolor1 fw-bold ">Add Product</span>
                    </Card.Header>

                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="fw-medium">Image Url:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Image Url" name="imageurl" onChange={(e) => handleChange(e)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="fw-medium">Title:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" name="title" onChange={(e) => handleChange(e)} />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                                        <Form.Label className="fw-medium">Category:</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Category" name="category" onChange={(e) => handleChange(e)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                        <Form.Label className="fw-medium">Price:</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Price" name="price" onChange={(e) => handleChange(e)} />
                                    </Form.Group>
                                </Col>


                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                        <Form.Label className="fw-medium">Count:</Form.Label>
                                        <Form.Control type="number" placeholder="Enter Count" name="count" onChange={(e) => handleChange(e)} />
                                    </Form.Group>

                                    <Form.Label className="fw-medium mt-2">Rating:</Form.Label>
                                    <Form.Range name="rating" onInput={(e) => handleChange(e)} min="0" max ="5" step ="0.1"/>
                                   {addProducts.rating ?<p className="fw-medium ">{addProducts.rating}</p> : "0"}
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="fw-medium">Description:</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Enter Description" name="description" style={{ resize: "none" }} onChange={(e) => handleChange(e)} />
                            </Form.Group>
                            <div className="d-flex justify-content-end">

                                <Button variant="primary" className="btncolor me-2 text-black fw-medium" onClick={(e) => handleSubmit(e)}>Submit</Button>{' '}
                                <Button variant="primary" className=" btncolor text-black fw-medium">Cancel</Button>{' '}
                            </div>
                        </Form>
                    </Card.Body>

                </Card>
            </Row>
        </Container>
    )
}
export default ProductForm