interface IStep {
  step: string;
  desc: string;
  srcImage: string;
}

const StepComponent = (props: IStep) => {
  return (
    <div className="flex">
      <div className="mr-4 flex flex-col items-center">
        <div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--primary-color-black)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-6 w-6 text-[var(--primay-color-black)]"
            >
              <path d="M12 5l0 14"></path>
              <path d="M18 13l-6 6"></path>
              <path d="M6 13l6 6"></path>
            </svg>
          </div>
        </div>
        <div className="h-full w-0.5 bg-[var(--primary-color-black)]"></div>
      </div>
      <div className="pt-1 flex flex-col gap-4 pb-8 ">
        <div className="flex flex-col gap-4">
          <p className=" text-xl font-bold primary-font text-[var(--primary-color-black)]">
            {props.step}
          </p>
          <p className="text-[var(--sec-color-black)] w-3/4  text-justify  sec-font">
            {props.desc}
          </p>
        </div>
        <picture className="inline-block w-[560px] h-auto object-cover">
          <img
            className="object-cover rounded-lg h-full w-full "
            src={props.srcImage}
            alt=""
          />
        </picture>
      </div>
    </div>
  );
};

export default StepComponent;
