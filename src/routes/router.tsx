import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/login";

export const Routes = createBrowserRouter([
    {
        path:"/",
        element:<LoginPage/>
    }
])