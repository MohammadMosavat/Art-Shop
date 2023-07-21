import { ButtonHTMLAttributes } from 'react'
import './index.css'

interface propsType extends ButtonHTMLAttributes<HTMLButtonElement>{

}

const BuyButton = (props:propsType) => {

  

    return(
    <button {...props} className='rounded-lg bg-[var(--primary-color-black)] p-1.5'>
        <img src="/src/assets/svgs/cart.svg" alt="" />
    </button>
    )
}

export default BuyButton