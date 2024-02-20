import './Personalizados.css';
import {  useEffect, useState } from 'react'
function Personalizados() {
  const [tamanhosAcai,setTamanhosAcai] = useState("")


/*Variaveis Complementos*/

  const [contadorleite, setContadorLeite] = useState(0)

  const [contadoramendoim, setContadorAmendoim] = useState(0)

  const [contadorpacoca, setContadoPacoca] = useState(0)

  const[contadorgranola , setContadorGranola] = useState(0)

  const [contadorfarinhaL, setContadoFarinhaL] = useState(0)

  const [contadornescalC, setContadoNescalC] = useState(0)

  const [contadorMM, setContadoMM] = useState(0)

  const [contadorjujuba, setContadoJujuba] = useState(0)

  const [contadorbis, setContadoBis] = useState(0)

  const [contadorchocoboll, setContadoChocoboll] = useState(0)

  const [contadortubin, setContadoTubin] = useState(0)

  const [contadorovomaltine, setContadoOvomaltine] = useState(0)

  const [contadorfini, setContadoFini] = useState(0)

  const [contadormarshmallow, setContadoMarshmallow] = useState(0)

  const [contadorComplementos,setContadorComplementos] = useState(0)

  /*variaveis frutas*/

  const [contadorBanana,setContadorBanana] = useState(0)

  const [contadorMorango,setContadorMorango] = useState(0)

  const [contadorUva,setContadorUva] = useState(0)

  const [contadorKiwi,setContadorKiwi] = useState(0)

  const [contadorFrutas,setContadorFrutas] = useState(0)

  /*variaveis Caldas*/

  const [contadorLeitecond,setContadorLeitecond] = useState(0)

  const [contadorChoco,setContadorChoco] = useState(0)

  const [contadorMorangoCalda,setContadorMorangoCalda] = useState(0)

  const [contadorCaldas,setContadorCaldas] = useState(0)

  /*variaveis Adicionais*/

  const [contadorNutella,setContadorNutella] = useState(0)
  const valorNutella = 2;

  const [contadorKitKat,setContadorKitKat] = useState(0)
  const valorKitKat = 1;

  const [contadorOreo,setContadorOreo] = useState(0)
  const valorOreo = 1;

  const [contadorChocB,setContadorChocB] = useState(0)
  const valorChocB = 1;

  const [contadorDiamantesN,setContadorDiamantesN] = useState(0)
  const valorDiamanteN = 2;

  const [contadorGotasDC,setContadorGotasDC] = useState(0)
  const valorGotasDC = 0.50;


  /*Funcoes complementos*/
   const LeiteQ = () => {
    if(contadorComplementos === 4 || contadorleite === 4){
      setContadorComplementos(contadorComplementos)
      setContadorLeite(contadorleite)
    }
    else{
      setContadorComplementos(contadorComplementos+1)
      setContadorLeite(contadorleite+1)
    }
  }

  const amendoimQ = () => {
    if(contadorComplementos === 4 || contadorleite === 4){
      setContadorComplementos(contadorComplementos)
      setContadorAmendoim(contadoramendoim)
    }
    else{
      setContadorComplementos(contadorComplementos+1)
      setContadorAmendoim(contadoramendoim+1)
    }
  }

  const pacocaQ = () => {
    if(contadorComplementos === 4 || contadorleite === 4){
      setContadorComplementos(contadorComplementos)
      setContadoPacoca(contadorpacoca)
    }
    else{
      setContadorComplementos(contadorComplementos+1)
      setContadoPacoca(contadorpacoca+1)
    }
  }

  const granolaQ = () => {
    if(contadorComplementos === 4 || contadorleite === 4){
      setContadorComplementos(contadorComplementos)
      setContadorGranola(contadorgranola)
    }
    else{
      setContadorComplementos(contadorComplementos+1)
      setContadorGranola(contadorgranola+1)
    }
  }

  const FarinhaQ = () => {
    if(contadorComplementos === 4 || contadorleite === 4){
      setContadorComplementos(contadorComplementos)
      setContadoFarinhaL(contadorfarinhaL)
    }
    else{
      setContadorComplementos(contadorComplementos+1)
      setContadoFarinhaL(contadorfarinhaL+1)
    }
  }

  const nescalQ = () => {
    if(contadorComplementos === 4 || contadorleite === 4){
      setContadorComplementos(contadorComplementos)
      setContadoNescalC(contadornescalC)
    }
    else{
      setContadorComplementos(contadorComplementos+1)
      setContadoNescalC(contadornescalC+1)
    }
  }

  const MMQ = () => {
    if(contadorComplementos === 4 || contadorleite === 4){
      setContadorComplementos(contadorComplementos)
      setContadoMM(contadorMM)
    }
    else{
      setContadorComplementos(contadorComplementos+1)
      setContadoMM(contadorMM+1)
    }
  }

  const jujubaQ = () => {
    if(contadorComplementos === 4 || contadorleite === 4){
      setContadorComplementos(contadorComplementos)
      setContadoJujuba(contadorjujuba)
    }
    else{
      setContadorComplementos(contadorComplementos+1)
      setContadoJujuba(contadorjujuba+1)
    }
  }

  const bisQ = () => {
    if(contadorComplementos === 4 || contadorleite === 4){
      setContadorComplementos(contadorComplementos)
      setContadoBis(contadorbis)
    }
    else{
      setContadorComplementos(contadorComplementos+1)
      setContadoBis(contadorbis+1)
    }
  }

  const chocobollQ = () => {
    if(contadorComplementos === 4 || contadorleite === 4){
      setContadorComplementos(contadorComplementos)
      setContadoChocoboll(contadorchocoboll)
    }
    else{
      setContadorComplementos(contadorComplementos+1)
      setContadoChocoboll(contadorchocoboll+1)
    }
  }

  const tubinQ = () => {
    if(contadorComplementos === 4 || contadorleite === 4){
      setContadorComplementos(contadorComplementos)
      setContadoTubin(contadortubin)
    }
    else{
      setContadorComplementos(contadorComplementos+1)
      setContadoTubin(contadortubin+1)
    }
  }

  const ovomaltineQ = () => {
    if(contadorComplementos === 4 || contadorleite === 4){
      setContadorComplementos(contadorComplementos)
      setContadoOvomaltine(contadorovomaltine)
    }
    else{
      setContadorComplementos(contadorComplementos+1)
      setContadoOvomaltine(contadorovomaltine+1)
    }
  }

  const finiQ = () => {
    if(contadorComplementos === 4 || contadorleite === 4){
      setContadorComplementos(contadorComplementos)
      setContadoFini(contadorfini)
    }
    else{
      setContadorComplementos(contadorComplementos+1)
      setContadoFini(contadorfini+1)
    }
  }

  const marshQ = () => {
    if(contadorComplementos === 4 || contadorleite === 4){
      setContadorComplementos(contadorComplementos)
      setContadoMarshmallow(contadormarshmallow)
    }
    else{
      setContadorComplementos(contadorComplementos+1)
      setContadoMarshmallow(contadormarshmallow+1)
    }
  }
    /*Funcoes das frutas*/

     const bananaQ = () => {
      if(contadorFrutas === 2 || contadorBanana === 2){
        setContadorFrutas(contadorFrutas)
        setContadorBanana(contadorBanana)
      }
      else{
        setContadorFrutas(contadorFrutas+1)
        setContadorBanana(contadorBanana+1)
      }
    }
  
    const morangoQ = () => {
      if(contadorFrutas === 2 || contadorMorango === 2){
        setContadorFrutas(contadorFrutas)
        setContadorMorango(contadorMorango)
      }
      else{
        setContadorFrutas(contadorFrutas+1)
        setContadorMorango(contadorMorango+1)
      }
    }
  
    const uvaQ = () => {
      if(contadorFrutas === 2 || contadorUva === 2){
        setContadorFrutas(contadorFrutas)
        setContadorUva(contadorUva)
      }
      else{
        setContadorFrutas(contadorFrutas+1)
        setContadorUva(contadorUva+1)
      }
    }
  
    const kiwiQ = () => {
      if(contadorFrutas === 2 || contadorUva === 2){
        setContadorFrutas(contadorFrutas)
        setContadorKiwi(contadorKiwi)
      }
      else{
        setContadorFrutas(contadorFrutas+1)
        setContadorKiwi(contadorKiwi+1)
      }
    }

    /*Funcao Calda*/

    const leiteCQ = () => {
      if(contadorCaldas === 2 || contadorLeitecond === 2){
        setContadorCaldas(contadorCaldas)
        setContadorLeitecond(contadorLeitecond)
      }
      else{
        setContadorCaldas(contadorCaldas+1)
        setContadorLeitecond(contadorLeitecond+1)
      }
    }
  
    const chocoQ = () => {
      if(contadorCaldas === 2 || contadorChoco === 2){
        setContadorCaldas(contadorCaldas)
        setContadorChoco(contadorChoco)
      }
      else{
        setContadorCaldas(contadorCaldas+1)
        setContadorChoco(contadorChoco+1)
      }
    }
  
    const morangoCldQ = () => {
      if(contadorCaldas === 2 || contadorMorangoCalda === 2){
        setContadorCaldas(contadorCaldas)
        setContadorMorangoCalda(contadorMorangoCalda)
      }
      else{
        setContadorCaldas(contadorCaldas+1)
        setContadorMorangoCalda(contadorMorangoCalda+1)
      }
    }

  return (
    <div className="personalizados">
      <h1>*Açaí Personalizado</h1>
      <ul className='tamanhosacai'>
        <div className='QTScompltPai'>
        <li className={tamanhosAcai === "300" ? "acai300activo" : "acai300"} onClick={() => setTamanhosAcai("300")}>300ML</li>
        <div onClick={() => setTamanhosAcai("300")} className='QTScomple'>
        <p>R$9,00</p>
        <p>FRUTAS 2</p>
        <p>COMP 3</p>
        <p>CALDAS 1</p>
        </div>
        </div>

        <div className='QTScompltPai'>
        <li className={tamanhosAcai === "500" ? "acai500activo" : "acai500"} onClick={() => setTamanhosAcai("500")}>500ML</li>
        <div onClick={() => setTamanhosAcai("500")} className='QTScomple'>
        <p>R$12,00</p>
        <p>FRUTAS 2</p>
        <p>COMP 4</p>
        <p>CALDAS 2</p>
        </div>
        </div>

        <div className='QTScompltPai'>
        <li className={tamanhosAcai === "700" ? "acai700activo" : "acai700"} onClick={() => setTamanhosAcai("700")}>700ML</li>
        <div onClick={() => setTamanhosAcai("700")} className='QTScomple'>
        <p>R$15,00</p>
        <p>FRUTAS 3</p>
        <p>COMP 5</p>
        <p>CALDAS 2</p>
        </div>
        </div>

        <div className='QTScompltPai'>
        <li className={tamanhosAcai === "gg" ? "acaiggactivo" : "acaigg"} onClick={() => setTamanhosAcai("gg")}>GG</li>
        <div onClick={() => setTamanhosAcai("gg")} className='QTScomple'>
        <p>R$20,00</p>
        <p>FRUTAS 3</p>
        <p>COMP 7</p>
        <p>CALDAS 3</p>
        </div>
        </div>
      </ul>

      <div className='complementos'>
        <h2 className='complementosfilho'>*Complementos : 4 </h2>
      <div className='formComplementos'>

        <div className='Container'>
        <label onClick={LeiteQ}>
        <p>Leite em pó</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadorLeite(contadorleite-1),setContadorComplementos(contadorComplementos-1)]} className={contadorleite === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorleite}</p>

          <div className='CMais' >  <div onClick={() => [setContadorLeite(contadorleite+1),setContadorComplementos(contadorComplementos+1)]} className={contadorComplementos === 4 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>
        

        <div className='Container'>
        <label onClick={amendoimQ}>
        <div className='containerSeletor'></div>
        <p>Amendoim</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadorAmendoim(contadoramendoim-1),setContadorComplementos(contadorComplementos-1)]} className={contadoramendoim === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadoramendoim}</p>

          <div className='CMais' >  <div onClick={() => [setContadorAmendoim(contadoramendoim+1),setContadorComplementos(contadorComplementos+1)]} className={contadorComplementos === 4 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={pacocaQ}>
        <div className='containerSeletor'></div>
        <p>Paçoca</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadoPacoca(contadorpacoca-1),setContadorComplementos(contadorComplementos-1)]} className={contadorpacoca === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorpacoca}</p>

          <div className='CMais' >  <div onClick={() => [setContadoPacoca(contadorpacoca+1),setContadorComplementos(contadorComplementos+1)]} className={contadorComplementos === 4 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={granolaQ}>
        <div className='containerSeletor'></div>
        <p>Granola</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadorGranola(contadorgranola-1),setContadorComplementos(contadorComplementos-1)]} className={contadorgranola === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorgranola}</p>

          <div className='CMais' >  <div onClick={() => [setContadorGranola(contadorgranola+1),setContadorComplementos(contadorComplementos+1)]} className={contadorComplementos === 4 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={FarinhaQ}>
        <div className='containerSeletor'></div>
        <p>Farinha Láctea</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadoFarinhaL(contadorfarinhaL-1),setContadorComplementos(contadorComplementos-1)]} className={contadorfarinhaL === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorfarinhaL}</p>

          <div className='CMais' >  <div onClick={() => [setContadoFarinhaL(contadorfarinhaL+1),setContadorComplementos(contadorComplementos+1)]} className={contadorComplementos === 4 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={nescalQ}>
        <div className='containerSeletor'></div>
        <p>Nescal Cereal</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadoNescalC(contadornescalC-1),setContadorComplementos(contadorComplementos-1)]} className={contadornescalC === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadornescalC}</p>

          <div className='CMais'>  <div onClick={() => [setContadoNescalC(contadornescalC+1),setContadorComplementos(contadorComplementos+1)]} className={contadorComplementos === 4 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={MMQ}>
        <div className='containerSeletor'></div>
        <p>M&M</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadoMM(contadorMM-1),setContadorComplementos(contadorComplementos-1)]} className={contadorMM === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorMM}</p>

          <div className='CMais'>  <div onClick={() => [setContadoMM(contadorMM+1),setContadorComplementos(contadorComplementos+1)]} className={contadorComplementos === 4 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={jujubaQ}>
        <div className='containerSeletor'></div>
        <p>Jujuba</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadoJujuba(contadorjujuba-1),setContadorComplementos(contadorComplementos-1)]} className={contadorjujuba === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorjujuba}</p>

          <div className='CMais' >  <div onClick={() => [setContadoJujuba(contadorjujuba+1),setContadorComplementos(contadorComplementos+1)]} className={contadorComplementos === 4 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={bisQ}>
        <div className='containerSeletor'></div>
        <p>Bis</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadoBis(contadorbis-1),setContadorComplementos(contadorComplementos-1)]} className={contadorbis === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorbis}</p>

          <div className='CMais' >  <div onClick={() => [setContadoBis(contadorbis+1),setContadorComplementos(contadorComplementos+1)]} className={contadorComplementos === 4 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={chocobollQ}>
        <div className='containerSeletor'></div>
        <p>Chocoboll</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadoChocoboll(contadorchocoboll-1),setContadorComplementos(contadorComplementos-1)]} className={contadorchocoboll === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorchocoboll}</p>

          <div className='CMais' >  <div onClick={() => [setContadoChocoboll(contadorchocoboll+1),setContadorComplementos(contadorComplementos+1)]} className={contadorComplementos === 4 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={tubinQ}>
        <div className='containerSeletor'></div>
        <p>Tub-in</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadoTubin(contadortubin-1),setContadorComplementos(contadorComplementos-1)]} className={contadortubin === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadortubin}</p>

          <div className='CMais' >  <div onClick={() => [setContadoTubin(contadortubin+1),setContadorComplementos(contadorComplementos+1)]} className={contadorComplementos === 4 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={ovomaltineQ}>
        <div className='containerSeletor'></div>
        <p>Ovomaltine</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadoOvomaltine(contadorovomaltine-1),setContadorComplementos(contadorComplementos-1)]} className={contadorovomaltine === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorovomaltine}</p>

          <div className='CMais' >  <div onClick={() => [setContadoOvomaltine(contadorovomaltine+1),setContadorComplementos(contadorComplementos+1)]} className={contadorComplementos === 4 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={finiQ}>
        <div className='containerSeletor'></div>
        <p>Fini</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadoFini(contadorfini-1),setContadorComplementos(contadorComplementos-1)]} className={contadorfini === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorfini}</p>

          <div className='CMais' > <div onClick={() => [setContadoFini(contadorfini+1),setContadorComplementos(contadorComplementos+1)]} className={contadorComplementos === 4 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>
        <div className='Container'>
        <label onClick={marshQ}>
        <div className='containerSeletor'></div>
        <p>Marshmallow</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadoMarshmallow(contadormarshmallow-1),setContadorComplementos(contadorComplementos-1)]} className={contadormarshmallow === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadormarshmallow}</p>

          <div className='CMais' ><div onClick={() => [setContadoMarshmallow(contadormarshmallow+1),setContadorComplementos(contadorComplementos+1)]} className={contadorComplementos === 4 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

      </div>
      </div>

      {/*Frutas*/}

      <div className='complementos'>
        <h2 className='complementosfilho'>*Frutas : 2</h2>
        <div className='formComplementos'>

        <div className='Container'>
        <label onClick={bananaQ}>
        <div className='containerSeletor'></div>
        <p>Banana</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadorBanana(contadorBanana-1),setContadorFrutas(contadorFrutas-1)]} className={contadorBanana === 0 || contadorFrutas === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorBanana}</p>

          <div className='CMais' ><div onClick={() => [setContadorBanana(contadorBanana+1),setContadorFrutas(contadorFrutas+1)]} className={contadorFrutas === 2 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={morangoQ}>
        <div className='containerSeletor'></div>
        <p>Morango</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadorMorango(contadorMorango-1),setContadorFrutas(contadorFrutas-1)]} className={contadorMorango === 0 || contadorFrutas === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorMorango}</p>

          <div className='CMais' ><div onClick={() => [setContadorMorango(contadorMorango+1),setContadorFrutas(contadorFrutas+1)]} className={contadorFrutas === 2 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={uvaQ}>
        <div className='containerSeletor'></div>
        <p>Uva</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadorUva(contadorUva-1),setContadorFrutas(contadorFrutas-1)]} className={contadorUva === 0 || contadorFrutas === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorUva}</p>

          <div className='CMais' ><div onClick={() => [setContadorUva(contadorUva+1),setContadorFrutas(contadorFrutas+1)]} className={contadorFrutas === 2 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={kiwiQ}>
        <div className='containerSeletor'></div>
        <p>Kiwi</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadorKiwi(contadorKiwi-1),setContadorFrutas(contadorFrutas-1)]} className={contadorKiwi === 0 || contadorFrutas === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorKiwi}</p>

          <div className='CMais' ><div onClick={() => [setContadorKiwi(contadorKiwi+1),setContadorFrutas(contadorFrutas+1)]} className={contadorFrutas === 2 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

      </div>
      </div>

      {/*caldas*/}

      <div className='complementos'>
        <h2 className='complementosfilho'>*Caldas : 2</h2>
        <div className='formComplementos'>

        <div className='Container'>
        <label onClick={leiteCQ}>
        <div className='containerSeletor'></div>
        <p>Leite Condensado</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadorLeitecond(contadorLeitecond-1),setContadorCaldas(contadorCaldas-1)]} className={contadorLeitecond === 0 || contadorCaldas === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorLeitecond}</p>

          <div className='CMais' ><div onClick={() => [setContadorLeitecond(contadorLeitecond+1),setContadorCaldas(contadorCaldas+1)]} className={contadorCaldas === 2 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={chocoQ}>
        <div className='containerSeletor'></div>
        <p>Chocolate</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadorChoco(contadorChoco-1),setContadorCaldas(contadorCaldas-1)]} className={contadorChoco === 0 || contadorCaldas === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorChoco}</p>

          <div className='CMais' ><div onClick={() => [setContadorChoco(contadorChoco+1),setContadorCaldas(contadorCaldas+1)]} className={contadorCaldas === 2 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={morangoCldQ}>
        <div className='containerSeletor'></div>
        <p>Morango</p>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => [setContadorMorangoCalda(contadorMorangoCalda-1),setContadorCaldas(contadorCaldas-1)]} className={contadorMorangoCalda === 0 || contadorCaldas === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorMorangoCalda}</p>

          <div className='CMais' ><div onClick={() => [setContadorMorangoCalda(contadorMorangoCalda+1),setContadorCaldas(contadorCaldas+1)]} className={contadorCaldas === 2 ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>
          
        </div>
        </div>

        </div>

      </div>
      </div>

       {/*Adicionais*/}

      <div className='complementos'>
        <h2 className='complementosfilho'>*Adicionais*</h2>
        <div className='formComplementos'>

        <div className='Container'>
        <label onClick={() => setContadorNutella(contadorNutella+1)}>
        <div className='containerSeletor'></div>
        <div className='containervalorAd'>
        <p>Nutella</p>
        <p className='valorAD'>  + R$ {valorNutella}.00</p>
        </div>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => setContadorNutella(contadorNutella-1)} className={contadorNutella === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorNutella}</p>

          <div className='CMais' ><div onClick={() => setContadorNutella(contadorNutella+1)} className="CmaisFilhos"> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={() => setContadorKitKat(contadorKitKat+1)}>
        <div className='containerSeletor'></div>
        <div className='containervalorAd'>
        <p>KitKat</p>
        <p className='valorAD'>  + R$ {valorKitKat}.00</p>
        </div>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => setContadorKitKat(contadorKitKat-1)} className={contadorKitKat === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorKitKat}</p>

          <div className='CMais' ><div onClick={() => setContadorKitKat(contadorKitKat+1)} className="CmaisFilhos"> +</div></div>
          
        </div>
        </div>

        </div>
        
        <div className='Container'>
        <label onClick={() => setContadorOreo(contadorOreo+1)}>
        <div className='containerSeletor'></div>
        <div className='containervalorAd'>
        <p>Oreo</p>
        <p className='valorAD'>  + R$ {valorOreo}.00</p>
        </div>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => setContadorOreo(contadorOreo-1)} className={contadorOreo === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorOreo}</p>

          <div className='CMais' ><div onClick={() => setContadorOreo(contadorOreo+1)} className="CmaisFilhos"> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={() => setContadorChocB(contadorChocB+1)}>
        <div className='containerSeletor'></div>
        <div className='containervalorAd'>
        <p>Choc/Branco</p>
        <p className='valorAD'>  + R$ {valorChocB}.00</p>
        </div>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => setContadorChocB(contadorChocB-1)} className={contadorChocB === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorChocB}</p>

          <div className='CMais' ><div onClick={() => setContadorChocB(contadorChocB+1)} className="CmaisFilhos"> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={() => setContadorDiamantesN(contadorDiamantesN+1)}>
        <div className='containerSeletor'></div>
        <div className='containervalorAd'>
        <p>Diamante Negro</p>
        <p className='valorAD'>  + R$ {valorDiamanteN}.00</p>
        </div>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => setContadorDiamantesN(contadorDiamantesN-1)} className={contadorDiamantesN === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorDiamantesN}</p>

          <div className='CMais' ><div onClick={() => setContadorDiamantesN(contadorDiamantesN+1)} className="CmaisFilhos"> +</div></div>
          
        </div>
        </div>

        </div>

        <div className='Container'>
        <label onClick={() => setContadorGotasDC(contadorGotasDC+1)}>
        <div className='containerSeletor'></div>
        <div className='containervalorAd'>
        <p>Gotas de Chocolate
        </p>
        <p className='valorAD'>  + R$ {valorGotasDC}0</p>
        </div>
        </label>
        <div className='ContainerMMPai'>
        <div className='ContainerMMFilho'>
          <div className='ContainerPaiMenos'><div onClick={() => setContadorGotasDC(contadorGotasDC-1)} className={contadorGotasDC === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

          <p>{contadorGotasDC}</p>

          <div className='CMais' ><div onClick={() => setContadorGotasDC(contadorGotasDC+1)} className="CmaisFilhos"> +</div></div>
          
        </div>
        </div>

        </div>

      </div>
      </div>


    </div>
  );
}

export default Personalizados;
