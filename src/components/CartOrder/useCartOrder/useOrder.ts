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

const schemaCount = yup.object({
    count: yup.string(),
  });


const useOrder = () => {
    const {register , handleSubmit , formState: {errors}} = useForm<{count:string}>({
        resolver:yupResolver(schemaCount),
    })
    
    

    const handelValueInputs = useCallback((data : {count:string}) => {
        console.log(data)
        console.log(+data.count + 1)
        
      },[])

      return {
        handelValueInputs,
        register,
        handleSubmit,
        
      }
}

export default useOrder

