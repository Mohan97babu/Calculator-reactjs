
import React from "react";
import { useState } from "react";
import RadioButton from "./Radiobutton";
import BasicOperation from "./BasicSelect";
import TrigoOperation from "./TrigonometrySelect";
import NumberInputs from "./NumberInputs";

const Demo = () => {
  const [input1, setInput1] = useState([]);
  const [input2, setInput2] = useState([]);
  const [trigo, setTrigo] = useState([] && false);
  const [basic, setBasic] = useState([] );
  const [result, setResult] = useState([] && true);
  const [result1, setResult1] = useState([] );
  const [ remainder,setRemainder] =useState([])
//   const basicOption = [
//     {
//       label:"Select the Operator " ,
//       value: " " ,
//    },
//     {
//        label:"+" ,
//        value: "1" ,
//     },
//     {
//       label: "-" ,
//       value: "2",
//     },
//    {
//     label: "x" ,
//     value: "3" ,
//    },
//    {
//     label: "/ ",
//     value: "4" ,
//    },
//    {
//     label: "Power",
//     value: "5",
//    },
//    {
//     label: "Square",
//     value: "Square",
//    },
//   {
//     label:" Cube",
//     value:" Cube",
//   },
// ] ;
// const trigooption =[
//   {
//     label:"Select the Operator",
//     value: " ",
//   },
//   {
//     label:"sin ",
//     value:"1",
//   },
//   {
//     label:"cos",
//     value:"2",
//   },
//   {
//     label:"tan",
//     value:"3",
//   },
//   {
//     label:"cosec",
//     value:"4",
//   },
//   {
//     label:"sec",
//     value:"5",
//   },
//   {
//     label:"cot",
//     value:"6",
//   },
// ];
 
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
             <RadioButton
            setTrigo ={setTrigo} />

         {trigo ? <TrigoOperation 
            trigo ={trigo}
            setTrigo={setTrigo}
         />   
         : <BasicOperation
         setTrigo={setTrigo}
         basic={basic}
         setBasic={setBasic}
       />  }
          {/* {trigo || !trigo ? <div className="mb-3">
            <label htmlFor="number1" className="form-label cardcolor">Number 1</label>
            <input type="number" className="form-control" id="number1" min="0" value={input1} onChange={(e) => setInput1(e.target.value)} onKeyDown={(evt) => (evt.key === 'e' || evt.key === '+'|| evt.key === 'E') && evt.preventDefault()} required />
          </div> :null }
          { (!trigo ? (basic !== "Square" && basic !== "Cube" ? <div className="mb-3">
            <label htmlFor="number2" className="form-label cardcolor">Number 2</label>
            <input type="number" className="form-control" id="number2" min="0" value={input2} onChange={(e) => setInput2(e.target.value)} onKeyDown={(evt) => (evt.key === 'e' || evt.key === '+'|| evt.key === 'E') && evt.preventDefault()} required />
          </div> : null ):null) } */}
          <NumberInputs 
           trigo ={trigo}
           set
          
          />

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
     
    </div>
     
  );

}
export default Demo