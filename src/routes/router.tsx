import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "@/pages/login";
import ClientLayout from "@/pages/client/layouts/ClientLayout";
import Dashboard from "@/pages/client/dasboard/Dashboard";
import Project from "@/pages/client/project/Project";
import Ticket from "@/pages/client/ticket/Ticket";

export const Routes = createBrowserRouter([
    {
        path:"/",
        element:<LoginPage/>
    },
    {
        path:"/client",
        element:<ClientLayout/>,
        children:[
            {
                index:true,
                element:<Navigate to="/client/dashboard" replace/>
            },
            {
                path:"dashboard",
                element:<Dashboard/>
            },
            {
                path:"project",
                element:<Project/>
            },
            {
                path:"ticket",
                element:<Ticket/>
            },
        ]
    }
])