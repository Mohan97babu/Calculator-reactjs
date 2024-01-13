import { Card, CardImg } from "react-bootstrap";
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
            <div className="row mt-3 ms-0">
                <div className="row w-100">
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
                        
                        <Card  className="  hov mx-auto   mt-3    col-xl-4 cursorhand img-wrapper border-0 innercardcolor px-0 mx-sm-auto " onMouseOver={() => setTextShow(index)} onMouseLeave={() => setTextShow(false)} style={{ width: "18rem",overflow:"hidden" }} onClick={() => handleSingleProduct(products)} >
                           <div className="container">

                            <CardImg variant="top" src={products.image} alt="..." width={100} height={200} className=" mt-3 mx-auto hover-zoom innercardcolor  p-3 " title ={`${products.title}`} />
                            <div className="overlay"><Icon icon="ph:heart" color="black" className="hearticon" /></div>
                           </div>
                            <Card.Body className=" border-0 bg-white mt-3" >
                                <Card.Title  className="text-center text-truncate">
                                    <span title ={`${products.title}`} >{products.title}</span>
                                    <div className="mt-2"><Icon icon="iconoir:star-solid" color="gold" width={"30px"} /><span  className="ms-2 align-middle">{products.rating.rate} /5</span></div>
                                    <div className="mt-2 text-secondary">&#8377; {(products.price).toFixed(2)}</div>
                                 
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