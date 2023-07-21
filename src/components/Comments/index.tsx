import { Rating, avatar } from "@material-tailwind/react";
import StarRating from "../Rating";
import "./index.css";
import RatingComponent from "../Rating";

interface ICommentUser {
  className?: string;
  fullName: string;
  avatar: string;
}

const CommentUsers = (props: ICommentUser) => {
  return (
    <div
      className={`${props.className} primary-shadow min-[500px]:w-full min-[651px]:w-[100%] bg-[var(--sec-color-white)] md:w-[48%]  p-4 rounded-lg card`}
    >
      <div className={`flex items-center min-h-[86px]  gap-4`}>
        <div className={`image w-[100px] h-[86px]`}>
          <img
            className="w-full h-full object-cover  rounded-full"
            src={props.avatar}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center w-full h-full">
          <p className={` text-lg  primary-font leading-7 mt-1 font-semibold `}>
            {props.fullName}
          </p>
          <div className={`stars flex gap-0.5 `}>
            <RatingComponent />
          </div>
        </div>
      </div>

      <p className={`sec-font  overflow-hidden mt-4 `}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        voluptatem alias ut provident sapiente repellendus.
      </p>
    </div>
  );
};

export default CommentUsers;
