import AsideBar from "@/components/layouts/AsideBar";
import TopNav from "@/components/layouts/TopNav";
import { Outlet } from "react-router-dom";


export default function ClientLayout(){

    return (
        <div className="h-screen w-full bg-neutral">
            <AsideBar/>
            <TopNav/>
            <main className="pl-40 pt-12">
                <Outlet/>
            </main>
        </div>
    )
}