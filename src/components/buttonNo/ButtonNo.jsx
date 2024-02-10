import React, { useState } from 'react'
import { setSharedValues } from '../sharedvalues/sharedvalues'



export default function ButtonNo() {
    const [currentPositionA, setCurrentPositionA] = useState(0);
    const [currentPositionB, setCurrentPositionB] = useState(0);
    const [clicks, setClicks] = useState(0);
    const [selNumber, setSelNumber] = useState(0);
    const urlParams = new URLSearchParams(window.location.search);
    const [wordsArray, setWordsArray] = useState(['No', 'Why?', 'Hey!', 'No??', ' Click yess!!', 'WHYYY?', 'BUT I LOVE YOU', "Hey?", "Why :(", "STOPP", 'pls :(', 'just...', 'please...', 'just please...', 'just say yes...', `${urlParams.get('name') != null ? urlParams.get('name')  : 'hey'} please...`, `${urlParams.get('gender') != null ? urlParams.get('gender') : 'hey'}...`, 'pleasee :(', 'ur so mean....', 'STOP CLICKING ON NOOO!!!!', 'I give up..', ':(']);
    const setSizeFunction = (val) =>{
        setSharedValues(val)
    }
    const randomize_place = () =>{
        setCurrentPositionA(Math.floor(Math.random() * (-100,0)));
        setCurrentPositionB(Math.floor(Math.random() * (-100, 0)));
        // console.log(currentPositionA, currentPositionB);
    };
    const executeWhy = () =>{
        if (selNumber >= 21){
            console.log('stop');
        } else{
            setSelNumber(selNumber + 1);
        }
        // console.log(selNumber);
    };
  return (
    <div className='buttonNo'style={{zIndex:"1"}}>
        <button 
        onClick={()=> {
            setSizeFunction(.3)
            randomize_place()
            executeWhy()
        }} 
              style={{ position: "relative", left: `${currentPositionA}px`, top: `${currentPositionB}px`}
        }> {wordsArray[selNumber]} 
        </button>
    </div>
  )
}
