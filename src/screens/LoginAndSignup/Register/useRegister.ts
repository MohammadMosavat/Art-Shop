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

const schemaSignup = yup.object({
    email: yup.string().required('').email(),
    password: yup.string().required(''),
  });


const useRegister = () => {
    const {register , handleSubmit , formState: {errors}} = useForm<IRegisterData>({
        resolver:yupResolver(schemaSignup),
    })
    
    const [errorPass , setErrorPass] = useState(false)
    const [errorPassCF , setErrorPassCF] = useState(false)
    
    const navigate = useNavigate()
    console.log('here register')

    const handelValueInputs = useCallback((data : IRegisterData) => {
        console.log(data)
        
        if(data.email){
            if(data.passwordCF !== undefined){
               if(data.password == ''){
                setErrorPassCF(false)
                setErrorPass(true)
            }else if(data.passwordCF == ''){
                setErrorPassCF(true)
                setErrorPass(false)
            }else{
                if(data.password == data.passwordCF ){
                    if(data.password.length > 6 || data.passwordCF.length > 6){
                        setErrorPass(false)
                        setErrorPassCF(false)
                        toast.success('Register progress done!')
                        registerService(data).then(res => {
                        navigate('/')
                        Cookies.set('token' , res.data.token ,{
                        expires:2
                      })
                           }).catch(()=>{
                            toast.error('something is wrong!')
                        })
                    }else{
        
                        toast.error('password should be more than 6 characters')
                        setErrorPass(false) 
                    }
                }else{
                    toast.error('your passwords is not matcehd!')
                    setErrorPass(true)
                }
    
               }
    
            }else if(data.passwordCF === undefined){
                    
                    if(data.password.length > 6 ){
                        instance.post('api/register' , data).then(res => {
                        setErrorPass(false)
                        navigate('/')
                        toast.success('Login Progress is Done!')
                        }).catch(()=>{
                            toast.error('something is wrong!')
                        })
                    }else{
                        toast.error('password should be more than 6 characters')
                        setErrorPass(!errorPass) 
                    }
                }else{
                    toast.error('your passwords is empty')
                    setErrorPass(true)
                }
        }
      },[])

      return {
        handelValueInputs,
        register,
        errors,
        handleSubmit,
        errorPass,
        setErrorPass,
        errorPassCF,
        setErrorPassCF
        
      }
}

export default useRegister

