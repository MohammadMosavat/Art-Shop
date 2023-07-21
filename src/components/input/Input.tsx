import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  Ref,
  forwardRef,
  useEffect,
  useState,
} from "react";
import "./index.css";
import MainButton from "../MainButton/MainButton";
import { useForm } from "react-hook-form";
import { ref } from "yup";

interface InputProps extends InputHTMLAttributes<HTMLDivElement> {
  className: string;
  classnameparent?: string;
  classinput?: string;
  srclight?: string;
  srcdark?: string;
  placeholder?: string;
  labelvalue?: string;
  endicon?: boolean;
}

const TextForm: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props: InputProps,
  ref
) => {
  const [type, setType] = useState("");

  useEffect(() => {
    if (props.id === "password") {
      setType("text");
    } else {
      setType("password");
    }
    if (props.id === "text" || "massage") {
      setType("text");
    }
    if (props.id === "email") {
      setType("email");
    }

    if (props.id === "number") {
      setType("number");
    }
  }, []);

  

  return (
    <div
      className={`${props.classnameparent} flex flex-col gap-1 items-start `}
    >
      <label
        className={`${props.labelvalue ? "inline-block" : "hidden"}`}
        htmlFor=""
      >
        <p className={` primary-font font-semibold `}>{props.labelvalue}</p>
      </label>
      <div
        className={`flex input border-[var(--third-color-white)]  focus:border-red-800 items-center bg-[var(--primary-color-white)] px-2 ${
          props.endicon ? "justify-between" : "justify-start"
        } border-2 h-10  sec-shadow rounded-lg  w-full `}
      >
        <input
          ref={ref}
          {...props}
          id={props.id}
          type={type}
          className={`${props.className} bg-[var(--primary-color-white)] items-start  outline-none text-sm focus:outline-none sec-font gap-1 sec-font h-full border-none w-10/12 `}
          placeholder={props.placeholder}
        />
        {
          <img
            className={` w-5 h-[38px] ${
              props.endicon ? "inline-block" : "hidden"
            }`}
            
            src={
                 "/src/assets/svgs/eyeOffBlack.svg"
            }
            alt=""
          />
        }
      </div>
    </div>
  );
};

export const TextInputForm = forwardRef(TextForm);
