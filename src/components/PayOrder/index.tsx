import { IProduct } from "@/Types";
import MainButton from "../MainButton/MainButton";
import { forwardRef, useEffect, useState } from "react";
import { TextInputForm } from "../input/Input";
import SelectInput from "../SelectInput";

const PayOrder = (props: { total: number }) => {
  return (
    <section className="lg:w-[100%] mt-14  h-fit min-[500px]:hidden lg:inline-block ">
      {/* <div className="flex lg:flex-col lg:w-full ">
        <div className="flex justify-between items-center gap-3">
          <p className="primary-font font-bold text-2xl">Toatal</p>
          <p className="primary-font font-bold text-2xl">${props.total}</p>
        </div>
        <MainButton value="Order" className="w-32 lg:w-full h-10" />
      </div> */}

      <div>
        <h1 className="primary-font mb-14 text-5xl">Payment Details</h1>
        <div className="w-full   drop-shadow-sm primary-shadow ">
          <div className="flex rounded-tl-lg  bg-opacity-5 rounded-bl-lg bg-[var(--sec-color-white)]">
            <form action="" className="w-1/2 flex flex-col gap-4  p-8">
              <TextInputForm
                labelvalue="Email"
                placeholder="example@gmail.com"
                className={"w-full"}
              />
              <TextInputForm
                labelvalue="Name on card"
                placeholder="Ben Stone"
                className={"w-full"}
              />
              <div className="flex w-full gap-4 justify-between ">
                <TextInputForm
                  classnameparent="w-1/2"
                  labelvalue="Card number"
                  placeholder="1234-1234-1234-1234"
                  className={"w-full"}
                />

                <TextInputForm
                  labelvalue="CVV"
                  classnameparent="w-1/2"
                  placeholder="123"
                  className={"w-full"}
                />
              </div>
              <div>
                <SelectInput labelvalue="Select your country" className="w-full text-["/>
              </div>
              <TextInputForm
                labelvalue="Billing address"
                placeholder="...Street"
                className="w-full"
              />
            <MainButton value="Complete payment" className="w-full py-3"/>
            </form>
            <div className="w-1/2 rounded-tr-md rounded-br-md bg-pay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayOrder;
