import React, { useContext } from 'react'
import { moviesList } from '../data'
import Radiocomponents from './Radiocomponents' 
import '../Css/selectMovie.css'; 
import BsContext from '../Context/BScontext';


const SelectMovie=()=>{
  const context=useContext(BsContext)
  const{movie,changeMovie}=context
  const handleChangeMovie=(val)=>{
    changeMovie(val)
    window.localStorage.setItem("movie",val)
  }
  return (
    <>
    <h1 className='SM_Heading'>Select A movie :-</h1>
    <div className='SM_main_container'>


      {moviesList.map((el,index) =>  {
        return(
            <Radiocomponents text={el} key={index} data={movie} changeSelection={handleChangeMovie} />
        )
      })}
    </div>
    </>
  )
}

export default SelectMovie
