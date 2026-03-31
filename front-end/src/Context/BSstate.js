import BsContext from "./BScontext";
import React, { useState } from 'react'
const BsState=(props)=>{
    const[movie,changeMovie]=useState('')
    return(
        <BsContext.Provider value={{movie,changeMovie}}>{props.children}</BsContext.Provider>
    )
}
export default BsState;