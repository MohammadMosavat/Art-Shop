import './index.css'
import CardFooter from "@/components/CardFooter/CardFooter"
import MainButton from "@/components/MainButton/MainButton"
import SearchBar from "@/components/SearchBar"
import { pathPage } from "@/main"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { Profiler, useContext, useEffect, useState } from "react"
import Cookies from 'js-cookie'
import { instance } from '@/api/constants'
import ProflieUser from '@/components/ProflieUser'
import FQAComponent from '@/components/FAQ'
import ContactUs from '@/components/ContactUs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from '@/Contexts'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const HomePage = () => {
    const [register , setRegister] = useState<string>('')
    const {pathname} = useLocation()
    
    useEffect(()=>{
        if(Cookies.get('token')) {
            instance.defaults.headers.common.Authorization = Cookies.get('token')
            setRegister('Login')
        }else if(pathname !== '/auth/register' && !Cookies.get('token')){
            setRegister('Sign Up')
        }
    },[])
    

   

    return(
        <>  
        <ToastContainer autoClose={2000} toastClassName={' sec-font'}  position={"bottom-left"}/>
        <Header/>
        <main className='min-[500px]:relative min-[500px]:-z-10 lg:static'><Outlet/></main>
        <ContactUs/>
        <Footer/> 
        </>
    )
}

export default HomePage