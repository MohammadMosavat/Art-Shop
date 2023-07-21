import React from "react";
import MainButton from "../MainButton/MainButton";
import useContact from "./useContact";
import { TextInputForm } from "../input/Input";

const ContactUs = () => {
  console.log("contact");
  const { handelValueContact, handleSubmit, register } = useContact();
  return (
    <section className="mb-32 mt-24   px-[105px] ">
      <div className="flex min-[1180px]:flex-row w-full sm:flex-col sm:gap-3 sm:items-center  flex-wrap">
        <div className="mb-10 min-[500px]:w-full  min-[1180px]:w-[49%] shrink-0 grow-0 basis-auto md:mb-0 ">
          <h2 className="mb-6 text-5xl primary-font">Contact us</h2>
          <p className="mb-6 sec-font">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            modi accusantium ipsum corporis quia asperiores dolorem nisi
            corrupti eveniet dolores ad maiores repellendus enim autem omnis
            fugiat perspiciatis? Ad, veritatis.
          </p>
          <p className="mb-2 sec-font">New York, 94126, United States</p>
          <p className="mb-2 sec-font">+ 01 234 567 89</p>
          <p className="mb-2 sec-font">info@gmail.com</p>
        </div>
        <div className={`mb-12 bg-[var(--sec-color-white)] rounded-lg w-full shrink-0 grow-0 basis-auto md:mb-0 sm:w-full min-[1180px]:w-1/2 p-4  drop-shadow-md`}
        >
          <form>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <TextInputForm
                className={""}
                {...register("userName")}
                placeholder="Enter your name"
                id="name"
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <TextInputForm
                className={""}
                {...register("userSubject")}
                placeholder="Subject"
                id="subject"
              />
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <TextInputForm
                className={""}
                {...register("userMassage")}
                placeholder="Enter your massage"
                id="massage"
              />
            </div>

            <MainButton
              onClick={handleSubmit(handelValueContact)}
              type="submit"
              value="Send Massage"
              className="w-full h-10"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ContactUs);
