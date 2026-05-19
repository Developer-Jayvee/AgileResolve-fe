import { CiBellOn, CiSettings } from "react-icons/ci";


export default function TopNav(){
    return <header>
        <nav className="fixed top-0 left-40 right-0 h-12 bg-white shadow">
            <div className="w-full h-full flex items-center justify-end gap-3 px-2">
                <div className="flex gap-2 items-center">
                    <button className="text-xl">
                        <CiBellOn/>
                    </button>
                    <button className="text-xl">
                        <CiSettings/>
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <div className="overflow-hidden rounded-full w-7 h-7">
                        <img className="object-center" src="https://ui-avatars.com/api/?name=Jayvee+Hidlao" alt="Profile Icon"/>
                    </div>
                    <p className="text-sm font-light">Jayvee H.</p>
                </div>
            </div>
        </nav>
    </header>
}