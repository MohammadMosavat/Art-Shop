import { date } from 'yup';
import { instance } from "@/api/constants";
import { IUser } from '@/Types';

export const sculpturesService = async ():Promise<IUser[]>=>{
    const res = await instance.get('/api/users?page=2')
    return res.data.data
}