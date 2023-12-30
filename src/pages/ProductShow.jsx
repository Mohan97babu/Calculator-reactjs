import { Card } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { productList } from '../redux/actions/productList';
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const ProductShow = ({editon}) => {
    const [spinner, setSpinner] = useState(true);
    const [textShow, setTextShow] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector((state) => state.productListData)

    useEffect(() => {
        const fetchdata = async () => {
            await productList(dispatch);
            setSpinner(false)
        }
        fetchdata();
    }, [])
    const handleSingleProduct =  async (products) => {

        navigate(`/product-show/${products.id}`);
    }
    console.log(editon,"show");
    return (
        <div className="container-fluid ">
            <div className="row mt-3 ">
                <div className="row">
                   <div className="col-6">

                <h5 className="pe-2  fw-bold textcolor2 rounded-3 fs-4 ">Product List</h5>
                   </div>
                   <div className="col-6 text-end">
                     <button className="btn btn-primary btncolor textcolor2" onClick={() => navigate("/product-form")}>
                     <Icon icon="material-symbols:add-ad"  className="mb-1 me-2 " />
                        Add</button>
                   </div>
                </div>
                {spinner ? 
                <div className="d-flex justify-content-center align-items-center mt-5">                    
                    <div class="spinner-border " role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> 
                </div>
                : Array.isArray(product.productList?.data) && product.productList?.data.map((products, index) => {
                    return (
                        <Card className="  hov m-2 px-0   mt-3  h-100 text-trunacte " onMouseOver={() => setTextShow(index)} onMouseLeave={() => setTextShow(false)} style={{ width: "18rem", cursor: "pointer" }} onClick={() => handleSingleProduct(products)} >
                            <img variant="top" src={products.image} alt="..." width={"150px"} height="150px" className="px-2 mt-3 mx-auto " />

                            <Card.Body className="">
                                <Card.Title className={`${index !== textShow ? "text-truncate" : null}  textbright text-center`}>{products.title} </Card.Title>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
export default ProductShow;