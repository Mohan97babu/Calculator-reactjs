import { Row ,Container, Col,Button} from "react-bootstrap"
import { singleProduct } from "../redux/actions/singleProduct"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import DeleteProduct from "../redux/actions/DeleteProduct";

const SingleProductShow =  ({setEditOn,editOn}) =>{
    const params = useParams();
    const dispatch = useDispatch();
    const [spinner,setSpinner] = useState(true)
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
      const getSingle = async (dispatch,params) =>
      {
        await singleProduct(dispatch,params);
        setSpinner(false);
      }
      getSingle(dispatch,params);
    },[])
    
        const  product = useSelector((state) => state.productListData);    
   console.log(editOn,"single");    
return (
     <Container fluid>
        <Row className="d-flex">
          <h5 className="mt-3"><span className="text-secondary" onClick={() => {Navigate("/product-list");}} style={{cursor :"pointer"}}>Product List</span> &nbsp;&#10095;&nbsp;<span>{product.singleProduct?.data?.data.title}</span></h5>
        </Row>
       {spinner ? <div className="d-flex justify-content-center align-items-center mt-5">                    
                    <div class="spinner-border " role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> 
                </div> : <Row className="mt-3">
          <Col xs={4} className="border p-2 border-3 bordcolor d-flex justify-content-center align-items-center img-wrapper h-75">
          <img src ={product.singleProduct?.data?.data.image} className="hover-zoom" width={"380px"} height={"380px"} />
          </Col>
          <Col xs={8} className="ps-5">
           <h3>{product.singleProduct?.data?.data.title}</h3>
           <Row>
            <Col className="mt-4">
            <h4><span className="text-secondary">Category:</span><span className="fw-medium">&nbsp;{product.singleProduct?.data?.data.category}</span></h4>            
            </Col>
           </Row>
           <Row className="mt-4">
            <div className="fs-4 fw-medium"> <span className="text-secondary">Price:</span> &#8377;&nbsp;{product.singleProduct?.data?.data.price}</div>
           </Row>
           <Row className="mt-4">
            <div className="fs-4 fw-medium" >
              <span className="text-secondary">Rating:</span>  <Icon icon="iconoir:star-solid" color="gold" width={"30px"}/> <span className="fs-2" style={{verticalAlign :"middle"}}>{product.singleProduct?.data?.data.rating?.rate}<span className="fs-4 text-secondary" > /5</span> </span>
            </div>
           </Row>
           <Row className="mt-4">
            <div className="fs-4 fw-normal" >
              <span className="fw-medium text-secondary ">Description:&nbsp;</span><span className="fs-6 fw-medium">{product.singleProduct?.data?.data.description}</span>
            </div>
           </Row>
           <Row className="mt-4">
            <div className="fs-4 fw-normal" >
              <span className="fw-medium text-secondary">Stock Available:&nbsp;</span>{product.singleProduct?.data?.data.rating?.count}
            </div>
           </Row>
          </Col>
          <Row >
            <Col className="d-flex justify-content-end">
          <Button variant="primary" className="btncolor text-black"onClick={() => handleEdit()}>Edit</Button>{' '}
          <Button variant="primary" className="btncolor text-black ms-3"onClick={() => handleDelete()}>Delete</Button>{' '}
            </Col>
          </Row>
        </Row> }        
     </Container>
)
}
export default SingleProductShow;