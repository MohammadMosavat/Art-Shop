// Initialization for ES Users

import { Stepper, initTE } from "tw-elements";
import StepComponent from "./Step";

initTE({ Stepper });

const StepperComponet = () => {
  return (
    <div className=" flex flex-col gap-7">
      <div className=" mb-8">
        <h1 className="primary-font min-[500px]:leading-[4rem] text-5xl  ">
          How to learn painting for beginners
        </h1>
        <p className="sec-font text-[var(--sec-color-black)] min-[500px]:text-base sm:text-lg mt-2 text-justify">
          Learning painting step by step can be a fun and rewarding process.
        </p>
      </div>

      <div className="w-full min-[500px]:mx-0  sm:mx-12">
        <StepComponent
          step="Step 1"
          srcImage="/src/assets/images/materials painting.jpg"
          desc=" Before you can start painting, you need to learn the basics of drawing. You can start by practicing lines, shapes, and shading. You can also learn about color theory, composition, and perspective."
        />

        <StepComponent
          step="Step 2"
          srcImage="/src/assets/images/Purpose.jpg"
          desc="Decide what you want to paint. It could be a still life, landscape, portrait, or anything else that inspires you."
        />

        <StepComponent
          step="Step 3"
          srcImage="/src/assets/images/pencil-drawing.jpg"
          desc="Use a pencil to sketch the basic outline of your subject on your canvas or paper. This will help you get a sense of the composition and proportions of your painting."
        />

        <StepComponent
          step="Step 4"
          srcImage="/src/assets/images/blocking-painting.jpg"
          desc="Start painting by blocking in the basic shapes and colors of your subject. This will give you a rough idea of the overall structure and color scheme of your painting. The purpose of the blocking in stage is to cover the canvas, so none of the white from your gesso ground shows through. This technique can be used as an aid for the painter, so that the colours and tones that are established whilst blocking in can be used as a guide for consecutive paint layers."
        />

        <StepComponent
          step="Step 5"
          srcImage="/src/assets/images/type-painting.jpg"
          desc="Once you have the basic shapes and colors down, you can start refining your painting by adding more detail, shading, and texture. This is where your painting will really start to come to life."
        />

        <StepComponent
          step="Step 6"
          srcImage="/src/assets/images/look-at-painting canvas.jpg"
          desc="Periodically step back from your painting to evaluate your progress. This will help you identify areas that need more work and make adjustments as needed."
        />

        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--primary-color-black)] bg-[var(--primary-color-black)]">
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
                  className="h-6 w-6 text-white "
                >
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="pt-1 ">
            <p className="mb-2 text-xl primary-font font-bold text-[var(--primary-color-black)] ">
              Good Luck!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepperComponet;
