import WhyComponent from "@/components/WhyComponent";

const WhyQuestion = () => {
  return (
    <div className=" my-24  px-[105px] ">
      <section className="mb-32 flex min-[500px]:flex-col gap-6  lg:flex-row w-full">
        <div className="flex gap-6 flex-col items-start w-full ">
          <h2 className="primary-font text-start sm:text-5xl min-[500px]:text-3xl">
            Why Cultured Kid?
          </h2>
          <p className=" sec-font">
            Minus fuga aliquid vero facere ducimus quos, quisquam nemo?
            Molestias ullam provident vitae error aliquam dolorum temporibus?
            Doloremque, quasi
          </p>
        </div>

        <div className="flex gap-4 w-full  flex-col">
          <WhyComponent
            title="Support 24/7"
            desc=" All the praises that he may give birth to, but here those who are
              in pain. Rejecting the option of less flexibility with the work"
            srcTitle="/src/assets/svgs/support.svg"
          />

          <WhyComponent
            title="Safe and solid"
            desc=" He never flees from us, he forgives pleasures, nor does he scorn
              any of them with hatred, and no one with pain of heart"
            srcTitle="/src/assets/svgs/safe.svg"
          />

          <WhyComponent
            title="Extremely fast"
            desc=" For by desire, less pain, and by right, it will happen to do any
              happy pleasures here by the exercise of pains."
            srcTitle="/src/assets/svgs/truck.svg"
          />

          <WhyComponent
            title="Live analytics"
            desc=" This pain and that pain, but the pain of the present labors are
              the most important, will be followed, and the very thing will be
              obtained"
            srcTitle="/src/assets/svgs/analytics.svg"
          />
        </div>
      </section>
    </div>
  );
};

export default WhyQuestion;
