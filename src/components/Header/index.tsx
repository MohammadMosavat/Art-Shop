import { pathPage } from "@/main";
import { Link } from "react-router-dom";
import MainButton from "../MainButton/MainButton";
import ProflieUser from "../ProflieUser";
import SearchBar from "../SearchBar";
import { useEffect, useState } from "react";
import React from "react";
import Cookies from "js-cookie";
import MenuHamber from "../Menu";

const Header = () => {
  const [register, setRegister] = useState<string>("");
  console.log("RAN");
  useEffect(() => {
    if (Cookies.get("token")) {
      setRegister("Login");
    } else {
      setRegister("Sign Up");
    }
  }, []);

  return (
    <header
      className={`shadow-md py-5 bg-[var(--primary-color-white)] lg:fixed z-10 w-full  top-0 px-6 items-center flex`}
    >
      <div className="h-fit flex gap-3 items-center flex-grow">
        <MenuHamber />

        <Link to={pathPage.HomePage}>
          <img src="/src/assets/svgs/logo.svg" alt="" />
        </Link>
      </div>

      <nav className=" h-12 flex items-center gap-7">
        <ul className="h-full items-center min-[500px]:hidden min-[1180px]:flex gap-7 self-center text-sm font-normal letter-space">
          <Link to={pathPage.Painting}>
            <li
              className={`sec-font hover:bg-[var(--sec-color-white)]  p-2 rounded-lg   `}
            >
              PAINTINGS
            </li>
          </Link>
          <Link to={pathPage.Drawing}>
            <li
              className={`sec-font hover:bg-[var(--sec-color-white)]  p-2 rounded-lg
                    `}
            >
              DRAWINGS
            </li>
          </Link>
          <Link to={pathPage.Sculpture}>
            <li
              className={`sec-font hover:bg-[var(--sec-color-white)]  p-2 rounded-lg `}
            >
              SCULPTURE
            </li>
          </Link>
          <Link to={pathPage.artists}>
            <li
              className={`sec-font hover:bg-[var(--sec-color-white)] p-2 rounded-lg`}
            >
              ARTISTS
            </li>
          </Link>
        </ul>

        <Link to={pathPage.AddToCart}>
          <div className="h-full  items-center min-[500px]:hidden min-[1180px]:flex gap-7">
            <picture className="hover:bg-[var(--sec-color-white)] inline-block p-2 rounded-full">
              <img className="w-6 h-6" src={"/src/assets/svgs/blackCopy.svg"} />
            </picture>
          </div>
        </Link>

        <div className="min-[500px]:hidden sm:inline-block">
          <SearchBar />
        </div>
        <Link to={`${register == "Sign Up" ? pathPage.Auth : pathPage.Login}`}>
          <MainButton className={`px-4 w-24 py-1 h-10 `} value={register} />
        </Link>

        <ProflieUser register={register} />
      </nav>
    </header>
  );
};

export default React.memo(Header);
