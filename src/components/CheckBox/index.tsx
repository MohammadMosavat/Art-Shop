import { useEffect, useState } from 'react';
import './index.css'
interface ICheck  {
    value:string;
    className?:string
    classinput?:string;
    classvalue?:string
}

const CheckBox = (props:ICheck) => {

   
    

    return (

   
      <label {...props} className={`material-checkbox ${props.className}`}>
      <input type="checkbox"/>
      <span className="checkmark"></span>
      {props.value}
    </label>
 
    )
}

export default CheckBox