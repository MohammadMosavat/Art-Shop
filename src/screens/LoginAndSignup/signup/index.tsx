import { IRegisterData } from "@/Types";
import MainButton from "@/components/MainButton/MainButton";
import { TextInputForm } from "@/components/input/Input";
import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
} from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useRegister from "../Register/useRegister";
const SignUpScreen = () => {
  const { handleSubmit, handelValueInputs, register } = useRegister();

  return (
    <div className={` flex flex-col h-full w-full justify-center gap-7   opacity-95 itmes-center `} >
      <h1 className={`primary-font text-5xl  text-center`}>Sign Up</h1>

      <form className="flex flex-col gap-4" action="">
        <TextInputForm
          endicon={false}
          id="email"
          labelvalue="Email"
          {...register("email")}
          className={"bg-[var(--primary-color-white)]"}
          placeholder="example@gmail.com"
        />
        <TextInputForm
          id="password"
          endicon={true}
          labelvalue="Password"
          {...register("password")}
          className={"bg-[var(--primary-color-white)]"}
          placeholder="enter password"
        />
        <TextInputForm
          id="password"
          endicon={true}
          labelvalue="Configer Password"
          {...register("passwordCF")}
          className={"bg-[var(--primary-color-white)]"}
          placeholder="enter password again"
        />
      </form>

      <section className="w-full flex flex-col justify-end  h-full items-center gap-5">
        <div className="min-[500px]:w-full flex flex-col gap-1 items-center">
          <div className="flex justify-center gap-2 w-full">
            <MainButton
              src="/src/assets/svgs/Apple.svg"
              className=" p-2  flex gap-2 items-center  w-full  "
            />

            <MainButton
              src="/src/assets/svgs/google-icon.svg"
              className=" p-2  flex gap-2 items-center  w-full   "
            />
          </div>
          <MainButton
            onClick={handleSubmit(handelValueInputs)}
            type="submit"
            value="Sign Up"
            className="text-[var(--primary-color-black)] border-2 p-2 w-full   "
          />
        </div>
      </section>
    </div>
  );
};

export default SignUpScreen;
