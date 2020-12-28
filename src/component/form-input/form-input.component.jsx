import React from 'react'

import './form-input.styles.scss'
function isShrink  (otherP)  {
    if(otherP.value.length>0){
        return 'shrink'
    } 
      return '';        

}
const FormInput = ({handleChange, label,...otherProps}) => (
    
    
  
    

<div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps}/>
    {
        label ?
        (<label className={isShrink(otherProps)+" form-input-label"}> 
            {label}
         </label>)
        : null
    }
</div>
)

export default FormInput;