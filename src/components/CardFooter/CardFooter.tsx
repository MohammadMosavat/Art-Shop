import './index.css'

type CardFooterProps = {
    src:string,
    artist:string,
    desc:string
}



const CardFooter = (props:CardFooterProps) => {


   

    
    return(
        <div className='flex border-footer rounded-sm w-footer h-card-footer  gap-6  bg-transparent'>
            <div className='h-[86px] w-[85px]   -mt-1 '>
                <img className='h-full w-full rounded-sm' src={props.src} alt="" />
            </div>
            <div className='flex flex-col justify-center w-9/12'>
                <p className={`primary-font  font-bold text-base`}>{props.artist}</p>
                <p className={`primary-font  opacity-70 text-base italic`}>{props.desc}</p>
            </div>
        </div>
    )
}

export default CardFooter