import { Outlet, useNavigate } from "react-router-dom";
const PrivateRoutes =({isSignedIn}) =>
{
//    const navigate = useNavigate();
//   return (
//    //  if(!isSignedIn)
//    // {
//    //    <Outlet />
//    //  // return children  
//    // } 
//    // else{
//    //    navigate("/");
//    // }
//    isSignedIn ? <Outlet/> : navigate("/"); return null;
//   );
//  //  isSignedIn ? children : navigate("/");
const navigate = useNavigate();

// Check if the user is signed in
if (isSignedIn) {
  // If signed in, render the Outlet to display child routes
  return <Outlet />;
} else {
  // If not signed in, navigate to the login page
  navigate("/");
  // Return null or any component you want to render while navigating
  return null;
}
}
export default PrivateRoutes;