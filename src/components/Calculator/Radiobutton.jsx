
const RadioButton = (props) => {
  return (
    <div className="radios">
      <div className="form-check" >
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => {
          { props.setTrigo(false) }
        }} checked = {!props.trigo} />
        <label className="form-check-label text-white" htmlFor="flexRadioDefault1">
          Basic Operators
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="trigo" onClick={() => {
          { props.setTrigo(true) }
        }} checked={props.trigo} />
        <label className="form-check-label text-white" htmlFor="trigo">
          Trigonometry Functions
        </label>
      </div>
    </div>
  )
}
export default RadioButton;