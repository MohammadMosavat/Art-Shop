
import './index.css'
const SearchBar = () => {
   return(

       <div className="relative inline-block container-input">
        <img className="absolute search top-1/2 left-2.5 " src={'/src/assets/svgs/svgSearch.svg' } alt="" />
    <input type="text" placeholder="Search" name="text" className={`sec-font input-search focus:opacity-100 focus:w-48 w-40 p-2 rounded-lg border-2 bg-transparent h-10  border-[var(--primary-color-black)]  outline-none transition-all duration-200 ease-in-out`}/>
  
  </div>

  
   )
}

export default SearchBar