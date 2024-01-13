import { Row ,Container, Col,Button,Card} from "react-bootstrap"
import { singleProduct } from "../redux/actions/singleProduct"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import DeleteProduct from "../redux/actions/DeleteProduct";
import Magnifier from "react-magnifier";

const SingleProductShow =  ({setEditOn,editOn,spinner,setSpinner}) =>{
 // const[spinner,setSpinner] = useState(true);
    const params = useParams();
    const dispatch = useDispatch();
    const Navigate = useNavigate();   
    const handleEdit = () =>
    {
      setEditOn(true);
       Navigate(`/product-form/${params.id}`)
    }
    const handleDelete = async() =>
    {
      
       await DeleteProduct(params.id)
       Navigate("/product-list");
    }
    useEffect(() =>
    {
      setSpinner(true);
      const getSingle = async (dispatch,params) =>
      {
        await singleProduct(dispatch,params);
        setSpinner(false);        
      }      
      getSingle(dispatch,params);     
    },[])
    
        const  product = useSelector((state) => state.productListData);    
   console.log(editOn,"single"); 
   console.log(product.singleProduct?.data?.data.category,"category");   
return (
     <Container fluid>
        <Row className="d-flex">
          <h5 className="mt-3 cursorhand"><span className="text-secondary" onClick={() => {Navigate("/product-list");}}>Product List</span> &nbsp;&#10095;&nbsp;<span>{product.singleProduct?.data?.data.title}</span></h5>
        </Row>
       {spinner  ? (<div className="d-flex justify-content-center align-items-center mt-5">                    
                    <div className="spinner-border " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> 
                </div>) :
                 (<Row className="mt-3">
          <Col xs={12} md={5} xl={4} className="border p-2 border-3 bordcolor d-flex justify-content-center align-items-center innercardcolor  h-75">
         <Magnifier  src ={product.singleProduct?.data?.data.image} className="innercardcolor" width={"380px"} height={"380px"} mgShape="square" mgShowOverflow = {false}  mgWidth={200} mgHeight={150} /> 
          </Col>
          <Col xs={12}  md={7} xl={8} className="ps-4">
           <h3>{product.singleProduct?.data?.data.title}</h3>
           <Row>
            <div className="fs-4 fw-medium " >
               <Icon icon="game-icons:round-star" color="gold" width={"30px"}/> <span className="fs-2 align-middle textcolor3" >{product.singleProduct?.data?.data.rating?.rate}<span className="fs-4 text-secondary" > /5</span> </span>
            </div>
           </Row>
           <Row>
            <Col className="mt-5">
            <h4><span className="text-secondary  ">Category:</span><span className="fw-medium text-capitalize">&nbsp;{product.singleProduct?.data?.data.category}</span></h4>            
            </Col>
           </Row>
           
           <Row className="mt-4 me-3">
           <span className="fs-1 fw-bold textcolor3">&#8377;&nbsp;{product.singleProduct?.data?.data.price}</span>  
           <hr className="mt-5 "/>
           </Row>
          
           <Row className="mt-3">
            <div className="fs-4 fw-normal" >
              <span className="fw-medium text-secondary">Stock Available:&nbsp;</span><span className="fw-bold textcolor3">{product.singleProduct?.data?.data.rating?.count}</span>
            </div>
           </Row>
           {/* <Row className="mt-4">
            <div className="fs-4 fw-normal" >
              <span className="fw-medium text-secondary ">Description:&nbsp;</span><span className="fs-6 fw-medium">{product.singleProduct?.data?.data.description}.</span>
            </div>
           </Row> */}
          </Col>
         
          <Row >
            <Col className="d-flex justify-content-end mt-3 mb-1">
          <Button variant="primary" className="btncolor text-black"onClick={() => handleEdit()}>Edit</Button>{' '}
          <Button variant="primary" className="btncolor text-black ms-3"onClick={() => handleDelete()}>Delete</Button>{' '}
            </Col>
          </Row>
            <Card className="border border-2 mt-3 p-2 cardcolor">
              <Row className="p-2 mx-1  ">
                <Col xs={6} xl={3} className="border border-1 p-2 back text-center text-white">
                   <h5>Pack of 3</h5>
                   <h6>&#x20b9; { ((product.singleProduct?.data?.data.price)*3).toFixed(2) }</h6>
                </Col>
                <Col xs={6} xl={3} className="border border-1 p-2 back text-center text-white">
                <h5>Pack of 6</h5>
                <h6>&#x20b9; { ((product.singleProduct?.data?.data.price)*6).toFixed(2) }</h6>
                </Col>
                <Col xs={6} xl={3} className="border border-1 p-2 back text-center text-white">
                <h5>Pack of 9</h5>
                <h6>&#x20b9; { ((product.singleProduct?.data?.data.price)*9).toFixed(2) }</h6>
                </Col>
                <Col xs={6} xl={3} className="border border-1 p-2 back text-center text-white">
                <h5>Avialable Colors</h5>
                <h6>White , Blue</h6>
                </Col>
              </Row>
            </Card>
            <Row className="mt-4 mb-2">
            <div className="fs-4 fw-normal" >
              <span className="fw-medium text-secondary ">Description:&nbsp;</span>
            </div>
            <div className="col-8">
            <span className="fs-6 fw-medium">{product.singleProduct?.data?.data.description}.</span>
            </div>
           </Row>
          
        </Row>) }        
     </Container>
)
}
export default SingleProductShow;