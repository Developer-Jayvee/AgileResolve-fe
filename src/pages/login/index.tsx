import IllustrateImage from "@assets/login/div-bg-2.png";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage(){

    return <div className="flex justify-center items-center h-screen w-full border bg-neutral">
        <div className="grid grid-cols-[1fr_500px]  p-10">
            <div className="overflow-hidden w-full h-full max-w-full">
                <img className="w-full h-full object-center" src={IllustrateImage} alt="Illustrated Image" />
            </div>
            <div className=" p-6  rounded-2xl">
                <div className="flex items-center justify-between px-8">
                    <h1 className="text-[36px] font-light">Sign In</h1>
                    <div className="flex">
                        <button className="cursor-pointer hover:bg-red-700 rounded-full bg-red-500 p-3 text-white">
                            <FaGoogle/>
                        </button>
                    </div>
                </div>
                <div className="mt-5 ">
                    <form className="flex flex-col gap-8 px-8">
                        <div className="grid gap-y-3">
                            <label className="font-bold text-[14px]">USERNAME</label>
                            <input className="p-3 px-6 outline-0 bg-login-input rounded-full" type="text" placeholder="Username"/>
                        </div>
                        <div className="grid gap-y-3">
                            <label className="font-bold text-[14px]">PASSWORD</label>
                            <input className="p-3 px-6 outline-0 bg-login-input rounded-full" type="password" placeholder="Password"/>
                        </div>
                        <button className="bg-primary hover:bg-secondary text-white p-3 text-[17px] cursor-pointer">
                            Login
                        </button>
                    </form>
                </div>
                <div className="mt-4 px-8 grid grid-cols-2">
                    <div className="flex gap-2 items-center">
                        <input className="text-primary" type="checkbox"/>
                        <label className="text-primary">Remember me</label>
                    </div>
                    <a href="#" className="underline underline-offset-1 text-primary text-right">Forget Password</a>
                </div>
            </div>
        </div>
    </div>
}