import { store } from "@/Contexts";
import { pathPage } from "@/main";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ViewRoom = () => {
  const paint = useContext(store);
  console.log(paint.propsPaint);

  return (
    <>
      <img
        className="w-full h-screen -z-10 absolute"
        src="/src/assets/images/Wall-mockup 1.jpg"
        alt=""
      />
      <Link to={pathPage.Product}>
        <div className="w-8 p-1 bg-white h-8">
          <img src="/src/assets/svgs/back-arrow.svg" alt="" />
        </div>
      </Link>

      <div className="flex flex-col sm:max-h-[265px] sm:max-w-[220px] mx-auto my-0 w-72 min-[1180px]:max-h-[390px] items-center gap-3">
        <img
          className="w-full h-full overflow-hidden"
          src={paint.propsPaint[0].srcProduct}
          alt=""
        />
        <div className="flex flex-col items-center ">
          <p className="sec-font text-[var(--primary-color-black)]">6 ft</p>
          <img src="/src/assets/svgs/measure.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default ViewRoom;
