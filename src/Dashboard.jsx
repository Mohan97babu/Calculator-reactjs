const Dashboard = (props) => {
    return (
        <>
        <div className="row">
           <div className="col-12">
            <div className="mb-3">
                <label htmlFor="exampleformControlInput1" className="form-label text1 textcolor fw-medium text-black" value={props.userName}>Username :{props.userName}</label>
                {/* <input type="text" className="form-control inputfield " id="exampleformControlInput1" value={props.name}  placeholder="Username" /> */}
            </div>
           </div>
           <div className="col-12">
            <div className="mb-3">
                <label htmlFor="exampleformControlInput2" className="form-label text1 textcolor fw-medium text-black" value={props.password}>Password :{props.password}</label>
                {/* <input type="password" className="form-control inputfield" id="exampleformControlInput2" value={props.password} placeholder="Password" /> */}
            </div>
           </div>
        </div>
        </>
    )
}
export default Dashboard;