import MainButton from "@/components/MainButton/MainButton";
import "./index.css";
import { Suspense, useContext, useEffect, useState } from "react";
import { store } from "@/Contexts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { pathPage } from "@/main";
import Artist from "../../components/Artist";
import Cookies from "js-cookie";
import { instance } from "@/api/constants";
import CommentUsers from "@/components/Comments";
import CreateCM from "@/components/Comments/CreateCM";
import RatingComponent from "@/components/Rating";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { artistService } from "@/api/servers/artistServers";
import { IUser } from "@/Types";
import { toast } from "react-toastify";
import Loading from "@/components/Loading";

const PaintingDetail = () => {
  const { propsPaint } = useContext(store);
  const [register, setRegister] = useState<Boolean>();
  const navigate = useNavigate();
  console.log(propsPaint);
  useEffect(() => {
    if (Cookies.get("token")) {
      setRegister(true);
    } else {
      setRegister(false);
    }
  }, []);

  const handelCartToken = () => {
    const getOrder = localStorage.getItem("ProductOrder");
    if (Cookies.get("token")) {
      if (getOrder) {
        const parse = JSON.parse(getOrder);
        for (const key in parse) {
          if (parse[key].srcProduct == propsPaint[0].srcProduct) {
            toast.info("this product alredy added");

            return;
          }
        }
        console.log(propsPaint[0]);
        const copyInfo = [...parse, propsPaint[0]];
        const stringify = JSON.stringify(copyInfo);
        localStorage.setItem("ProductOrder", stringify);
        toast.success("Your order added to Cart");
      } else if (!getOrder) {
        const stringify = JSON.stringify([propsPaint[0]]);
        localStorage.setItem("ProductOrder", stringify);
        toast.success("Your order added to Cart");
      }
    } else {
      toast.info("You should be register first");
    }
  };

  const [user, setUser] = useState<IUser[]>();
  useEffect(() => {
    artistService().then((res) => {
      setUser(res);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col lg:mt-[89px] md:mt-0  gap-28">
        <div className="flex min-[500px]:gap-6 min-[500px]:flex-col-reverse min-[850px]:flex-row lg:flex-row min-[1180px]:gap-24  sm:gap-7">
          <div
            className={`flex min-[500px]:flex-col-reverse min-[1180px]:flex-row lg:w-1/2 p-[66px] bg-[var(--sec-color-white)] gap-14 justify-center items-center`}
          >
            <div className="flex  min-[1180px]:flex-col gap-6 justify-center">
              <div className="w-[42px] h-[48px]">
                <img
                  className="w-full h-full"
                  src={propsPaint[0].srcProduct}
                  alt=""
                />
              </div>
              <div className="w-[42px] h-[48px]">
                <img
                  className="w-full h-full opacity-60"
                  src={propsPaint[0].srcProduct}
                  alt=""
                />
              </div>
              <Link to={pathPage.View}>
                <div className="w-[42px] h-[48px]">
                  <img
                    className="w-full h-full opacity-60"
                    src="/src/assets/svgs/wall.svg"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-14">
              <div className="w-fit h-fit">
                <img
                  className="  w-[408px] h-[464px] "
                  src={propsPaint[0].srcProduct}
                  alt=""
                />
              </div>
              <div className="flex justify-around">
                <Link to={pathPage.View}>
                  <div className="flex gap-2">
                    <div className="flex items-center">
                      <img src="/src/assets/svgs/view-eye.svg" alt="" />
                    </div>
                    <p className="primary-font text-base">View in a room</p>
                  </div>
                </Link>
                <div className="flex gap-2">
                  <div>
                    <img src="/src/assets/svgs/share-black.svg" alt="" />
                  </div>
                  <p className="primary-font text-base">Share</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  min-[500px]:px-6 lg:px-0 flex-col  min-[500px]:mt-5 justify-center gap-6 ">
            <div className="flex flex-row gap-2">
              <Link to={pathPage.HomePage} className="flex items-center gap-1">
                <picture className="inline-block w-4 h-4">
                  <img
                    className="w-full h-full"
                    src="/src/assets/svgs/back-arrow.svg"
                    alt=""
                  />
                </picture>
                <p className={` font-light sec-font uppercase  cursor-pointer`}>
                  Back
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-4 ">
              <p className="primary-font text-[40px] leading-[48px]">
                {propsPaint[0].nameArt}
              </p>
              <Link to={`/artistsSelf/${propsPaint[0].id}`}>
                <div className="w-full gap-2 h-8 items-center flex">
                  <picture className="w-10 h-10">
                    <img
                      className="rounded-full object-cover h-full w-full"
                      src={propsPaint[0].avatar}
                      alt=""
                    />
                  </picture>
                  <p className="primary-font text-[var(--primary-color-black)] text-[18px] leading-[25px]">
                    {propsPaint[0].nameArtist}
                  </p>
                </div>
              </Link>
              <RatingComponent />
            </div>

            <div className="mt-8">
              <div className="mb-6 ">
                <p
                  className={`text-base primary-font text-[var(--third-color-black)]`}
                >
                  {propsPaint[0].desc}
                </p>
                <p
                  className={`text-base text-[var(--third-color-black)] primary-font `}
                >
                  Gallery wrap canvas
                </p>
                <p
                  className={`text-base  text-[var(--third-color-black)] primary-font `}
                >
                  26 in × 23 in
                </p>
              </div>
              <div className="mb-[24px]">
                <p
                  className={`primary-font w-[420px] mb-[30px] text-[var(--third-color-black)] text-base `}
                >
                  Dynamic and elusive abstraction and texture. Plays between the
                  lines of chaos and serenity. Perfect fit for modern and
                  contemporary styled interiors.
                </p>
                <hr className="w-[394px] opacity-60 border-[var(--gray-color)]" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="sec-font font-bold text-2xl leading-8 text-[var(--balck-color2)]">
                  ${propsPaint[0].price}
                </p>
                <div className="flex gap-1">
                  <img src="/src/assets/svgs/add.svg" alt="" />
                  <p
                    className={` text-[var(--third-color-black)] font-normal sec-font text-sm`}
                  >
                    Ships from New York, NY, USA
                  </p>
                </div>
                <div className="flex gap-1">
                  <img src="/src/assets/svgs/buy-add.svg" alt="" />
                  <p
                    className={` text-[var(--third-color-black)] font-normal sec-font text-sm`}
                  >
                    Estimated to ship in 3 - 7 days within USA
                  </p>
                </div>
              </div>
              <div className="flex mt-10 flex-col gap-4">
                <MainButton
                  onClick={handelCartToken}
                  className="border-2 w-full py-3   hover:text-[var(--primary-color-black)]"
                  value="Add Td Cart"
                />

                <p
                  className={`sec-font text-sm text-[var(--third-color-black)]  `}
                >
                  Taxes and shipping fees will apply upon checkout
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between  gap-2  px-[105px] ">
          <div className="flex items-center flex-col w-full  gap-4">
            <div className="flex min-[500px]:flex-wrap  gap-3">
              {user?.map((items) => (
                <Suspense key={items.id} fallback={<Loading />}>
                  <CommentUsers
                    className="w-[49%]"
                    fullName={items.first_name + " " + items.last_name}
                    avatar={items.avatar}
                  />
                </Suspense>
              ))}
            </div>
            <CreateCM className="w-[49%]" />
          </div>

          {/* <div className="w-1/2 flex flex-col gap-2">
          <h1 className="text-white primary-font text-xl">More Information</h1>
        <p className={`sec-font rounded-lg text-base  text-justify p-2 border-2 border-zinc-200 text-white`}>{propsPaint[0].extraInfo}</p>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default PaintingDetail;

function setRegister(arg0: string) {
  throw new Error("Function not implemented.");
}
