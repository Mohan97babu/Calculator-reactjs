const Buttons = ({handleFinalSubmit,clearState}) => {

    return (
        <div className="d-flex flex-row ">
            <button type="button" className="btn btn-success mx-2 mb-3 w-50" onClick={(e) => {handleFinalSubmit(e)}}  >Submit</button>
            <button type="button" className="btn btn-danger mx-2 mb-3 w-50" onClick={(e) => {clearState(e)}}>Reset</button>
        </div>
    )
}
export default Buttons