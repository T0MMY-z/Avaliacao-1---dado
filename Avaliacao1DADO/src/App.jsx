import { useEffect, useState } from 'react'
import './App.css'
import { FaDiceOne } from "react-icons/fa";
import { FaDiceTwo } from "react-icons/fa";
import { FaDiceThree } from "react-icons/fa";
import { FaDiceFour } from "react-icons/fa";
import { FaDiceFive } from "react-icons/fa";
import { FaDiceSix } from "react-icons/fa";
import Cabecalho from './components/Cabecalho';

function App() {

  const [emojis, setEmojis] = useState([<FaDiceOne />, <FaDiceTwo />, <FaDiceThree />, <FaDiceFour />, <FaDiceFive />, <FaDiceSix /> ])

  function sortearEmoji(){
    if(emojis.length > 0){
      let i = Math.floor(Math.random() * emojis.length)
      setEmoji(emojis[i])
    }

  }

  const [emoji, setEmoji] = useState("🎲")

  useEffect( () => {

   sortearEmoji()
  }, [])


  return (
    
    <div className='container-app'>
      {/* <Cabecalho /> */}
       
      <p className='emoji' onClick={sortearEmoji}>{emoji}</p>
      
        

    </div>
  )
}

export default App
