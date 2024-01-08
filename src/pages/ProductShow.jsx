import { Card } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { productList } from '../redux/actions/productList';
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const ProductShow = ({spinner,setSpinner}) => {
    const [textShow, setTextShow] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector((state) => state.productListData)

    useEffect(() => {
        setSpinner(true);
        const fetchdata = async () => {
            await productList(dispatch);
            setSpinner(false)
        }
        fetchdata();
    }, [])
    const handleSingleProduct =  async (products) => {

        navigate(`/product-show/${products.id}`);
    }
 
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
                    <div className="spinner-border " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> 
                </div>
                : Array.isArray(product.productList?.data) && product.productList?.data.map((products, index) => {
                    return (
                        <Card className="  hov m-2 px-0 mt-3 " onMouseOver={() => setTextShow(index)} onMouseLeave={() => setTextShow(false)} style={{ width: "18rem",height:"14rem", cursor: "pointer",overflow:"hidden" }} onClick={() => handleSingleProduct(products)} >
                            <img variant="top" src={products.image} alt="..." width={"150px"} height="150px" className="px-2 mt-3 mx-auto " />

                            <Card.Body className="textbright" style={{"background-color" :"white"}}>
                                <Card.Title  className="text-center text-truncate"><span title ={`${products.title}`}>{products.title}</span>
                               {index === textShow ? <>
                                <div className="textcolor3">Price : &#x20b9; {products.price} </div>
                                <div className="textcolor3">Rating : <Icon icon="iconoir:star-solid" color="gold" width={"30px"}/><span style={{verticalAlign:"middle"}} className="ms-2">{products.rating.rate}/5</span>  </div>
                               </>
                                : null}
                                 </Card.Title>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
export default ProductShow;