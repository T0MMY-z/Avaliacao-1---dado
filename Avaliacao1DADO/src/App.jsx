import { useEffect, useState } from 'react';
import './App.css';
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";
import Cabecalho from './components/Cabecalho';

  function App() {
     const [dadoSelecionado, setDadoSelecionado] = useState("D6"); 
     const [resultado, setResultado] = useState({ numero: 1, icone: <FaDiceOne /> }); 

  function sortearNumero(max) {
     return Math.floor(Math.random() * max) + 1;
  }

  function rolarDado() {
      if (dadoSelecionado === "D6") {
        const numeroSorteado = sortearNumero(6);
       const iconeD6 = [
        <FaDiceOne />,
        <FaDiceTwo />,
        <FaDiceThree />,
        <FaDiceFour />,
        <FaDiceFive />,
        <FaDiceSix />,
      ][numeroSorteado - 1]; 
      setResultado({ numero: numeroSorteado, icone: iconeD6 });
    } else if (dadoSelecionado === "D20") {
      const numeroSorteado = sortearNumero(22);
      setResultado({ numero: numeroSorteado, icone: <GiDiceTwentyFacesTwenty /> });
    }
  }

   useEffect(() => {
     rolarDado();
  }, [dadoSelecionado]); 

  return (
    <div className='container-app'>
      <Cabecalho />
      <div className='botoes-container'>
        <button
          className={`botao-dado ${dadoSelecionado === "D6" ? "ativo" : ""}`}
          onClick={() => setDadoSelecionado("D6")}
        >
          D6
        </button>
        <button
          className={`botao-dado ${dadoSelecionado === "D20" ? "ativo" : ""}`}
          onClick={() => setDadoSelecionado("D20")}
        >
          D20
        </button>
      </div>
      <div className='resultado-container' onClick={rolarDado}>
        <div className='icone-dado'>{resultado.icone}</div>
        <div className='numero-sorteado'>{resultado.numero}</div>
      </div>
    </div>
  );
}

export default App;