import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const refreshUrl = process.env.REACT_APP_REFRESHTOKENAPI_LOGIN;
const interceptors =() =>
{ 
    axios.interceptors.request.use(
        (config) => {   
            const accessToken = JSON.parse(localStorage.getItem('accesstoken'));           
             if (accessToken) {
                 config.headers['Authorization'] = `Bearer ${accessToken}`;                
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
            if(error.response.status === 400)
            {
                console.log(error.response.data.code);
                <Navigate to ="/" />
            }
    
            if (error.response.status === 401) {
                const refreshtoken = JSON.parse( localStorage.getItem("refreshtoken"));                
                try{
                const response = await axios({
                    method:"post",
                    url:`${refreshUrl}`,
                    data : {refreshToken : refreshtoken},
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                });                                 
                   localStorage.removeItem("accesstoken");
                   localStorage.removeItem("refreshtoken");
                    localStorage.setItem("accesstoken",JSON.stringify(response.data.response.accessToken.accessToken)); 
                    localStorage.setItem("refreshtoken",JSON.stringify(response.data.response.refreshtoken));
                    console.log("refreshsuccess");                   
                    }
                catch(err) {console.log(err.response);                     
                }   
               console.log("true");
                return Promise.reject(error);
            }
            else  {
                console.log("false");
                window.location.href ="/"
            }            
            return Promise.reject(error);
        }
    );
}
export default interceptors