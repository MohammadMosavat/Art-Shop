import { IRegisterData } from "@/Types";
import { useCallback, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { instance } from "@/api/constants";
import { Navigate, useNavigate } from "react-router";
import Cookies from "js-cookie";
import { registerService } from "@/api/servers/registerServers";
import { toast } from "react-toastify";

const schemaChange = yup.object({
    newFirstName: yup.string().required(''),
    newAge:yup.string().required(''),
    newLastName: yup.string().required(''),
    newEmail: yup.string().required('').email(),
  });

  interface IDashboard {
    newLastName:string;
    newAge:number,
    newFirstName:string,
    newEmail:string,
  }

const useDashboard = () => {
    const {register , handleSubmit , formState: {errors}} = useForm<IDashboard>({
        resolver:yupResolver(schemaChange),
    })
    
   
    

    const handelChangeValueUsername = useCallback((data : IDashboard) => {
        console.log(data)
        const myJsonString = JSON.stringify(data);
        localStorage.setItem('newUserInfo' , myJsonString)
        toast.success('New Informations saved , Just should Refresh page')
        location.reload()
        
      },[])

      return {
        
        handelChangeValueUsername,
        register,
        handleSubmit,
      }
}

export default useDashboard

