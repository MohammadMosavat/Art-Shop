import useAuth from "@/Hooks/useAuth";
import { IUser } from "@/Types";
import { SingleProductService } from "@/api/servers/SingleUser";
import DashComponent from "@/components/DashComponent";
import { pathPage } from "@/main";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ProfilScreen = (props: any) => {
  useAuth();

  const [newUser, setNewUser] = useState<IUser>();
  const [token, setToken] = useState<boolean>();
  useEffect(() => {
    if (Cookies.get("token")) {
      setToken(true);
    } else {
      setToken(false);
    }
  }, []);

  const handelLogout = () => {
    document.cookie = "token=; expires=Thu, 29 Jun 2023 00:00:00 UTC; path=/;";
    toast.success("You Logout");
  };

  useEffect(() => {
    SingleProductService().then((res) => {
      console.log(res);
      setNewUser(res);
      const local = localStorage.getItem("newUserInfo");
      if (local) {
        const localParse = JSON.parse(local);
        console.log(localParse);
        setNewUser({
          ...res,
          first_name: localParse.newFirstName,
          last_name: localParse.newLastName,
          email: localParse.newEmail,
        });
      }
    });
  }, []);
  return (
    <>
      {token && (
        <>
          <ToastContainer position="bottom-left" />
          <div className="flex min-[500px]:flex-col sm:flex-row min-[500px]:items-center sm:items-start  gap-7 w-full">
            <div className={` min-[1180px]:w-[20%] lg:w-[25%]  min-[500px]:w-full sm:w-[35%] md:w-[35%] bg-[var(--primary-color-white)] min-[500px]:h-18  sm:h-screen p-4 primary-shadow ${props.className}`}
            >
              <Link to={pathPage.HomePage}>
                <div className="h-7 px-2 min-[500px]:w-fit mt-0 mb-5 sm:w-3/4">
                  <img
                    className="w-full  h-full"
                    src="/src/assets/svgs/logo.svg"
                    alt=""
                  />
                </div>
              </Link>
              <div className="flex items-center space-x-4 p-2 mb-5">
                <img
                  className="h-12 rounded-full"
                  src={newUser?.avatar}
                  alt="James Bhatta"
                />
                <div>
                  <h4 className="font-semibold primary-font text-lg text-[var(--primary-color-black)]  capitalize font-poppins tracking-wide">
                    {newUser?.first_name + " " + newUser?.last_name}
                  </h4>
                  <span className="text-sm tracking-wide flex items-center space-x-1">
                    <svg
                      className="h-4 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="text-[var(--primary-color-black)] sec-font opacity-80">
                      Verified
                    </span>
                  </span>
                </div>
              </div>
              <ul className=" min-[500px]:items-center flex min-[500px]:flex-wrap min-[500px]:flex-row sm:flex-col sm:items-start text-sm">
                <Link  className='w-full' to={pathPage.Profile}>
                 <DashComponent title="Dashboard" src="/src/assets/svgs/dashboard.svg"/>
                </Link>
                <Link  className='w-full' to={pathPage.Orders}>
                  <DashComponent title="My Orders" src="/src/assets/svgs/product.svg"/>
                </Link>
                <Link className='w-full'  onClick={handelLogout} to={pathPage.HomePage}>
                  <DashComponent title="Log Out" src="/src/assets/svgs/logout.svg"/>
                </Link>
              </ul>
            </div>
            <div className="w-[85%] py-6">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProfilScreen;
