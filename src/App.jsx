import { useState } from 'react';
import cutepandalogo from '../src/assets/panda-bear.gif';
import cutepandalovelogo from '../src/assets/panda-love.gif'
import './App.css'
import ButtonNo from './components/buttonNo/ButtonNo';
import ButtonYes from './components/buttonYes/ButtonYes';
import { getYesClicked } from './components/sharedvalues/sharedvalues';


function App() {
  const [yesClickeda, setYesClickeda] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  setInterval(()=>{
    setYesClickeda(getYesClicked());
  },0)

  return (
    <>
      <div className="content">
          <div className="pandaimage">
          {
            yesClickeda ? 
              <img src={cutepandalovelogo} alt="panda" /> 
            : 
            
            <img src={cutepandalogo} alt="panda" />
          }
          
          </div>
          <div className="text">
            <h1>
              {yesClickeda ? 
              `Thanks! Love you  ${urlParams.get('name') != null ? urlParams.get('name') : 'darling' } <3` : 
              "Would you be my valentine this year?"
              }
            </h1>
          </div>
        <div className={yesClickeda ? "choice hidden" :  "choice"}>
            <ButtonYes></ButtonYes>
            <ButtonNo></ButtonNo>
          </div>
      </div>
    </>
  )
}

export default App
