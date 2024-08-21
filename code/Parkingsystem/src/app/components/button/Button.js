import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
export default function Button({title,padT,padL,textSize,color,bgcolor,event}) {
  const style={
    paddingTop:padT,
    paddingLeft:padL,
    paddingRight:padL,
    paddingBottom:padT,
    fontSize:textSize,
    color:color,
    backgroundColor: bgcolor
}
  return (
    <div>
        <button style={style} onClick={event} className="btn rounded-sm uppercase hover:scale-105 transition-all flex items-center gap-x-1 text-blue-500 ">{title}<IoChevronForwardOutline/></button>
    </div> 
  )
}
