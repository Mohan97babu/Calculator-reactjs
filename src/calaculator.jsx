
import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import '../node_modules/bootstrap/dist/js/bootstrap';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




const Demo = () => {
  const [input1, setInput1] = useState([]);
  const [input2, setInput2] = useState([]);
  const [trigo, setTrigo] = useState([] && false);
  const [basic, setBasic] = useState([] );
  const [result, setResult] = useState([] && true);
  const [result1, setResult1] = useState([] );
  const [ remainder,setRemainder] =useState([])
  const basicOption = [
    {
      label:"Select the Operator " ,
      value: " " ,
   },
    {
       label:"+" ,
       value: "1" ,
    },
    {
      label: "-" ,
      value: "2",
    },
   {
    label: "x" ,
    value: "3" ,
   },
   {
    label: "/ ",
    value: "4" ,
   },
   {
    label: "Power",
    value: "5",
   },
   {
    label: "Square",
    value: "Square",
   },
  {
    label:" Cube",
    value:" Cube",
  },
] ;
const trigooption =[
  {
    label:"Select the Operator",
    value: " ",
  },
  {
    label:"sin ",
    value:"1",
  },
  {
    label:"cos",
    value:"2",
  },
  {
    label:"tan",
    value:"3",
  },
  {
    label:"cosec",
    value:"4",
  },
  {
    label:"sec",
    value:"5",
  },
  {
    label:"cot",
    value:"6",
  },
];
  
  const clearState =() =>
  {
    setInput1(' ')
    setInput2('')
    setTrigo('')
    setBasic(' ')
    setResult(' ')
    setResult1('')
    
  }
 
  const handleFinalSubmit = () => {

    console.log(result + "aaaaaaa")
    console.log(typeof input1);
    let firstnum = Number(input1)
    let secondnum = Number(input2)
    console.log(result1 + "bbbbbbbbbbb")
    console.log(typeof firstnum + "one");
    console.log(typeof secondnum + "two")
    switch (basic) {
      case '1':
        setResult(firstnum + secondnum);
        break;
      case '2':
        setResult(firstnum - secondnum);
        break;
      case '3':
        setResult(firstnum * secondnum);
        break;
      case '4':
        setResult((firstnum / secondnum).toFixed(3));
        setRemainder(firstnum % secondnum );
        break;
      case '5':
        setResult(Math.pow(firstnum , secondnum));
        break;
      case 'Square':
        setResult((firstnum) * (firstnum));
        break;
      case 'Cube':
        setResult(firstnum * firstnum * firstnum);
        
        break;
      default:
        console.log("select the basic operator");
        break;
    }
    switch (trigo) {
      case '1':
        setResult1((Math.sin(firstnum / 57.2957795)).toFixed(3));

        break;
      case '2':
        setResult1((Math.cos(firstnum /57.2957795)).toFixed(3));
        break;
      case '3':
        setResult1((Math.tan(firstnum / 57.2957795)).toFixed(3));
        break;
      case '4':
        setResult1((1 / Math.sin(firstnum / 57.2957795)).toFixed(3));
        break;
      case '5':
        setResult1((1 / Math.cos(firstnum /57.2957795)).toFixed(3));
        break;
      case '6':
        setResult1((1 / Math.tan(firstnum /57.2957795)).toFixed(3));
        break;
      default:
        console.log("select the trigo operator");       
        break;
    } 
    // result1 != null ? toast.success("Answer1 is:"+result1) : null;
    // result != null ? toast.success("Answer2 is:"+result) :null ;
    // (basic === '4'  ? (toast.success("quotient is:"+result) && toast.success("remainder is:"+remainder)) : (toast.success("Answer1 is:"+result)))
    
    // (trigo === ' '? null  :(toast.success("Answer2 is:"+result1)))
    // toast.success("Answer2 is:"+result1)
    console.log(result + "basic");
    console.log(result1 + "trigo");
    console.log(firstnum + "vdvsdvs");
   
  }



  return (
    <div className="App">
      
      <div className="container-fluid d-flex justify-content-center align-items-center aligne  ">

        <div className="card p-3 w-25 backcolor ">
          <h5 className="text-center cardcolor"> Calculator</h5>

          <div className="radios">
            <div className="form-check" >
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => {
                setTrigo(false)  
              }} defaultChecked  />
              <label className="form-check-label cardcolor" htmlFor="flexRadioDefault1">
                Basic Operators
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="trigo" onClick={() => {
                setTrigo(true)
              }}  />
              <label className="form-check-label cardcolor" htmlFor="trigo">
                Trigonometry Functions
              </label>
            </div>
          </div>
          { (!trigo ? <label htmlFor="basicselect" className="form-label cardcolor mt-3 " id="hideLabel1">Basic Operators</label> :null)}
          {(!trigo ? <select id="basicselect" value={basic} className="form-select mb-3" onChange={(e) => setBasic(e.target.value)  } aria-label="Default select example" required>
            {basicOption.map((option) =>
            (
              <option value={option.value}>{option.label}</option>
            ))}
            {/* <option value=" " >Select the Operator</option>
            <option value="1">+</option>
            <option value="2">-</option>
            <option value="3">x</option>
            <option value="4">/</option>
            <option value="5">Power</option>
            <option value="Square">Square</option>
            <option value="Cube">Cube</option> */}
          </select> :null) }

          { (trigo ? <label htmlFor="trigoselect" className="form-label cardcolor">Trigonometry Functions</label> :null ) }
          {(trigo ? <select className="form-select mb-3" value={trigo} id="trigoselect" onChange={(e) => setTrigo(e.target.value)} aria-label="Default select example" required>
           {trigooption.map((option) =>
            (
              <option value={option.value}>{option.label}</option>
            ))}
            {/* <option value=" " >Select the Operator</option>
            <option value="1">sin</option>
            <option value="2">cos</option>
            <option value="3">tan</option>
            <option value="4">cosec</option>
            <option value="5">sec</option>
            <option value="6">cot</option> */}

          </select>
          :null) }
          {trigo || !trigo ? <div className="mb-3">
            <label htmlFor="number1" className="form-label cardcolor">Number 1</label>
            <input type="number" className="form-control" id="number1" min="0" value={input1} onChange={(e) => setInput1(e.target.value)} onKeyDown={(evt) => (evt.key === 'e' || evt.key === '+'|| evt.key === 'E') && evt.preventDefault()} required />
          </div> :null }
          { (!trigo ? (basic !== "Square" && basic !== "Cube" ? <div className="mb-3">
            <label htmlFor="number2" className="form-label cardcolor">Number 2</label>
            <input type="number" className="form-control" id="number2" min="0" value={input2} onChange={(e) => setInput2(e.target.value)} onKeyDown={(evt) => (evt.key === 'e' || evt.key === '+'|| evt.key === 'E') && evt.preventDefault()} required />
          </div> : null ):null) }

         <div className="d-flex flex-row ">
          {(!trigo || trigo ? <button type="button" className="btn btn-info mx-2 mb-3 w-50" onClick={() => handleFinalSubmit()}  >Submit</button> : null)}
          {(!trigo || trigo ? <button type="button"  className="btn btn-info mx-2 mb-3 w-50" onClick={() => clearState()}>Reset</button> : null)}
          {/* {(!trigo || trigo ? <button type="button"  className="btn btn-info mx-2 mb-3 w-50" onClick={() => window.location.reload()}>Clear</button> : null)} */}
          {/* <p id="result" >adca</p> */}
          </div>
         
        { ( basic === '4' ? <p> Your Basic Operation Answer is:Quotient :- {result} Remainder :- {remainder}</p> : <p> Your Basic Operation Answer is:{result} </p>) }
        { ( result ? <p>Your Trigonometry Operation Answer is:{result1} </p> :null) }
        </div>
      </div>
      {/* <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" id="displaytoast" >
        <div className="toast-header">
          <img src="..." className="rounded me-2" alt="..."/>
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">
          Hello, world! This is a toast message.
          <button className="btn btn-primary ">Close</button>
        </div>

      </div> */}
      {/* <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" className="toast fade hide" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <svg className="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
      <div className="bd-example">
        <button type="button" className="btn btn-primary" id="liveToastBtn">Show live toast</button>
      </div> */}
    </div>
     
  );

}
export default Demo