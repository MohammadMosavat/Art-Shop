import PaintCard from "@/components/CardPaint/PaintCard";
import Loading from "@/components/Loading";
import { Suspense, useEffect, useState } from "react";
import "./index.css";
import { artistService } from "@/api/servers/artistServers";
import { IUser } from "@/Types";
import StepperComponet from "@/components/Stepper";
import { Link } from "react-router-dom";
import { pathPage } from "@/main";
const PaintingScreen = () => {
  const [artist, setArtist] = useState<IUser[]>([]);
  const [lodaing, setLoading] = useState<boolean>();
  useEffect(() => {
    setLoading(true);
    artistService().then((res) => {
      setArtist(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="mt-36 ">
      <h1 className="font-52 transition-all duration-500 mb-14 mx-[105px] ease-in-out primary-font ">
        Featured Paintings
      </h1>
      <div className="flex min-[500px]:flex-wrap min-[1180px]:flex-wrap  xl:flex-nowrap gap-3 mb-14 px-8 justify-center">
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
            <Suspense fallback={<Loading />}>
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
                countProduct={1}
                first_name={""}
                last_name={""}
              />
            </Suspense>
          );
        })}
      </div>
      <div className="flex mx-[105px] flex-col gap-7">
        <StepperComponet />
        <Link to={pathPage.Drawing}>
          <p className="sec-font cursor-pointer  text-lg">
            For more information of learning painting and drawing{" "}
            <mark className="bg-transparent primary-font font-semibold hover:underline">
              click here
            </mark>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PaintingScreen;
