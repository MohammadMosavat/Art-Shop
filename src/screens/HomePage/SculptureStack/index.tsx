import CardPaint from "@/components/CardPaint/PaintCard";
import "./index.css";
import { Suspense, useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { Link } from "react-router-dom";
import { pathPage } from "@/main";
import { BlackArrow } from "@/assets/svgs";
import { sculpturesService } from "@/api/servers/sculpturesService";
import { IUser } from "@/Types";

const SculptureStack = () => {
  const [sculptures, setSculptures] = useState<IUser[]>([]);

  useEffect(() => {
    sculpturesService().then((res) => {
      setSculptures(res);
    });
  }, []);

  return (
    <div className="">
      <div className="flex mb-14 justify-between items-center px-[105px]  ">
        <h1 className="min-[500px]:text-3xl sm:text-5xl text-justify primary-font ">
          Featured Sculpture
        </h1>
        <Link className="cursor-pointer" to={pathPage.Sculpture}>
          <BlackArrow />
        </Link>
      </div>
      <div>
        <div className="flex min-[500px]:flex-wrap min-[1180px]:flex-wrap  xl:flex-nowrap gap-3 px-8 justify-center">
          {sculptures.map((items) => {
            let srcProduct = "";
            let nameArt = "";
            let desc = "";
            if (items.id == 12) {
              return;
            } else {
              if (items.id == 7) {
                nameArt = "Edge Venus Bust";
                desc = "Stone , 2020";
                srcProduct =
                  "/src/assets/images/Sculptures/Enesco Edge Venus Bust - Macy's.jpg";
              }
              if (items.id == 8) {
                nameArt = "Yoga Gift";
                desc = "Stone , 2019";
                srcProduct =
                  "/src/assets/images/Sculptures/Decorative Woman Yoga Pose Statue, Yoga Sculpture, Homedecor, Women Yoga Figurine, Yoga Gift, Modern Yoga Statue , Decorative Sculpture.jpg";
              }
              if (items.id == 9) {
                nameArt = "Bust of Discophore";
                desc = "Stone , 2018";
                srcProduct =
                  "/src/assets/images/Sculptures/Large sculpture _Bust of Discophore_ on black metal support.png";
              }
              if (items.id == 10) {
                nameArt = "Nordic Face";
                desc = "Stone , 2005";
                srcProduct =
                  "/src/assets/images/Sculptures/29068baf-b6f6-4bf9-83c7-1a49c00f7aca.jpg";
              }
              if (items.id == 11) {
                nameArt = "Copper Bronze";
                desc = "Stone , 2022";
                srcProduct =
                  "/src/assets/images/Sculptures/564_0US $ _Arts Crafts Copper Bronze Sculptures Brass Statues Abstract Artwork Home Decor Modern Double Dancer Trophy Gifts LE 06F_gift him_sculpture hammergifts for card players - AliExpress.jpg";
              }
            }
            return (
              <Suspense fallback={<Loading />} key={items.id}>
                <CardPaint
                  avatar={items.avatar}
                  nameArt={nameArt}
                  nameArtist={items.first_name + " " + items.last_name}
                  desc={desc}
                  email={items.email}
                  id={items.id}
                  srcProduct={srcProduct}
                  price={199}
                />
              </Suspense>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SculptureStack;
