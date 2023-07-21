import { IUser } from "@/Types";
import SingleArtistService from "@/api/servers/artistServers/artisetSingleService";
import Artist from "@/components/Artist";
import Loading from "@/components/Loading";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ArtistSelftScreen = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>();
  const [register, setRegister] = useState<boolean>();
  const [artist, setArtist] = useState<IUser>({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
    id: 0,
    job: "",
  });

  useEffect(() => {
    if (Cookies.get("token")) {
      setRegister(true);
    } else {
      setRegister(false);
    }
  }, []);

  console.log(id);

  useEffect(() => {
    setLoading(true);
    SingleArtistService(id || "").then((res) => {
      setLoading(false);
      setArtist(res);
    });
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <Loading />
        </div>
      ) : (
        <div className="px-6 min-[500px]:mt-[4rem] lg:mt-36">
        <Artist email={artist.email} avatar={artist.avatar} classNameExtra={"lg:w-[90%]  mx-auto my-0"} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias magni quidem fugit repellat, illo in at quibusdam tempora, aspernatur laudantium maxime rerum quasi iure modi perferendis voluptatibus temporibus, quos quae.'} nameArtist={artist.first_name + ' ' + artist.last_name} />
        </div>
      )}
    </div>
  );
};
export default ArtistSelftScreen;
