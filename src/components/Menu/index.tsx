// Initialization for ES Users
import { pathPage } from "@/main";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Offcanvas, Ripple, Dropdown, initTE } from "tw-elements";
import { bool, boolean } from "yup";
import SearchBar from "../SearchBar";

initTE({ Offcanvas, Ripple, Dropdown });

const MenuHamber = () => {
  var menu = document.getElementById("menu");
  var main = document.getElementById("main");
  const [show, setShow] = useState<boolean>();
  // show the menu
  const openMenu = () => {
    setShow(true);
  };

  // make the menu "go away"
  const closeMenu = () => {
    setShow(false);
  };

  return (
    <>
      <div
        id="menu"
        className={`w-56 min-[500px]:flex min-[1180px]:hidden fixed top-0 ${
          show ? "left-0" : "left-[-225px]"
        } h-screen bg-[var(--primary-color-white)] primary-shadow  duration-500`}
      >
        <div className="w-full flex flex-col text-white px-5 py-4 space-y-4">
          <picture
            onClick={closeMenu}
            className="text-right  rounded-full hover:opacity-75 text-4xl inline-block h-10  w-10  "
          >
            <img
              className="w-full h-full"
              src="/src/assets/svgs/close.svg"
              alt=""
            />
          </picture>
          <div className="min-[500px]:inline-block sm:hidden">
          <SearchBar/>
          </div>
          <Link to={pathPage.Painting}>
            <div className="flex rounded-lg  p-2 gap-2 hover:bg-[var(--sec-color-white)]">
              <picture className="inline-block ">
                <img className="w-6 h-6" src="/src/assets/svgs/brush-paint.svg" alt="" />
              </picture>
              <p className="text-[var(--primary-color-black)]  transition-all duration-100 ease-out sec-font  uppercase">
                Paintings
              </p>
            </div>
          </Link>
          <Link to={pathPage.Drawing}>
            <div className="flex rounded-lg items-center p-2 gap-2 hover:bg-[var(--sec-color-white)]">
            <picture className="inline-block ">
                <img className="w-6 h-6" src="/src/assets/svgs/draw-icon.svg" alt="" />
              </picture>
              <p className="text-[var(--primary-color-black)]  transition-all duration-100 ease-out  sec-font  uppercase">
                Drawings
              </p>
            </div>
          </Link>
          <Link to={pathPage.Sculpture}>
            <div className="flex rounded-lg items-center  p-2 gap-2 hover:bg-[var(--sec-color-white)]">
            <picture className="inline-block ">
                <img className="w-6 h-6" src="/src/assets/svgs/brush-paint.svg" alt="" />
              </picture>
              <p className="text-[var(--primary-color-black)] transition-all duration-100 ease-out  sec-font  uppercase">
                Sculpture
              </p>
            </div>
          </Link>
          <Link to={pathPage.artists}>
            <div className="flex rounded-lg items-center p-2 gap-2 hover:bg-[var(--sec-color-white)]">
            <picture className="inline-block ">
                <img className="w-6 h-6" src="/src/assets/svgs/pesron.svg" alt="" />
              </picture>
              <p className="text-[var(--primary-color-black)] transition-all duration-100 ease-out  sec-font   uppercase">
                artists
              </p>
            </div>
          </Link>
          <Link to={pathPage.AddToCart}>
            <div className="flex rounded-lg p-2 items-center gap-2 hover:bg-[var(--sec-color-white)]">
            <picture className="inline-block ">
                <img className="w-6 h-6" src="/src/assets/svgs/blackCopy.svg" alt="" />
              </picture>
              <p className="text-[var(--primary-color-black)] transition-all duration-100 ease-out  sec-font   uppercase">
                carts
              </p>
            </div>
          </Link>
          <Link to={pathPage.artists}>
            <div className="flex rounded-lg p-2 items-center gap-2 hover:bg-[var(--sec-color-white)]">
            <picture className="inline-block ">
                <img className="w-6 h-6" src="/src/assets/svgs/about.svg" alt="" />
              </picture>
              <p className="text-[var(--primary-color-black)] transition-all duration-100 ease-out  sec-font   uppercase">
                About us
              </p>
            </div>
          </Link>
        </div>
      </div>

      <main className="min-[500px]:inline-block min-[1180px]:hidden">
        <img onClick={openMenu} src="/src/assets/svgs/menu.svg" alt="" />
      </main>
    </>
  );
};

export default MenuHamber;
