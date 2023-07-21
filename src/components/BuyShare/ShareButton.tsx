import { ButtonHTMLAttributes } from 'react'
import './index.css'


interface propsType extends ButtonHTMLAttributes<HTMLButtonElement>{
className?:string
}

const ShareButton = (props:propsType) => {
    return (
        <button className={`bg-[var(--sec-color-white)] rounded-lg p-1.5 ${props.className}`}>
            <img src="/src/assets/svgs/share.svg" alt="" />
        </button>
    )
}

export default ShareButton