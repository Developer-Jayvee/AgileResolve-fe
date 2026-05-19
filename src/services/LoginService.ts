import axiosInstance from "@/config/axios.config";
import { ACCESS_TOKEN_NAME, USER_INFO_NAME } from "@/constants";
import type { LoginServiceResponse,  LoginServiceProps } from "@/types/LoginServiceTypes";



const LoginService = () => ({
    login : async ({ username , password } : LoginServiceProps) => {
        try {
            const response = await axiosInstance.post<LoginServiceResponse>("/user/login",{ username , password });
            if(response){
                localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                localStorage.setItem(USER_INFO_NAME,JSON.stringify(response.data.user));
            }
            return response;
        } catch (error) {
            return error;            
        }
    }
});


export default LoginService;