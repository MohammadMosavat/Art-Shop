import { IRegisterData } from "@/Types";
import { instance } from "@/api/constants";

export const registerService = (data:IRegisterData) =>  instance.post('/api/register', data)