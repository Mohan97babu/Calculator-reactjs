const BasicOperation = ({basic,setBasic}) => {
  const basicOption = [
   
    { label: "Select An Operator ", value: " ", },
    { label: "Addition",value: "1", },
    { label: "Subtraction", value: "2",},
    { label: "Multiplication", value: "3",},
    { label: "Division",value: "4",},
    { label: "Power", value: "5", },
    { label: "Square", value: "Square",},
    { label: "Cube", value: "Cube",},
  ];
  const handleBasicSelect = (e) =>
  {
    {setBasic(e.target.value)}
  }
  
  return (
    <>
       <label htmlFor="basicselect" className="form-label text-white mt-3 " id="hideLabel1">Basic Operators</label> 
      <select id="basicselect" value={basic} className="form-select mb-3" onChange={(e) => handleBasicSelect(e)} aria-label="Default select example" required>
        {basicOption.map((option,index) =>
        {
         return <option value={option.value} key={index}>{option.label}</option>
        })}

      </select> 
    </>
  )

}
export default BasicOperation;