import { useEffect, useState } from "react";
import useRegister from "../Register/useRegister";
import MainButton from "@/components/MainButton/MainButton";
import CheckBox from "@/components/CheckBox";

const LoginScreen = () => {
  const [showPass, setShowPass] = useState(false);

  const [eyeDisable, setEyeDisable] = useState(false);
  const { handelValueInputs, register, errors, handleSubmit, errorPass } =
    useRegister();

  return (
    <div
      className={`  bg-[var(--primary-color-white)] opacity-95 flex flex-col  sm:w-[60%] md:w-[55%] lg:w-[50%] min-[1180px]:w-[45%]] justify-center gap-7  itmes-center p-9 `}
    >
      <h1 className={`primary-font text-5xl  text-center`}>Login</h1>
      <div className="flex flex-col gap-6">
        <form className="flex flex-col gap-5" action="">
          <div className={`flex flex-col gap-1 items-start `}>
            <label htmlFor="email">
              <p
                className={`${
                  Boolean(errors.email?.message) && errors.email?.message
                }   focus:outline-none primary-font font-semibold `}
              >
                Email
              </p>
            </label>

            <input
              {...register("email")}
              type="email"
              className={`p-2 border-[var(--sec-color-white)] items-start  input text-sm outline-none border-2 sec-font gap-1 sec-font  w-full h-10 sec-shadow rounded-lg `}
              placeholder="example@gmail.com"
              id="email"
            />
          </div>

          <div className={`flex flex-col gap-1 items-start `}>
            <label htmlFor="">
              <p
                className={`${
                  ((Boolean(errors.password?.message) &&
                    !Boolean(errors.email?.message)) ||
                    errorPass) &&
                  errors.password?.message
                }  primary-font font-semibold `}
              >
                Password
              </p>
            </label>

            <div className="flex items-center justify-around border-2 h-10 sec-shadow rounded-lg  w-full border-[var(--sec-color-white)] ">
              <input
                id="password"
                type={showPass ? "text" : "password"}
                {...register("password")}
                className={` items-start  bg-[var(--primary-color-white)] input text-sm outline-none sec-font gap-1 sec-font sec-shadow  w-10/12 `}
                placeholder="Type your password"
              />

              <img
                onClick={() => setShowPass(!showPass)}
                src={
                  showPass
                    ? "/src/assets/svgs/eyeOnBlack.svg"
                    : "/src/assets/svgs/eyeOffBlack.svg"
                }
                alt=""
              />
            </div>
          </div>
        </form>
      </div>

      <section className="w-full flex flex-col justify-end  h-full items-center gap-5">
        <div className="w-10/12 flex flex-col gap-1 items-center">
          <div className="flex justify-center gap-2 w-full">
            <MainButton
              src="/src/assets/svgs/Apple.svg"
              className=" p-2 border-2   flex gap-2 items-center  w-full  "
            />

            <MainButton
              src="/src/assets/svgs/google-icon.svg"
              className=" p-2  flex gap-2 items-center  w-full text-google  border-2  "
            />
          </div>

          <MainButton
            onClick={handleSubmit(handelValueInputs)}
            type="submit"
            value="Login"
            className=" border-2 p-2 w-full  border-[var(--black-color2)]"
          />
        </div>
      </section>
    </div>
  );
};

export default LoginScreen;
