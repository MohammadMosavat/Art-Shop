import { date } from 'yup';
import { instance } from "@/api/constants";
import { IUser } from '@/Types';

export const SingleProductService = async ():Promise<IUser>=>{
    const res = await instance.get(`/api/users/2`)
    return res.data.data
} 