
const TrigoOperation = ({ trigo, setTrigo }) => {
  const trigooption = [
    {
      label: "Select the Operator",
      value: " ",
    },
    {
      label: "sin ",
      value: "1",
    },
    {
      label: "cos",
      value: "2",
    },
    {
      label: "tan",
      value: "3",
    },
    {
      label: "cosec",
      value: "4",
    },
    {
      label: "sec",
      value: "5",
    },
    {
      label: "cot",
      value: "6",
    },
  ];
  const handleTrigoSelect = (e) => {
    { setTrigo(e.target.value) }
  }

  return (
    <>
      {({ trigo } ? <label htmlFor="trigoselect" className="form-label cardcolor">Trigonometry Functions</label> : null)}
      {({ trigo } ? <select className="form-select mb-3" value={trigo} id="trigoselect" onChange={(e) => handleTrigoSelect()} aria-label="Default select example" required>
        {trigooption.map((option) =>
        (
          <option value={option.value}>{option.label}</option>
        ))}


      </select> : null)}
    </>
  )
}
export default TrigoOperation;