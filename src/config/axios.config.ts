import { ACCESS_TOKEN_NAME } from "@/constants";
import axios from "axios";


const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    timeout:5000,
    headers:{
        'Content-Type':"application/json"
    }
});

axiosInstance.interceptors.request.use( 
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN_NAME);
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error ) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);



export default axiosInstance;
