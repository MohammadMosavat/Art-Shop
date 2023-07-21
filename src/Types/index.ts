import { ReactElement } from "react"

export type RouteType = {
    element:ReactElement,
    path:string
}


// export type PaintCartSrc = {
//     src:string,
//     srcAvatar?:string;
//     id?:number | string
//     art:string,
//     artist:string,
//     desc:string,
//     className?:string,
//     email:string,
//     price:number,
//     extraInfo?:string
// }

export type IRegisterData =  {
    username?:string,
    email:string,
    password:string,
    passwordCF?:string | undefined,
}



export interface IUser {
    id?:number | string | undefined;
    email:string;
    first_name?:string;
    last_name?:string;
    avatar:string;
    job?:string
}

export type IProduct = IUser & {
    countProduct:number
    age?: number;
    nameArt:string;
    nameArtist:string;
    desc: string;
    srcProduct:string
    price:number
    extraInfo?:string;
}

export interface IComment {
    userMassage: string
}

export interface IContact {
    userName:string;
    userSubject:string;
    userMassage:string
}


export interface IDash {
    src:string,
    title:string
}
