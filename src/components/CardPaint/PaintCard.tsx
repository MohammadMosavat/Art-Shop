import "./index.css";
import { Suspense, useContext, useState } from "react";
import BuyButton from "../BuyButton/ButButton";
import ShareButton from "../BuyShare/ShareButton";
import { store } from "@/Contexts";

import { Link } from "react-router-dom";
import { pathPage } from "@/main";
import Loading from "../Loading";
import { IProduct } from "@/Types";

const PaintCard = (props: IProduct) => {
  const [isShown, setIsShown] = useState(false);

  var myVariable: String = isShown ? "flex" : "hidden";

  const { propsPaint, setPropsPaint } = useContext(store);

  const handelPainting = () => {
    setPropsPaint([props]);
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="h-550 min-w-[280px]   my-5 ">
        <div
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          className={`primary-shadow-hover  w-[280px]  hover:-mt-4 transition-all duration-300 px-6 py-6 h-fit`}
        >
          <Link onClick={handelPainting} to={pathPage.Product}>
            <div className="w-full h-fit">
              <img
                className="hover:shadow-md min-w-[200px] w-full object-cover   rounded-sm max-h-[250px]"
                src={props.srcProduct}
                alt="Image 1"
              />
            </div>
          </Link>

          <div id="details" className={` flex flex-col justify-between' `}>
            <div className=" mt-4 flex flex-col gap-1">
              <p className="primary-font font-bold text-base m-0 ">
                {props.nameArt}
              </p>
              <p className="primary-font sec-color">{props.nameArtist}</p>
              <p className="primary-font sec-color italic">{props.desc}</p>
            </div>

            <div
              className={`sm:inline ${isShown ? "inline-block" : "lg:hidden"}`}
              id="order"
            >
              <div className={`sm:flex  flex-col h-full gap-2  `}>
                <div>
                  <p className="primary-font sec-color italic">26 in × 23 in</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="sec-font font-bold text-base leading-10">
                    ${props.price}
                  </p>
                  <div className="flex items-center gap-2">
                    <ShareButton />
                    <Link onClick={handelPainting} to={pathPage.Product}>
                      <BuyButton />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default PaintCard;
