import { IDash } from "@/Types";


const DashComponent = (props:IDash) => {
  return (
    <li className="">
      <div className="flex items-center gap-2 text-[var(--sec-color-black)]  p-2 rounded-md font-medium hover:bg-[var(--sec-color-white)]  focus:bg-[var(--sec-color-white)] focus:shadow-outline"
      >
        <span className="">
          <picture className="w-6 h-6">
            <img
              className="h-full w-full"
              src={props.src}
              alt=""
            />
          </picture>
        </span>
        <span className="sec-font text-[var(--primary-color-black)]">
          {props.title}
        </span>
      </div>
    </li>
  );
};

export default DashComponent;
