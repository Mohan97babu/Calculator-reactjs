
const Number1Input = (props) => {
    const handleInput1 = (e) => {
        {props.setInput1(e.target.value) }
    }
    const handleInput2 =(e) =>
    {
       {props.setInput2(e.target.value)}
    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="number1" className="form-label textcolor">Number 1</label>
                <input type="number" className="form-control" id="number1" min="0" value={props.input1} onChange={(e) => handleInput1(e)} onKeyDown={(evt) => (evt.key === 'e' || evt.key === '+' || evt.key === 'E') && evt.preventDefault()} required />
            </div> 
             {!props.trigo && props.basic !=="Square" && props.basic !== "Cube"   ? <div className="mb-3">
                <label htmlFor="number2" className="form-label textcolor">Number 2</label>
                <input type="number" className="form-control" id="number2" min="0" value={props.input2} onChange={(e) => handleInput2(e)} onKeyDown={(evt) => (evt.key === 'e' || evt.key === '+' || evt.key === 'E') && evt.preventDefault()} required />
            </div> : null}
        </>
    )
}
export default Number1Input;