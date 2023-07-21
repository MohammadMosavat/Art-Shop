import { Suspense, useEffect, useState } from "react";
import useDashboard from "./useDashboard";
import MainButton from "@/components/MainButton/MainButton";
import { SingleProductService } from "@/api/servers/SingleUser";
import { IUser } from "@/Types";
import Loading from "@/components/Loading";

const DashBoardScreen = () => {
  const [newUser, setNewUser] = useState<IUser>();

  const local = localStorage.getItem("newUserInfo");
  useEffect(() => {
    SingleProductService().then((res) => {
      setNewUser(res);
      if (local) {
        const localParse = JSON.parse(local);
        console.log(localParse);
        setNewUser({
          ...res,
          first_name: localParse.newFirstName,
          last_name: localParse.newLastName,
          email: localParse.newEmail,
          id: localParse.newAge,
        });
      }
    });
  }, []);

  const { handelChangeValueUsername, handleSubmit, register } = useDashboard();

  return (
    <div className="flex flex-col gap-4">
      <section className="sec-shadow rounded-md flex gap-4 items-center w-[98%] p-4  bg-[var(--primary-color-white)]">
        <Suspense fallback={<Loading />}>
          <picture className="w-28 inline-block h-28">
            <img
              className="w-full rounded-full object-cover h-full"
              src={newUser?.avatar}
              alt=""
            />
          </picture>
        </Suspense>

        <section>
          <div>
            <h1 className="primary-font font-bold text-[var(--primary-color-black)] text-lg">
              {newUser?.first_name + " " + newUser?.last_name}
            </h1>
            <p className="sec-font text-zinc-700 opacity-80">
              {newUser?.email}
            </p>
          </div>
        </section>
      </section>

      <div className="rounded-lg sec-shadow flex-col flex gap-4 items-start justify-center w-[98%] p-4  bg-[var(--primary-color-white)]">
        <h1 className="primary-font text-lg font-bold text-[var(--primary-color-black)]">
          Personal Inforamtions
        </h1>
        <form action="" className="flex min-[500px]:flex-wrap  min-[1180px]:flex-row min-[1180px]:items-end w-full  gap-4">
          <div className="flex min-[500px]:w-full sm:w-full md:w-[48%] lg:w-[23%] flex-col gap-2">
            <label
              className="primary-font font-semibold text-[var(--sec-color-black)]"
              htmlFor=""
            >
              Change First Name
            </label>
            <div className="flex  gap-2 ">
              <input
                {...register("newFirstName")}
                type="text"
                placeholder="New Username"
                className={`p-2 border-[var(--third-color-white)] items-start valid:sec-font valid:opacity-80 valid:text-[var(--third-color-black)]   input text-sm outline-none border-2 sec-font gap-1 w-full h-10 shadow-md rounded-lg `}
              />
            </div>
          </div>

          <div className="flex  min-[500px]:w-full sm:w-full md:w-[48%] lg:w-[23%] flex-col gap-2">
            <label
              className="primary-font font-semibold text-[var(--sec-color-black)]"
              htmlFor=""
            >
              Change Last Name
            </label>
            <div className="flex gap-2 ">
              <input
                {...register("newLastName")}
                type="text"
                placeholder="New Username"
                className={`p-2 border-[var(--third-color-white)] items-start valid:sec-font valid:opacity-80  input text-sm outline-none border-2 sec-font gap-1  text-[var(--third-color-black)] w-full h-10 shadow-md rounded-lg `}
              />
            </div>
          </div>

          <div className="flex  min-[500px]:w-full sm:w-full  md:w-[48%] lg:w-[23%] flex-col gap-2">
            <label
              className="primary-font font-semibold text-[var(--sec-color-black)]"
              htmlFor=""
            >
              Change Email
            </label>
            <div className="flex gap-2 ">
              <input
                {...register("newEmail")}
                type="text"
                placeholder="New Email"
                className={`p-2 border-[var(--third-color-white)] items-start valid:sec-font valid:opacity-80 valid:text-[var(--third-color-black)] input text-sm outline-none border-2 sec-font gap-1  w-full h-10 shadow-md rounded-lg `}
              />
            </div>
          </div>

          <div className="flex  min-[500px]:w-full sm:w-full md:w-[48%] lg:w-[23%] flex-col gap-2">
            <label
              htmlFor="countries"
              className="  primary-font font-semibold text-gray-700"
            >
              Select A Country
            </label>
            <div className="flex w-full gap-2">
              <select
                {...register("newAge")}
                id="countries"
                className="p-2 shadow-md focus:outline-none border-[var(--third-color-white)] w-full border-2 rounded-lg text-[var(--third-color-black)] sec-font opacity-80 "
              >
                <option
                  className="rounded-lg sec-font text-[var(--sec-color-black)]"
                  selected
                  value="US"
                >
                  United States
                </option>
                <option
                  className="rounded-lg sec-font text-[var(--sec-color-black)]"
                  value="CA"
                >
                  Canada
                </option>
                <option
                  className="rounded-lg sec-font text-[var(--sec-color-black)]"
                  value="FR"
                >
                  France
                </option>
                <option
                  className="rounded-lg sec-font text-[var(--sec-color-black)]"
                  value="DE"
                >
                  Germany
                </option>
              </select>
            </div>
          </div>

        </form>
          <MainButton
            type="submit"
            value="Save Change"
            className=" min-[500px]:w-full md:w-full lg:w-52 p-2"
            onClick={handleSubmit(handelChangeValueUsername)}
          />
      </div>
    </div>
  );
};

export default DashBoardScreen;
