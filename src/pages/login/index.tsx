import Button from "@/components/Button";
import useLogin from "@/hooks/useLogin";
import IllustrateImage from "@assets/login/div-bg-2.png";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const { initStateForm, handleInput, handleSubmitForm, canSubmit , errors , successMessage ,isLoading} =
    useLogin();
  return (
    <div className="flex justify-center items-center h-screen w-full border bg-neutral">
      <div className="grid grid-cols-[1fr_500px]  p-10">
        <div className="overflow-hidden w-full h-full max-w-full">
          <img
            className="w-full h-full object-center"
            src={IllustrateImage}
            alt="Illustrated Image"
          />
        </div>
        <div className=" p-6  rounded-2xl">
          <div className="flex items-center justify-between px-8">
            <h1 className="text-[36px] font-light">Sign In</h1>
            <div className="flex">
              <button className="cursor-pointer hover:bg-red-700 rounded-full bg-red-500 p-3 text-white">
                <FaGoogle />
              </button>
            </div>
          </div>
          <div className="mt-5 px-8">
            <form
              className="flex flex-col gap-8 "
              onSubmit={handleSubmitForm}
            >
              <div className="grid gap-y-3">
                <label className="font-bold text-[14px]">USERNAME</label>
                <input
                  value={initStateForm.username}
                  onChange={(e) => handleInput("username", e.target.value)}
                  className="p-3 px-6 outline-0 bg-login-input rounded-full"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="grid gap-y-3">
                <label className="font-bold text-[14px]">PASSWORD</label>
                <input
                  value={initStateForm.password}
                  onChange={(e) => handleInput("password", e.target.value)}
                  className="p-3 px-6 outline-0 bg-login-input rounded-full"
                  type="password"
                  placeholder="Password"
                />
              </div>
             <Button buttonText="Login" isDisabled={!canSubmit} buttonType="submit" isLoading={isLoading} />
            </form>
            {
              errors && (
                <p className="text-sm text-red-600 mt-3 text-center">{errors}</p>
              )
            }
            {
              successMessage && (
                <p className="text-sm text-green-600 mt-3 text-center">{successMessage}</p>
              )
            }
          </div>
          <div className="mt-4 px-8 grid grid-cols-2">
            <div className="flex gap-2 items-center">
              <input className="text-primary" type="checkbox" />
              <label className="text-primary">Remember me</label>
            </div>
            <a
              href="#"
              className="underline underline-offset-1 text-primary text-right"
            >
              Forget Password
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
