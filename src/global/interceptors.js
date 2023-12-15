import axios from "axios";
import { Navigate } from "react-router-dom";
const refreshUrl = process.env.REACT_APP_REFRESHTOKENAPI_LOGIN;
const interceptors =() =>
{

    axios.interceptors.request.use(
        (config) => {
    
            const accessToken = JSON.parse(localStorage.getItem('accesstoken'));
            console.log(accessToken,"412");
             console.log(config,"456");
             if (accessToken) {
                 config.headers['Authorization'] = `Bearer ${accessToken}`;
                 console.log(accessToken,"445");
                
            }
            else
            {
                <Navigate to ="/" />
            }
    
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    axios.interceptors.response.use(
        (response) => {
    
            return response;
        },
        async (error) => {
          console.log(error.response.status,"456");
    
    
            if (error.response.status === 401) {
                const refreshtoken = JSON.parse( localStorage.getItem("refreshtoken"));
                console.log(refreshtoken,"012");
                try{
                const response = await axios({
                    method:"post",
                    url:`${refreshUrl}`,
                    data : {refreshToken : refreshtoken},
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                });
               
                   // console.log(response,"12354");
                   localStorage.removeItem("accesstoken");
                   localStorage.removeItem("refreshtoken");
                    localStorage.setItem("accesstoken",JSON.stringify(response.data.response.accessToken.accessToken)); 
                    localStorage.setItem("refreshtoken",JSON.stringify(response.data.response.refreshtoken));
                    console.log("refreshsuccess");
                    
                    }
                catch(err) {console.log(err.response); 
                    // window.location.href ="/"
                }
    
               console.log("true");
             //   <Navigate to="/" replace={true}></Navigate>
                return Promise.reject(error);
            }
            else  {
             //   localStorage.removeItem("accesstoken");
             //   localStorage.removeItem("refreshtoken");
             //   <Navigate to="/" replace={true} />
                console.log("false");
            }
            
            return Promise.reject(error);
        }
    );
}
export default interceptors