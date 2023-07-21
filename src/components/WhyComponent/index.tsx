interface IWhy {
    title:string;
    srcTitle:string;
    desc:string
}

const WhyComponent = (props:IWhy) => {
  return (
    <div className=" flex flex-col third-shadow drop-shadow bg-[var(--sec-color-white)] p-4 rounded-lg justify-center-center gap-4  lg:mb-0">
            <div className="flex items-center  gap-2">
              <div className=" bg-[var(--primary-color-white)] inline-block rounded-full  p-4 text-primary  sec-shadow">
                <img src={props.srcTitle} alt="" />
              </div>
              <h5 className="text-lg primary-font  font-bold">{props.title}</h5>
            </div>

            <p className=" sec-font text-[var(--third-color-black)]">
              {props.desc}
            </p>
          </div>
  );
};

export default WhyComponent;
