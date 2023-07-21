import Cookies from "js-cookie";
import "./index.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pathPage } from "@/main";
import { SingleProductService } from "@/api/servers/SingleUser";
import { IUser } from "@/Types";

const ProflieUser = (props: { register: string | null }) => {
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    SingleProductService().then((res) => {
      setUser(res);
    });
  }, []);
  const handleLogOut = () => {
    document.cookie = "token=; expires=Thu, 29 Jun 2023 00:00:00 UTC; path=/;";
    location.reload();
  };

  return (
    <div
      className={`${
        props.register === "Sign Up"
          ? "hidden"
          : " flex flex-col justify-center"
      } hover:bg-[var(--sec-color-white)] p-1.5 rounded-full    `}
    >
      <div className="flex items-center justify-center   ">
        <div className=" relative inline-block text-left dropdown">
          <span>
            <button
              className={`inline-flex items-center justify-center w-full px-1 py-1 text-sm font-medium leading-5 text-[var(--primary-color-black)] transition duration-150 ease-in-out bg-transparent  rounded-md  focus:outline-none focus:shadow-outline-blue  active:text-[var(--sec-color-black)]" `}
              type="button"
              aria-haspopup="true"
              aria-expanded="true"
              aria-controls="headlessui-menu-items-117"
            >
              <div className="flex items-center gap-1">
                <div className="w-6 h-w-6">
                  <img
                    className="w-full h-full rounded-full"
                    src={user?.avatar}
                    alt=""
                  />
                </div>
                <img
                  src="/src/assets/svgs/blackMiniBlackArrowProfile.svg"
                  alt=""
                />
              </div>
            </button>
          </span>
          <div className="opacity-0  invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
            <div
              className={`absolute right-0 bg-[sec-color-white] w-56 mt-2 origin-top-right rounded-lg primary-shadow outline-none" aria-labelledby="headlessui-menu-button-1`}
              id="headlessui-menu-items-117"
              role="menu"
            >
              <div
                className={`px-4   hover:bg-[var(--forth-color-white)] rounded-t-lg rounded-tl-lg  cursor-pointer bg-[var(--sec-color-white)] py-3`}
              >
                <p className={`text-sm primary-font $leading-5`}>
                  Signed in as
                </p>
                <p className="text-sm font-bold leading-5 primary-font  truncate">
                  {user?.email}
                </p>
              </div>
              <Link to={pathPage.Profile}>
                <div
                  className={`px-4 bg-[var(--sec-color-white)]  hover:bg-[var(--forth-color-white)]  cursor-pointer  gap-1 items-center flex py-3`}
                >
                  <img src="/src/assets/svgs/pesron.svg" alt="" />
                  <p className="text-sm font-bold leading-5 primary-font  truncate">
                    Profile
                  </p>
                </div>
              </Link>

              <Link to={pathPage.HomePage}>
                <div
                  onClick={handleLogOut}
                  className={`px-4 hover:bg-[var(--forth-color-white)]   rounded-b-lg rounded-bl-lg bg-[var(--sec-color-white)]  cursor-pointer border-t-2  gap-1 items-center flex py-3`}
                >
                  <img src="/src/assets/svgs/logout.svg" alt="" />
                  <p
                    className={`text-sm font-bold leading-5 primary-font  truncate`}
                  >
                    Logout
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProflieUser;
