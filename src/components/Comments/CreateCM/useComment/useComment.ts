import { IComment } from "@/Types";
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

const schemaComment = yup.object({
    userMassage: yup.string().required(''),
  });

 
const useComment = () => {
    const {register , handleSubmit } = useForm<IComment>({
        resolver:yupResolver(schemaComment),
    })
    

    const handelCommentValue = useCallback((data : IComment) => {
      if(Cookies.get('token')){
        console.log(data)
        toast.success('Your message has been sent and our team will respond to you')

      }else{
        toast.info('Your Should be Register Fisrt!')
      }
        
      },[])

      return {
        handelCommentValue,
        register,
        handleSubmit
      }
}

export default useComment

