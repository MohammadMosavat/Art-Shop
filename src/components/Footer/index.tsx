import React from "react";
import CardFooter from "../CardFooter/CardFooter";
import { Link } from "react-router-dom";
import { pathPage } from "@/main";

const Footer = () => {
  return (
    <div className={` mt-12 bg-[var(--sec-color-white)] py-6 justify-between gap-7 flex flex-col px-[105px]`}>
      <footer className="flex min-[900px]:flex-row min-[500px]:flex-col min-[500px]:gap-4 ">

      <div className="flex flex-col min-[900px]:w-1/2 min-[500px]:w-full gap-4">
        <h1 className="primary-font  text-4xl">About Us</h1>
        <p className="sec-font text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam temporibus dolores veniam numquam ipsam totam, porro natus hic incidunt dignissimos consequuntur eum doloremque quia accusantium, nobis odit dolore sed. Hic.</p>
      </div>
      
      <section className="flex sm:flex-row min-[500px]:flex-col min-[500px]:gap-4 min-[900px]:w-1/2 min-[500px]:justify-between min-[900px]:justify-around">
        <div className="flex flex-col gap-4">
        <h1 className="primary-font  text-4xl">Pages</h1>
        <ul className="flex flex-col gap-2">
          <Link to={pathPage.Painting}>
          <li className="sec-font text-base border-b-2 w-fit border-transparent hover:border-[var(--primary-color-black)] pb-0.5 cursor-pointer hover:font-semibold transition-all duration-100 ease-in-out text-[var(--primary-color-black)]">Painting</li>
          </Link>
          <Link to={pathPage.Sculpture}>
          <li className="sec-font text-base border-b-2 w-fit border-transparent hover:border-[var(--primary-color-black)] pb-0.5 cursor-pointer hover:font-semibold transition-all duration-100 ease-in-out text-[var(--primary-color-black)]">Sculpture</li>
          </Link>
          <Link to={pathPage.Drawing}>
          <li className="sec-font text-base border-b-2 w-fit border-transparent hover:border-[var(--primary-color-black)] pb-0.5 cursor-pointer hover:font-semibold transition-all duration-100 ease-in-out text-[var(--primary-color-black)]">Drawings</li>
          </Link>
        </ul>
        </div>

        <div className="flex-col flex gap-4 ">
        <h1 className="primary-font  text-4xl">Quick Links</h1>
        <ul className=" flex flex-col gap-2">
          <li className="sec-font text-base border-b-2 w-fit border-transparent hover:border-[var(--primary-color-black)] pb-0.5 cursor-pointer hover:font-semibold transition-all duration-100 ease-in-out text-[var(--primary-color-black)]">Why Kit?</li>
          <li className="sec-font text-base border-b-2 w-fit border-transparent hover:border-[var(--primary-color-black)] pb-0.5 cursor-pointer hover:font-semibold transition-all duration-100 ease-in-out text-[var(--primary-color-black)]">Contact Us</li>
          <li className="sec-font text-base border-b-2 w-fit border-transparent hover:border-[var(--primary-color-black)] pb-0.5 cursor-pointer hover:font-semibold transition-all duration-100 ease-in-out text-[var(--primary-color-black)]">
            Learning
          </li>
        </ul>
        </div>
      </section>

      </footer>

      <div className="border-t-2 pt-4 border-zinc-400">
        <ul className="flex gap-4 w-fit mx-auto my-0">
          <li>
            <picture className="inline-block border-2 transition-all duration-700 ease-in-out  hover:border-dashed border-red-500 primary-shadow  p-2 rounded-full ">
              <img className="w-6 h-6 rounded-xl" src="/src/assets/svgs/instagram.svg" alt="" />
            </picture>
          </li>
          <li>
          <picture className="inline-block border-2 transition-all duration-700 ease-in-out  hover:border-dashed border-[#1D9BF0] primary-shadow  p-2 rounded-full ">
              <img className="w-6 h-6 rounded-xl" src="/src/assets/svgs/twitter.svg" alt="" />
            </picture>
          </li>
          <li>
          <picture className="inline-block border-2  transition-all duration-700 ease-in-out hover:border-dashed border-black primary-shadow  p-2 rounded-full ">
              <img className="w-6 h-6 rounded-xl" src="/src/assets/svgs/threads.svg" alt="" />
            </picture>
          </li>
          <li>
          <picture className="inline-block border-2 transition-all duration-700 ease-in-out  hover:border-dashed border-[#1877F2] primary-shadow  p-2 rounded-full ">
              <img className="w-6 h-6 rounded-xl" src="/src/assets/svgs/facebook (2).svg" alt="" />
            </picture>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Footer);
