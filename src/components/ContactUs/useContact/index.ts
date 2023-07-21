import { IContact, IRegisterData } from "@/Types";
import { useCallback, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { toast } from "react-toastify";


const schemaContact = yup.object({
    userName: yup.string().required(''),
    userSubject: yup.string().required(''),
    userMassage: yup.string().required(''),
  });


const useContact = () => {
    const {register , handleSubmit} = useForm<IContact>({
        resolver:yupResolver(schemaContact),
    })
    
   

    const handelValueContact = useCallback((data : IContact) => {
      if(Cookies.get('token')){
        
            console.log(data)
            toast.success('Your message has been sent and our team will respond to you')
          }else{
            toast.info('Your Should be Register Fisrt!');
          }
      
      },[])

      return {
        handelValueContact,
        register,
        handleSubmit,
        
      }
}

export default useContact

