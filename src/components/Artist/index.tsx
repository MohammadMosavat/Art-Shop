import { IUser } from "@/Types";
import Loading from "@/components/Loading";
import Cookies from "js-cookie";
import { Suspense, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { string } from "yup";

type IUserFull = IUser & {
  classNameExtra: string;
  desc: string;
  nameArtist: string;
};

const Artist = (props: IUserFull) => {
  const [register, setRegister] = useState<Boolean>();

  useEffect(() => {
    if (Cookies.get("token")) {
      setRegister(true);
    } else {
      setRegister(false);
    }
  }, []);

  return (
    <div
      className={`${props.classNameExtra} items-center max-h-60 rounded-lg primary-shadow sm:justify-center  bg-[var(--sec-color-white)]  flex gap-6  p-4`}
    >
      <Suspense fallback={<Loading />}>
        <Link to={`/artistsSelf/${props.id}`}>
          <div className="flex  justify-center gap-2 items-center flex-col">
            <div className="w-[121px] h-[121px]">
              <img
                className="rounded-full shadow-xl w-full h-full cursor-default object-cover"
                src={props.avatar}
                alt=""
              />
            </div>
          </div>
        </Link>
      </Suspense>
      <main className="w-[80%] flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <div className=" flex flex-col gap-1">
            <h1 className="primary-font md:text-xl font-bold">{props.nameArtist}</h1>
            <h1 className="sec-font text-[var(--third-color-black)] ">
              {props.job}
            </h1>
            {register && (
              <p className="text-[var(--third-color-black)] min-[500px]:text-sm md:text-base mb-0.5 sec-font ">
                {props.email}
              </p>
            )}
          </div>

          <section
            className={`flex items-center ${
              register ? "justify-between" : "justify-start"}`}>
            <p className="min-[500px]:text-sm md:text-base sec-font font-extralight text-[var(--third-color-black)] text-justify">
              {props.desc}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Artist;

function setRegister(arg0: boolean) {
  throw new Error("Function not implemented.");
}
