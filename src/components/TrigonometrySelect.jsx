
const TrigoOperation = ({ trigo, setTrigo }) => {
  const trigooption = [
    { label: "Select An Operator", value: " ", },
    { label: "Sin ", value: "1",},
    { label: "Cos", value: "2",},
    { label: "Tan", value: "3", },
    { label: "Cosec",value: "4", },
    { label: "Sec", value: "5", },
    { label: "Cot", value: "6", },
  ];
  const handleTrigoSelect = (e) => {
    { setTrigo(e.target.value) }
  }

  return (
    <>
       <label htmlFor="trigoselect" className="form-label text-white">Trigonometry Functions</label>
       <select className="form-select mb-3" value={trigo} id="trigoselect" onChange={(e) => handleTrigoSelect(e)} aria-label="Default select example" required>
        {trigooption.map((option,index) =>
        {
          return <option value={option.value} key={index}>{option.label}</option>
        })}
      </select>  
    </>
  )
}
export default TrigoOperation;