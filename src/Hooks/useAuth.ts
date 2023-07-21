import { instance } from "@/api/constants"
import Cookies from "js-cookie"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"

const useAuth = () => {

    const navigate = useNavigate()
    const {pathname} = useLocation()
    useEffect(()=>{
        if(!Cookies.get('token')) {
            navigate('/auth/register ')
        }else if(pathname === '/auth/register' || pathname === '/account' || pathname === '/cart'){
            instance.defaults.headers.common.Authorization = Cookies.get('token')
        }
    },[])

    return
}

export default useAuth