
import React from "react";
import { useState } from "react";
import RadioButton from "../components/Radiobutton";
import BasicOperation from "../components/BasicSelect";
import TrigoOperation from "../components/TrigonometrySelect";
import Number1Input from "../components/Number1Input";
import Buttons from "../components/Buttons";


const Demo = () => {
  const [input1, setInput1] = useState([]);
  const [input2, setInput2] = useState([]);
  const [trigo, setTrigo] = useState([] && false);
  const [basic, setBasic] = useState([]);
  const [result, setResult] = useState([] && true);
  const [result1, setResult1] = useState([]);
  const [remainder, setRemainder] = useState([]);

  const clearState = () => {
    setInput1(' ')
    setInput2('')
    setTrigo('')
    setBasic(' ')
    setResult(' ')
    setResult1('')
  }

  const handleFinalSubmit = () => {
    let firstnum = Number(input1)
    let secondnum = Number(input2)
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
        setRemainder(firstnum % secondnum);
        break;
      case '5':
        setResult(Math.pow(firstnum, secondnum));
        break;
      case 'Square':
        setResult((firstnum) * (firstnum));
        break;
      case 'Cube':
        setResult((firstnum) * (firstnum) * (firstnum));
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
        setResult1((Math.cos(firstnum / 57.2957795)).toFixed(3));
        break;
      case '3':
        setResult1((Math.tan(firstnum / 57.2957795)).toFixed(3));
        break;
      case '4':
        setResult1((1 / Math.sin(firstnum / 57.2957795)).toFixed(3));
        break;
      case '5':
        setResult1((1 / Math.cos(firstnum / 57.2957795)).toFixed(3));
        break;
      case '6':
        setResult1((1 / Math.tan(firstnum / 57.2957795)).toFixed(3));
        break;
      default:
        console.log("select the trigo operator");
        break;
    }
  }

  return (
    <div className="App image2">
      <div className="container-fluid d-flex justify-content-center align-items-center cardalign ">
        <div className="card p-3 ms-5 w-25 back ">
          <h5 className="text-center text-white ">Calculator</h5>
          <RadioButton
            setTrigo={setTrigo}
            trigo={trigo}
             />
            
          {trigo ? <TrigoOperation
            trigo={trigo}
            setTrigo={setTrigo}
          />
            : <BasicOperation
              basic={basic}
              setBasic={setBasic}
            />}

          <Number1Input
            input1={input1}
            setInput1={setInput1}
            input2={input2}
            setInput2={setInput2}
            trigo={trigo}
            basic={basic}
          />
          {/* {(!trigo ? (basic !== "Square" && basic !== "Cube" ? <Number2Input
            input2={input2}
            setInput2={setInput2}
          />
            : null) : null)} */}
          <Buttons
            handleFinalSubmit={handleFinalSubmit}
            clearState={clearState}
             />
             <div className="bg-white pt-2">
          {!trigo ? (basic === '4' ? (<p className=" ms-2 pt-1">  Quotient :- {result} Remainder :- {remainder}</p>)
            : <p className=" ms-2 pt-1"> Result is:{result} </p>)
            : (result ? <p className=" ms-2 pt-1"> Result is:{result1} </p> : null)}
            </div>
        </div>
      </div>
    </div>
  );
}
export default Demo