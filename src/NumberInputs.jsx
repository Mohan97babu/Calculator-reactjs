
const NumberInputs = ({}) => {
    const handleInput1=(e) =>
    {
        setInput1(e.target.value)
    }
    const handleInput2 =(e) =>
    {
        setInput2(e.target.value)
    }
    return (
        ( trigo || !trigo ? (<div className="mb-3">
            <label htmlFor="number1" className="form-label cardcolor">Number 1</label>
            <input type="number" className="form-control" id="number1" min="0" value={input1} onChange={(e) => handleInput1()} onKeyDown={(evt) => (evt.key === 'e' || evt.key === '+' || evt.key === 'E') && evt.preventDefault()} required />
        </div>) : null )

      (!trigo ? (basic !== "Square" && basic !== "Cube" ? <div className="mb-3">
        <label htmlFor="number2" className="form-label cardcolor">Number 2</label>
        <input type="number" className="form-control" id="number2" min="0" value={input2} onChange={(e) => handleInput2()} onKeyDown={(evt) => (evt.key === 'e' || evt.key === '+' || evt.key === 'E') && evt.preventDefault()} required />
    </div> : null) : null)
    
    )
}
export default NumberInputs;