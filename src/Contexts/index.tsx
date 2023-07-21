
import { IProduct } from "@/Types";
import React, { ReactElement, createContext, useState } from "react";

export const store = createContext({
    propsPaint: {
        srcProduct: '',
        countProduct: 1,
        id:0,
        srcAvatar:'',
        nameArt: '',
        nameArtist: '',
        desc: '',
        email:'',
        price:`\${0}`
    },
    setPropsPaint: () => { }
} as unknown as {
    propsPaint: IProduct[];
    setPropsPaint: React.Dispatch<React.SetStateAction<IProduct[]>>
})

export const StoreProvider = ({children} : {children : ReactElement}) => {

    const [props,setProps] = useState<IProduct[]>([])

    const storeValue = {
        propsPaint:props,
        setPropsPaint:setProps,
    }

    return <store.Provider value={storeValue}>{children}</store.Provider>
}