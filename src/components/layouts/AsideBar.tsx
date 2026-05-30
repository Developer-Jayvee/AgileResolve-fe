import { LiaProjectDiagramSolid } from "react-icons/lia";
import { LuLayoutDashboard, LuTicket } from "react-icons/lu";
import {  NavLink } from "react-router-dom";


export default function AsideBar(){
    
    return <aside className="bg-sidebar fixed left-0 top-0 bottom-0 w-40">
        <div className=" h-full w-full flex flex-col">
            <div className=" h-12 flex justify-center items-center">
                <p className="text-white font-semibold text-[16px]">AgileResolve</p>
            </div>
            <div className="grow text-white mt-4">
                <ul className="links">
                    <li>
                        <NavLink to="/client/dashboard" className="p-2 py-4  hover:bg-active-link hover:font-bold transition-all text-[14px] flex gap-2 items-center">
                            <LuLayoutDashboard/>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/client/project/" className="p-2 py-4  hover:bg-active-link hover:font-bold transition-all text-[14px] flex gap-2 items-center">
                            <LiaProjectDiagramSolid/>
                            <span>Projects</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/client/ticket" className="p-2  py-4 hover:bg-active-link hover:font-bold transition-all text-[14px] flex gap-2 items-center">
                            <LuTicket/>
                            <span>Tickets</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
}