import React from 'react'
import '../Css/radiocomponents.css'


const Radiocomponents = ({text,changeSelection,data}) => {
  const handleChecked=(val)=>{
    changeSelection(val)
  }
  return (
    <div>
        <div  name ={text}className='form-check-label' onClick={()=>{handleChecked(text)}}></div>
        
      <span className='text'>{text}</span>
    </div>
  )
}

export default Radiocomponents;
