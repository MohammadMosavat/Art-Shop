import { IComment, IUser } from "@/Types";
import MainButton from "@/components/MainButton/MainButton";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useComment from "./useComment/useComment";
import { SingleProductService } from "@/api/servers/SingleUser";
import { TextInputForm } from "@/components/input/Input";

interface ICreateComment {
  className?: string;
}

const CreateCM = (props: ICreateComment) => {
  const [avatar, setAvatar] = useState<string>();
  const [registering, setRegistering] = useState<Boolean>();
  const [profAvatar, setProfAvatar] = useState<Boolean>(false);

  const { handelCommentValue, register, handleSubmit } = useComment();

  useEffect(() => {
    if (Cookies.get("token")) {
      setRegistering(true);
    } else {
      setRegistering(false);
    }
  }, []);

  useEffect(() => {
    if (Cookies.get("token")) {
      setProfAvatar(true);
    } else {
      setProfAvatar(false);
    }
  }, [profAvatar]);

  useEffect(() => {
    SingleProductService().then((res) => {
      setAvatar(res.avatar);
    });
  }, []);

  return (
    <>
      <div
        className={`p-4 bg-[var(--sec-color-white)] ${props.className} min-[500px]:w-full  rounded-lg  flex items-center gap-4`}
      >
        {profAvatar && (
          <div className=" overflow-hidden w-14 h-10 rounded-full">
            <img
              className="cursor-default w-full h-full "
              src={avatar}
              alt=""
            />
          </div>
        )}

        <TextInputForm
          placeholder="Enter your massage"
          classnameparent="w-full"
          id="massage"
          {...register("userMassage")}
          className={""}
        />

        <MainButton
          onClick={handleSubmit(handelCommentValue)}
          value="Send"
          className="w-28 h-10"
        />
      </div>
    </>
  );
};

export default CreateCM;
