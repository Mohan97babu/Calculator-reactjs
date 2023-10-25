const BasicOperation = ({ trigo, basic ,setBasic}) => {
  const basicOption = [
    {
      label: "Select the Operator ",
      value: " ",
    },
    {
      label: "+",
      value: "1",
    },
    {
      label: "-",
      value: "2",
    },
    {
      label: "x",
      value: "3",
    },
    {
      label: "/ ",
      value: "4",
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
      label: " Cube",
      value: " Cube",
    },
  ];
  const handleBasicSelect = (e) =>
  {
    {setBasic(e.target.value)}
  }
  return (
    <>
      {({ trigo } ? <label htmlFor="basicselect" className="form-label cardcolor mt-3 " id="hideLabel1">Basic Operators</label> : null)}
      {({ trigo } ? <select id="basicselect" value={basic} className="form-select mb-3" onChange={(e) => handleBasicSelect()} aria-label="Default select example" required>
        {basicOption.map((option) =>
        (
          <option value={option.value}>{option.label}</option>
        ))}

      </select> : null)}
    </>
  )

}
export default BasicOperation;