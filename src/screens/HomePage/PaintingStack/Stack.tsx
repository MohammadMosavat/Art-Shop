import React, { Suspense, useEffect, useState } from "react";
import "./index.css";
import Loading from "@/components/Loading";
import { instance } from "@/api/constants";
import { artistService } from "@/api/servers/artistServers";
import { pathPage } from "@/main";
import SculptureStack from "../SculptureStack";
import { Link } from "react-router-dom";
import { BlackArrow } from "@/assets/svgs";
import FQAComponent from "@/components/FAQ";
import { IProduct, IUser } from "@/Types";
const PaintCard = React.lazy(() => import("@/components/CardPaint/PaintCard"));
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import Artist from "@/components/Artist";
import WhyQuestion from "../Why";

const PaintingStack = () => {
  const [artist, setArtist] = useState<IUser[]>([]);

  useEffect(() => {
    artistService().then((res) => {
      setArtist(res);
    });
  }, []);

  return (
    <>
      <div className="mt-36 ">
        <div className="flex justify-between items-center mb-14 px-[105px]  ">
          <h1 className="min-[500px]:text-3xl text-justify sm:text-5xl primary-font ">
            Featured Paintings
          </h1>
          <Link className="cursor-pointer" to={pathPage.Painting}>
            <BlackArrow />
          </Link>
        </div>
        <div className="flex min-[500px]:flex-wrap min-[1180px]:flex-wrap xl:flex-nowrap gap-3 px-8 justify-center">
          {artist.map((items: IUser) => {
            let srcProduct = "";
            let nameProduct = "";
            if (items.id == 6) {
              return;
            } else {
              if (items.id == 1) {
                nameProduct = "Innocence";
                srcProduct = "/src/assets/svgs/Painting (1).svg";
              }
              if (items.id == 2) {
                nameProduct = "Wallowing Breeze";
                srcProduct = "/src/assets/svgs/Painting.svg";
              }
              if (items.id == 3) {
                nameProduct = "J Resistance";
                srcProduct = "/src/assets/svgs/Painting 2.svg";
              }
              if (items.id == 4) {
                nameProduct = "Warm Basket";
                srcProduct = "/src/assets/svgs/Painting (2).svg";
              }
              if (items.id == 5) {
                nameProduct = "The Vonnegut";
                srcProduct = "/src/assets/svgs/von.svg";
              }
            }

            return (
              <Suspense fallback={<Loading />} key={items.id}>
                <PaintCard
                  price={620}
                  id={items.id}
                  srcProduct={srcProduct}
                  avatar={items.avatar}
                  nameArt={nameProduct}
                  nameArtist={items.first_name + " " + items.last_name}
                  email={items.email}
                  desc="Oil on canvas, 2020"
                  age={0}
                  first_name={""}
                  last_name={""}
                />
              </Suspense>
            );
          })}
        </div>
      </div>

      <SculptureStack />

      <div className="mt-36">
        <FQAComponent />
      </div>
      <WhyQuestion />
      <div>
        <div className="flex justify-between items-center mb-6  px-[105px] ">
          <h1 className="font-52 transition-all duration-500 ease-in-out primary-font ">
            Featured Artists
          </h1>
          <Link className="cursor-pointer" to={pathPage.artists}>
            <BlackArrow />
          </Link>
        </div>
        <div>
          <Splide aria-label="My Favorite Images">
            <SplideSlide className="flex justify-center">
              <Artist
                classNameExtra="w-[89%]  h-full"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias magni quidem fugit repellat, illo in at quibusdam tempora, aspernatur laudantium maxime rerum quasi iure modi perferendis voluptatibus temporibus, quos quae."
                avatar={"/src/assets/svgs/Rectangle.svg"}
                nameArtist={"Mike Lambert , Texas"}
                job={"Painter"}
                email={""}
              />
            </SplideSlide>
            <SplideSlide className="flex justify-center">
              <Artist
                classNameExtra="w-[89%] h-full"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias magni quidem fugit repellat, illo in at quibusdam tempora, aspernatur laudantium maxime rerum quasi iure modi perferendis voluptatibus temporibus, quos quae."
                avatar={"/src/assets/svgs/Footer.svg"}
                nameArtist={"Eugenia Cohen , Amsterdam"}
                job={"Painter"}
                email={""}
              />
            </SplideSlide>
            <SplideSlide className="flex justify-center  h-[300px]">
              <Artist
                classNameExtra="w-[89%] h-full"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias magni quidem fugit repellat, illo in at quibusdam tempora, aspernatur laudantium maxime rerum quasi iure modi perferendis voluptatibus temporibus, quos quae."
                avatar={"/src/assets/svgs/Rectangle (3).svg"}
                nameArtist={"Jenny Hubbard , California"}
                job={"Painter"}
                email={""}
              />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  );
};

export default PaintingStack;
