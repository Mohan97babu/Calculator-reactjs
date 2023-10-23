import React from "react";
 
export default function radioButton (props) 
{
    return 
    (
      
        <div className="radios">
            <div className="form-check" >
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => {
                {props.myprop}(false)  
              }} defaultChecked  />
              <label className="form-check-label cardcolor" htmlFor="flexRadioDefault1">
                Basic Operators
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="trigo" onClick={() => {
                {props.myprop}(true)
              }}  />
              <label className="form-check-label cardcolor" htmlFor="trigo">
                Trigonometry Functions
              </label>
            </div>
          </div>
       
    );
}
