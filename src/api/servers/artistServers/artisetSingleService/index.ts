import { IRegisterData } from './../../../../Types/index';
import { IUser } from "@/Types";
import { instance } from "@/api/constants";

const SingleArtistService = async (id:string | number):Promise<IUser> => {
   const res = await instance.get(`/api/users/${id}`);
   console.log(res, 'voewbo')
   return res.data.data
}

export default SingleArtistService