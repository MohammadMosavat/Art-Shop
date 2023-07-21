import useAuth from "@/Hooks/useAuth";
import { IProduct } from "@/Types";
import CartOrder from "@/components/CartOrder";
import Loading from "@/components/Loading";
import MainButton from "@/components/MainButton/MainButton";
import PayOrder from "@/components/PayOrder";
import { pathPage } from "@/main";
import { Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const AddToCart = () => {
  useAuth();
  const [data, setData] = useState<IProduct[]>();
  const [order, setOrder] = useState<boolean>();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const getOrder = localStorage.getItem("ProductOrder");
  if (getOrder) {
    const getOrderParse: IProduct[] = JSON.parse(getOrder);
  }
  const readLocal = () => {
    const getOrder = localStorage.getItem("ProductOrder");
    if (getOrder) {
      const getOrderParse = JSON.parse(getOrder);
      return getOrderParse;
    }
  };
useEffect(()=>{

  if (getOrder) {
    const getOrderParse: IProduct[] = JSON.parse(getOrder);
    getOrderParse.length > 0 ? setOrder(true) : setOrder(false);
    setData(getOrderParse);
    let temp = 0;
    for (const key in getOrderParse) {
      temp += getOrderParse[key].price;
    }
    setTotalPrice(temp);
  }
},[])

  return (
    <>
    
      <div className="px-[105px]">
        {order ? (
          <>
            <h1 className="primary-font mt-36 mb-14 sm:font-52 min-[500px]:text-5xl ">
              Cart
            </h1>
            <p className="primary-font font-bold mb-1  text-[var(--primary-color-black)]">
              {data?.length} Items
            </p>
            <div className="flex min-[500px]:flex-col-reverse lg:flex-col gap-6">
              <div className="flex min-[500px]:w-full   gap-4 flex-wrap ">
                {data?.map((items) => {
                  console.log(items.countProduct,'cwegwe')
                return(
                  <Suspense fallback={<Loading />} key={items.id}>
                    <CartOrder
                      email={items.email}
                      avatar={items.avatar}
                      nameArt={items.nameArt}
                      nameArtist={items.nameArtist}
                      id={items.id}
                      desc={""}
                      srcProduct={items.srcProduct}
                      price={items.price}
                      countProduct={items.countProduct}
                    />
                  </Suspense>
                )})}
              </div>
              
              <PayOrder  total={totalPrice} />
            </div>
          </>
        ) : (
          <>
            <main className="mt-36 flex flex-col gap-2 mb-14 ml-[100px] mr-[104px]">
              <h1 className="primary-font text-5xl">You have no orders</h1>
              <p className="sec-font ">
                If you want to order,
                <Link to={pathPage.HomePage}>
                  <mark className="bg-transparent font-semibold primary-font cursor-pointer underline">
                    Click here
                  </mark>
                </Link>
              </p>
            </main>
          </>
        )}
      </div>
    </>
  );
};

export default AddToCart;
