import React, { useState } from 'react'
import { getSharedValues, setYesClicked } from '../sharedvalues/sharedvalues';


export default function ButtonYes() {
  const [transformSize, setTransformSize] = useState(1);
  setInterval(()=>{
    setTransformSize(getSharedValues)
  }, 0);
  const yes = () =>{
    setYesClicked(true);
    console.log('clicked');
  }
  return (
    <>
        <div className='buttonyes'>
            <button style={{transform:`scale(${transformSize})`}} onClick={()=> yes()}>Yes</button>
        </div>
    </>
  )
}
