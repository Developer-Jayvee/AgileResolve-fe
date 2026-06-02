import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "@/pages/login";
import ClientLayout from "@/pages/client/layouts/ClientLayout";
import Dashboard from "@/pages/client/dasboard/Dashboard";
import LoginLayout from "@/pages/login/layouts/LoginLayout";
import ProjectClient from "@/pages/client/project";
import ProjectIndex from "@/pages/project";
import ProjectView from "@/pages/project/view/project.view";
import TicketClient from "@/pages/client/ticket";
import TicketIndex from "@/pages/ticket";
import TicketView from "@/pages/ticket/view/ticket.view";
import TicketCreate from "@/pages/ticket/create/ticket.create";

export const Routes = createBrowserRouter([
    {
        path:"/",
        element:<LoginLayout/>,
        children:[
            {
                index:true,
                element:<LoginPage/>
            }
        ]
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
                element:<ProjectClient/>,
                children:[
                    {
                        index:true,
                        element:<ProjectIndex/>
                    },
                    {
                        path:':id',
                        element:<ProjectView/>
                    }
                ]
            },
            {
                path:"ticket",
                element:<TicketClient/>,
                children: [
                    {
                        index:true,
                        element: <TicketIndex/>
                    },
                    {
                        path:":id",
                        element:<TicketView/>
                    },
                    {
                        path:"create/:project_id",
                        element:<TicketCreate/>
                    }
                ]
            }
        ]
    }
])