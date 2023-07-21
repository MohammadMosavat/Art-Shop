import CreateCM from "../Comments/CreateCM";
import MainButton from "../MainButton/MainButton";
import QComponent from "./QComponent";

const FQAComponent = () => {
  return (
    <div className="   mx-auto min-[500px]:px-6 md:px-[105px] ">

        <div className="flex min-[500px]:flex-col lg:flex-row gap-6 w-full ">
          <div className="mb-6 max-h-[480px] flex flex-col gap-6 w-full md:mb-0">
            <div>
              <h2 className="mb-6 font-52 primary-font ">
                Frequently asked questions
              </h2>

              <p className="sec-font">
                Didn't find your answer in the FAQ?
              </p>
            </div>
            <div className="">
              <CreateCM className="lg:w-3/4 sm:w-full" />
            </div>
          </div>

          <div className="flex flex-col gap-4  w-full md:mb-0">
            <QComponent
              title="Anim pariatur cliche reprehenderit?"
              desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt autem numquam dolore molestias aperiam culpa alias veritatis architecto eos, molestiae vitae ex eligendi libero eveniet dolorem, doloremque rem aliquid perferendis."
            />

            <QComponent
              title="Non cupidatat skateboard dolor brunch?"
              desc="Distinctio corporis, iure facere ducimus quos consectetur ipsa ut magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed fugit iusto minus et suscipit? Minima sunt at nulla tenetur, numquam unde quod modi magnam ab deserunt ipsam sint aliquid dolores libero repellendus cupiditate mollitia quidem dolorem odit"
            />

            <QComponent
              title="Praesentium voluptatibus temporibus consequatur non aspernatur?"
              desc="Minima sunt at nulla tenetur, numquam unde quod modi magnam ab deserunt ipsam sint aliquid dolores libero repellendus cupiditate mollitia quidem dolorem."
            />
            
          </div>
        </div>

    </div>
  );
};

export default FQAComponent;
