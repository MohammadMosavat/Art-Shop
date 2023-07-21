import { IProduct } from "@/Types";
import { pathPage } from "@/main";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TextInputForm } from "../input/Input";
import useOrder from "./useCartOrder/useOrder";
import { select } from "@material-tailwind/react";
import MainButton from "../MainButton/MainButton";

const CartOrder = (props: IProduct) => {
  const readLocal = () => {
    const getOrder = localStorage.getItem("ProductOrder");
    if (getOrder) {
      const getOrderParse = JSON.parse(getOrder);
      return getOrderParse;
    }
  };

  const localStorageValue = readLocal();
  const [show, setShow] = useState<boolean>(true);
  const [count, setCount] = useState<number | undefined>();
  const [newPrice, setNewPrice] = useState<number>(props.price);
  const parentOrder = useRef(null);
  console.log(show, "ewpibgw");
  console.log("render");
  useEffect(() => {
    readLocal();
    setCount(props.countProduct);
  }, []);

  useEffect(() => {
    if (!show) {
      localStorageValue.forEach((element: IProduct, index: number) => {
        const getNewOrder = readLocal().filter(
          (order: { id: number }) => order.id != props.id
        );
        console.log(getNewOrder);
        const stringify = JSON.stringify(getNewOrder);
        localStorage.setItem("ProductOrder", stringify);
      });
    }
  }, [show]);

  const INCCount = () => {
    if (count && count < 3) {
      setCount(props.countProduct + 1);
      localStorageValue.forEach((product: IProduct, index: number) => {
        if (product.id === props.id) {
          let { price, countProduct, ...rest } = product;
          price = props.price * (count + 1);
          countProduct = count + 1;
          console.log(countProduct, "countProduct");
          setCount(countProduct);
          console.log(count + 1);
          setNewPrice(price);
          const updatedProduct = {
            ...rest,
            price,
            countProduct,
          };

          console.log(updatedProduct);
          localStorageValue.splice(index, 1, updatedProduct);
          console.log(localStorageValue);
          const stringify = JSON.stringify(localStorageValue);
          localStorage.setItem("ProductOrder", stringify);
        }
      });
    }
  };

  const DECCount = () => {
    if (count && count > 1) {
      setCount(props.countProduct - 1);
      localStorageValue.forEach((product: IProduct, index: number) => {
        if (product.id === props.id) {
          let { price, countProduct, ...rest } = product;
          console.log(props.price, newPrice);
          price = newPrice - props.price;
          countProduct = count - 1;
          console.log(countProduct, "countProduct");
          setCount(countProduct);
          console.log(count - 1);
          setNewPrice(price);
          const updatedProduct = {
            ...rest,
            price,
            countProduct,
          };

          console.log(updatedProduct);
          localStorageValue.splice(index, 1, updatedProduct);
          console.log(localStorageValue);
          const stringify = JSON.stringify(localStorageValue);
          localStorage.setItem("ProductOrder", stringify);
        }
      });
    }
  };

  const { register, handelValueInputs, handleSubmit } = useOrder();

  return (
    show && (
      <div
        ref={parentOrder}
        className={` h-fit min-[500px]:flex min-[500px]:flex-col sm:flex-col 
       p-4 gap-7 lg:w-full rounded-lg bg-[var(--sec-color-white)] drop-shadow-sm primary-shadow  md:w-full `}
      >
        <div className="flex items-center sm:gap-8 lg:justify-normal w-full min-[500px]:h-72 sm:h-40 ">
          <picture className="rounded-sm  min-[500px]:w-full h-full sm:w-1/2 md:w-full lg:w-1/6 overflow-hidden ">
            <img
              className="object-cover cursor-default w-full h-full"
              src={props.srcProduct}
              alt=""
            />
          </picture>
          <div className="sm:flex  w-[200px] flex-grow min-[500px]:hidden   flex-col gap-2">
            <h1 className="primary-font font-bold sm:text-2xl md:text-xl">
              {props.nameArt}
            </h1>
            <Link to={`/artistsSelf/${props.id}`}>
              <div className="flex w-fit items-center gap-2">
                <picture className="w-8 h-8 inline-block rounded-full overflow-hidden">
                  <img
                    className="w-full  h-full object-cover"
                    src={props.avatar}
                    alt=""
                  />
                </picture>
                <p className="primary-font text-base">{props.nameArtist}</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-grow items-center gap-2">
            <p
              onClick={DECCount}
              className="primary-font cursor-pointer text-xl font-bold"
            >
              -
            </p>
            <p className="primary-font border-2 border-[--third-color-white] px-2 rounded-lg  font-bold text-xl">
              {count}
            </p>
            <p
              onClick={INCCount}
              className="primary-font cursor-pointer text-xl font-bold"
            >
              +
            </p>
          </div>
          <p className="primary-font flex-grow font-bold text-xl">
            $ {newPrice}
          </p>
          <div
            onClick={() => setShow(false)}
            className="sm:inline-block min-[500px]:hidden"
          >
            <picture className=" overflow-hidden rounded-full inline-block   ">
              <img
                className="opacity-60 object-cover"
                src="/src/assets/svgs/close.svg"
                alt=""
              />
            </picture>
          </div>
        </div>
      </div>
    )
  );
};

export default CartOrder;
