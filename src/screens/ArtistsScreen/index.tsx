import { IUser } from "@/Types";
import { artistService } from "@/api/servers/artistServers";
import { sculpturesService } from "@/api/servers/sculpturesService";
import Artist from "@/components/Artist";
import Loading from "@/components/Loading";
import { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArtistsScreen = () => {
  const [artist, setArtist] = useState<IUser[]>([]);
  const [sculptures, setSculptures] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    setLoading(true);
    artistService()
      .then((res) => {
        setLoading(false);
        setArtist(res);
      })
      .catch(() => {
        setLoading(true);
      });

    sculpturesService()
      .then((res) => {
        setLoading(false);
        setSculptures(res);
      })
      .catch(() => {
        setLoading(true);
      });
  }, []);

  return (
    <>
      <div className="mt-36">
        <h1 className="  mb-14  ml-[100px]  primary-font font-medium  min-[500px]:text-3xl sm:text-5xl">
          Artists
        </h1>
        <div className="flex sm:flex-col lg:flex-row px-6 flex-wrap justify-center mt-14 gap-7">
          {artist.map((items: IUser) => {
            if (items.id == 6) {
              return;
            }

            return (
              <>
                {loading ? (
                  <div>
                    <Loading />
                  </div>
                ) : (
                  <Artist
                    classNameExtra="lg:w-[45%] sm:w-full"
                    avatar={items.avatar}
                    nameArtist={items.first_name + " " + items.last_name}
                    email={items.email}
                    job={"Painter"}
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias magni quidem fugit repellat, illo in at quibusdam tempora, aspernatur laudantium maxime rerum quasi iure modi perferendis voluptatibus temporibus, quos quae."
                    id={items.id}
                  />
                )}
              </>
            );
          })}

          {sculptures.map((items: IUser) => {
            if (items.id == 6) {
              return;
            }

            return (
              <>
                {loading ? (
                  <div>
                    <Loading />
                  </div>
                ) : (
                  <Artist
                    classNameExtra="lg:w-[45%] sm:w-full"
                    avatar={items.avatar}
                    nameArtist={items.first_name + " " + items.last_name}
                    email={items.email}
                    job={"Sculpturer"}
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias magni quidem fugit repellat, illo in at quibusdam tempora, aspernatur laudantium maxime rerum quasi iure modi perferendis voluptatibus temporibus, quos quae."
                    id={items.id}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ArtistsScreen;
