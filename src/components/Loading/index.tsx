import './index.css'

const Loading = () => {

    const storedData = localStorage.getItem('Theme')

    return(
        <div className={` mt-9 h-[350px] w-[300px]  flex justify-center items-center`}>
            <div className={`lds-ring`}><div></div><div></div><div></div><div></div></div>
            <span className='text-[var(--primary-color-black)] loader'></span>
        </div>
    )
}

export default Loading