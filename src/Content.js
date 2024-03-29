import React, { useRef, useState } from 'react'
import './index.css';
import './content.css'
import { IoCloseCircleOutline } from "react-icons/io5";

const Content = (props) => {
   
    const {items, handlechecked, handledelete, isdata, fetchError , isLoading} = props
   const ani = isdata ? "shake-horizontal" : "" 

  return (
    <div className='listulcontainer container  ' >
      <p className={ani} >{isdata ? "please enter a list!" :""}</p>
      <p>{isLoading? "Please wait while loading...": null}</p>
     {items.length ? 
        <ul className='ulcontainer' >
        {
            items.map((list, index)=> (
                <li key={index} id={`listitem${index+1}`} className='licontainer' >
                <input type="checkbox" id={`item${index+1}`} name={`itemcheckname${index+1}`}   checked={list.checked} onChange={(e)=>handlechecked(e,list.id)} />
                <label htmlFor={`item${index+1}`}  id={`itemlabel${index+1}`} name={`itemname${index+1}`}   className={list.clas}   >{list.item}</label> 
                <IoCloseCircleOutline id={`listdelete${index+1}`}  className='deletebtn' onClick={(e)=>handledelete(e, list.id)}  /> <br />
           


              </li>
            ))
        }
          
      </ul>
     : 
 
       <div>
       
      { items.length>=0 && isLoading ? null : <p>"Your list is empty now.."</p> }
       </div>
       
     
     }
     </div>
  )
}

export default Content
