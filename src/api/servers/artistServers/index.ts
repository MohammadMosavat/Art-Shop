import { date } from 'yup';
import { instance } from "@/api/constants";
import { IUser } from '@/Types';

export const artistService = async ():Promise<IUser[]>=>{
    const res = await instance.get('/api/users')
   res.data.data.forEach((element:any) => {
   });
    return res.data.data
}