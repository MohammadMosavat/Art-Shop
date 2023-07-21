import "./index.css";
import MainButton from "@/components/MainButton/MainButton";
import { useEffect, useMemo, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { pathPage } from "@/main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useRegister from "./Register/useRegister";
import useAuth from "@/Hooks/useAuth";

const LoginSignUpPage = () => {
  useAuth();
  return (
    <>
      <ToastContainer position={"bottom-left"} />
      <div className=" bg    flex justify-center items-center h-screen">
        <div className="main flex  sm:bg-zinc-300 ">
          <div className="shadow-2xl  min-[500px]:flex-col lg:flex-row rounded-lg bg-[var(--primary-color-white)] mx-auto my-9 flex  w-70 ">
            <div className=" rounded-tl-lg bg-two lg:w-[50%] min-[500px]:rounded-tr-lg lg:rounded-tr-none min-[500px]:w-full p-8 lg:rounded-bl-lg">

            <Link className="cursor-pointer" to={pathPage.HomePage}>
              <img src="/src/assets/svgs/logo.svg" alt="" />
            </Link>
            <h1 className="sm:text-4xl mt-8 w-2/3 primary-font text-[var(--primary-color-black)] font-light min-[500px]:hidden sm:inline-block lg:text-6xl">
              WELLCOME
            </h1>
            <p className="sec-font min-[500px]:hidden lg:inline-block text-[var(--primary-color-black)] font-light text-lg w-80">
              By creating an account you will be able to shop faster, earn
              rewards, make your own gallery, and keep track of the orders you
              have previously made.
            </p>
            </div>
            <main className="lg:w-[50%]  min-[500px]:h-full  min-[500px]:w-full p-8 ">
            <Outlet />
            </main>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default LoginSignUpPage;
