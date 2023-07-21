import { ButtonHTMLAttributes, ReactElement } from 'react'
import './index.css'


interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    value?:string;
    className?:string;
    src?:string;
    classNameImg?:string;
}

interface IButtonChild  {
  children:ReactElement
}

const MainButton = (props:IButton) => {

  

  return (

    <>
    {/* <button {...props} className={`grow_skew_forward button ${storedData === 'Dark' ? 'hover:bg-transparent text-black bg-zinc-100 border-zinc-100 after:bg-[var(--bg-color-dark)]  hover:text-[var(--white-color2)]' : 'border-[var(--black-color2)] text-zinc-100 bg-[var(--black-color2)] after:bg-[var(--white-color)]  hover:text-[var(--black-color2)]'} transition-all duration-500 ease-in-out ${props.className} rounded-lg primary-font flex gap-1 justify-center items-center font-semibold`}>
      {props.src &&
      <img className={props.classNameImg} src={props.src} alt="" />
      }
      {props.value}
      </button> */}


         <button {...props} className={` flex justify-center border-2 border-[var(--primary-color-black)] items-center ${props.className} rounded-lg transition-all border-2 duration-300 border-opacity-80 cursor-pointer text-base font-bold primary-font hover:bg-[var(--primary-color-black)] hover:text-[var(--primary-color-white)]  `}>
            {props.value}
           {props.src &&
           <img className={props.classNameImg} src={props.src} alt="" />
            }
</button>
    </>
  ) 
} 

export default MainButton