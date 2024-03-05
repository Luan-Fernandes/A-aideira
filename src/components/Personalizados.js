import './Personalizados.css';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Personalizados({envioMsgPers,setEnvioMsgPers,setStepEnvio}) {

  const [tamanhosAcai, setTamanhosAcai] = useState("")
  const [ValorAcai, setValorAcai] = useState(0)
  const history = useNavigate();
  const msgAcai = '**Açai' + ' ' + tamanhosAcai+'*'




  /*Variaveis Complementos*/

  const [contadorleite, setContadorLeite] = useState(0)
  const [msgLeite, setMsgLeite] = useState("")

  const [contadoramendoim, setContadorAmendoim] = useState(0)
  const [msgAmendoim, setMsgAmendoim] = useState("")

  const [contadorpacoca, setContadoPacoca] = useState(0)
  const [msgPacoca, setMsgPacoca] = useState("")

  const [contadorgranola, setContadorGranola] = useState(0)
  const [msgGranola, setMsgGranola] = useState("")

  const [contadorfarinhaL, setContadoFarinhaL] = useState(0)
  const [msgFarinhaL, setMsgFarinhaL] = useState("")

  const [contadornescalC, setContadoNescalC] = useState(0)
  const [msgNescalC, setMsgNescalC] = useState("")

  const [contadorMM, setContadoMM] = useState(0)
  const [msgMM, setMsgMM] = useState("")

  const [contadorjujuba, setContadoJujuba] = useState(0)
  const [msgJujuba, setMsgJujuba] = useState("")

  const [contadorbis, setContadoBis] = useState(0)
  const [msgBis, setMsgBis] = useState("")

  const [contadorchocoboll, setContadoChocoboll] = useState(0)
  const [msgChocoboll, setMsgChocoboll] = useState("")

  const [contadortubin, setContadoTubin] = useState(0)
  const [msgTuTubin, setMsgTuTubin] = useState("")

  const [contadorovomaltine, setContadoOvomaltine] = useState(0)
  const [msgOvomaltine, setMsgOvomaltine] = useState("")

  const [contadorfini, setContadoFini] = useState(0)
  const [msgFini, setMsgFini] = useState("")

  const [contadormarshmallow, setContadoMarshmallow] = useState(0)
  const [msgMarshmallow, setMsgMarshmallow] = useState("")

  const [contadorComplementos, setContadorComplementos] = useState(0)

  /*variaveis frutas*/

  const [contadorBanana, setContadorBanana] = useState(0)
  const [msgBanana, setMsgBanana] = useState("")

  const [contadorMorango, setContadorMorango] = useState(0)
  const [msgMorango, setMsgMorango] = useState("")

  const [contadorUva, setContadorUva] = useState(0)
  const [msgUva, setMsgUva] = useState("")

  const [contadorKiwi, setContadorKiwi] = useState(0)
  const [msgKiwi, setMsgKiwi] = useState("")

  const [contadorFrutas, setContadorFrutas] = useState(0)

  /*variaveis Caldas*/

  const [contadorLeitecond, setContadorLeitecond] = useState(0)
  const [msgLeiteCond, setMsgLeiteCond] = useState("")

  const [contadorChoco, setContadorChoco] = useState(0)
  const [msgChoco, setMsgChoco] = useState("")

  const [contadorMorangoCalda, setContadorMorangoCalda] = useState(0)
  const [msgMorangoCalda, setMsgMorangoCalda] = useState("")

  const [contadorCaldas, setContadorCaldas] = useState(0)

  /*variaveis Adicionais*/

  const [contadorNutella, setContadorNutella] = useState(0)
  const [msgNutella, setMsgNutella] = useState("")
  const valorNutella = 2;

  const [contadorKitKat, setContadorKitKat] = useState(0)
  const [msgKitKat, setMsgKitKat] = useState("")
  const valorKitKat = 1;

  const [contadorOreo, setContadorOreo] = useState(0)
  const [msgOreo, setMsgOreo] = useState("")
  const valorOreo = 1;

  const [contadorChocB, setContadorChocB] = useState(0)
  const [msgChocB, setMsgChocB] = useState("")
  const valorChocB = 1;

  const [contadorDiamantesN, setContadorDiamantesN] = useState(0)
  const [msgDiamanteN, setMsgDiamanteN] = useState("")
  const valorDiamanteN = 2;

  const [contadorGotasDC, setContadorGotasDC] = useState(0)
  const [msgGotasDC, setMsgGotasDC] = useState("")
  const valorGotasDC = 0.50;

  const valorAdicionaisTotal = (valorNutella * contadorNutella) + (valorKitKat * contadorKitKat) + (valorOreo * contadorOreo) + (contadorChocB * valorChocB) + (contadorDiamantesN * valorDiamanteN) + (contadorGotasDC * valorGotasDC)

  const msgPedidoPersonalizado = "**Pedido Personalizado*\n\n" + msgAcai + '\n\n' + '---------------------------------------\n'+"*COMPLEMENTOS*\n\n" + msgLeite + msgAmendoim +
    msgPacoca +
    msgGranola +
    msgFarinhaL +
    msgNescalC +
    msgMM +
    msgJujuba +
    msgBis +
    msgChocoboll +
    msgTuTubin +
    msgOvomaltine +
    msgFini +
    msgMarshmallow + '---------------------------------------\n' + '**FRUTAS*\n\n' + msgBanana + 
    msgMorango +
    msgUva +
    msgKiwi + '---------------------------------------\n' + '**CALDAS*\n\n' + msgLeiteCond +
    msgChoco +
    msgMorangoCalda + '---------------------------------------\n'+ '**ADICIONAIS*\n\n' + msgNutella + 
    msgKitKat +
    msgOreo +
    msgChocB +
    msgDiamanteN +
    msgGotasDC + '---------------------------------------\n' + 'VALOR:' + ' ' + 'R$' + (valorAdicionaisTotal + ValorAcai) + ' ' + "Reais"
    setEnvioMsgPers(msgPedidoPersonalizado)

  /*Quantidades e dados de itens*/

  const [qtdFrutas, setQtdFrutas] = useState(0)
  const [qtdComple, setQtdCompl] = useState(0)
  const [qtdCaldas, setQtdCaldas] = useState(0)

  const valorTotalPerssonalizado = valorAdicionaisTotal + ValorAcai

  const [pedirOutroA, setPedirOutroA] = useState(false);
  const [numWhats, setNumWhats] = useState('');
  const numeroEnvio = '55' + numWhats;
  console.log(numeroEnvio)

  /*Funcoes complementos*/
  const LeiteQ = () => {
    if (contadorComplementos === qtdComple || contadorleite === qtdComple) {
      setContadorComplementos(contadorComplementos)
      setContadorLeite(contadorleite)
    }
    else {
      setContadorComplementos(contadorComplementos + 1)
      setContadorLeite(contadorleite + 1)
    }
  }

  const amendoimQ = () => {
    if (contadorComplementos === qtdComple || contadorleite === qtdComple) {
      setContadorComplementos(contadorComplementos)
      setContadorAmendoim(contadoramendoim)
    }
    else {
      setContadorComplementos(contadorComplementos + 1)
      setContadorAmendoim(contadoramendoim + 1)
    }
  }

  const pacocaQ = () => {
    if (contadorComplementos === qtdComple || contadorleite === qtdComple) {
      setContadorComplementos(contadorComplementos)
      setContadoPacoca(contadorpacoca)
    }
    else {
      setContadorComplementos(contadorComplementos + 1)
      setContadoPacoca(contadorpacoca + 1)
    }
  }

  const granolaQ = () => {
    if (contadorComplementos === qtdComple || contadorleite === qtdComple) {
      setContadorComplementos(contadorComplementos)
      setContadorGranola(contadorgranola)
    }
    else {
      setContadorComplementos(contadorComplementos + 1)
      setContadorGranola(contadorgranola + 1)
    }
  }

  const FarinhaQ = () => {
    if (contadorComplementos === qtdComple || contadorleite === qtdComple) {
      setContadorComplementos(contadorComplementos)
      setContadoFarinhaL(contadorfarinhaL)
    }
    else {
      setContadorComplementos(contadorComplementos + 1)
      setContadoFarinhaL(contadorfarinhaL + 1)
    }
  }

  const nescalQ = () => {
    if (contadorComplementos === qtdComple || contadorleite === qtdComple) {
      setContadorComplementos(contadorComplementos)
      setContadoNescalC(contadornescalC)
    }
    else {
      setContadorComplementos(contadorComplementos + 1)
      setContadoNescalC(contadornescalC + 1)
    }
  }

  const MMQ = () => {
    if (contadorComplementos === qtdComple || contadorleite === qtdComple) {
      setContadorComplementos(contadorComplementos)
      setContadoMM(contadorMM)
    }
    else {
      setContadorComplementos(contadorComplementos + 1)
      setContadoMM(contadorMM + 1)
    }
  }

  const jujubaQ = () => {
    if (contadorComplementos === qtdComple || contadorleite === qtdComple) {
      setContadorComplementos(contadorComplementos)
      setContadoJujuba(contadorjujuba)
    }
    else {
      setContadorComplementos(contadorComplementos + 1)
      setContadoJujuba(contadorjujuba + 1)
    }
  }

  const bisQ = () => {
    if (contadorComplementos === qtdComple || contadorleite === qtdComple) {
      setContadorComplementos(contadorComplementos)
      setContadoBis(contadorbis)
    }
    else {
      setContadorComplementos(contadorComplementos + 1)
      setContadoBis(contadorbis + 1)
    }
  }

  const chocobollQ = () => {
    if (contadorComplementos === qtdComple || contadorleite === qtdComple) {
      setContadorComplementos(contadorComplementos)
      setContadoChocoboll(contadorchocoboll)
    }
    else {
      setContadorComplementos(contadorComplementos + 1)
      setContadoChocoboll(contadorchocoboll + 1)
    }
  }

  const tubinQ = () => {
    if (contadorComplementos === qtdComple || contadorleite === qtdComple) {
      setContadorComplementos(contadorComplementos)
      setContadoTubin(contadortubin)
    }
    else {
      setContadorComplementos(contadorComplementos + 1)
      setContadoTubin(contadortubin + 1)
    }
  }

  const ovomaltineQ = () => {
    if (contadorComplementos === qtdComple || contadorleite === qtdComple) {
      setContadorComplementos(contadorComplementos)
      setContadoOvomaltine(contadorovomaltine)
    }
    else {
      setContadorComplementos(contadorComplementos + 1)
      setContadoOvomaltine(contadorovomaltine + 1)
    }
  }

  const finiQ = () => {
    if (contadorComplementos === qtdComple || contadorleite === qtdComple) {
      setContadorComplementos(contadorComplementos)
      setContadoFini(contadorfini)
    }
    else {
      setContadorComplementos(contadorComplementos + 1)
      setContadoFini(contadorfini + 1)
    }
  }

  const marshQ = () => {
    if (contadorComplementos === qtdComple || contadorleite === qtdComple) {
      setContadorComplementos(contadorComplementos)
      setContadoMarshmallow(contadormarshmallow)
    }
    else {
      setContadorComplementos(contadorComplementos + 1)
      setContadoMarshmallow(contadormarshmallow + 1)
    }
  }
  /*Funcoes das frutas*/

  const bananaQ = () => {
    if (contadorFrutas === qtdFrutas || contadorBanana === qtdFrutas) {
      setContadorFrutas(contadorFrutas)
      setContadorBanana(contadorBanana)
    }
    else {
      setContadorFrutas(contadorFrutas + 1)
      setContadorBanana(contadorBanana + 1)
    }
  }

  const morangoQ = () => {
    if (contadorFrutas === qtdFrutas || contadorMorango === qtdFrutas) {
      setContadorFrutas(contadorFrutas)
      setContadorMorango(contadorMorango)
    }
    else {
      setContadorFrutas(contadorFrutas + 1)
      setContadorMorango(contadorMorango + 1)
    }
  }

  const uvaQ = () => {
    if (contadorFrutas === qtdFrutas || contadorUva === qtdFrutas) {
      setContadorFrutas(contadorFrutas)
      setContadorUva(contadorUva)
    }
    else {
      setContadorFrutas(contadorFrutas + 1)
      setContadorUva(contadorUva + 1)
    }
  }

  const kiwiQ = () => {
    if (contadorFrutas === qtdFrutas || contadorUva === qtdFrutas) {
      setContadorFrutas(contadorFrutas)
      setContadorKiwi(contadorKiwi)
    }
    else {
      setContadorFrutas(contadorFrutas + 1)
      setContadorKiwi(contadorKiwi + 1)
    }
  }

  /*Funcao Calda*/

  const leiteCQ = () => {
    if (contadorCaldas === qtdCaldas || contadorLeitecond === qtdCaldas) {
      setContadorCaldas(contadorCaldas)
      setContadorLeitecond(contadorLeitecond)
    }
    else {
      setContadorCaldas(contadorCaldas + 1)
      setContadorLeitecond(contadorLeitecond + 1)
    }
  }

  const chocoQ = () => {
    if (contadorCaldas === qtdCaldas || contadorChoco === qtdCaldas) {
      setContadorCaldas(contadorCaldas)
      setContadorChoco(contadorChoco)
    }
    else {
      setContadorCaldas(contadorCaldas + 1)
      setContadorChoco(contadorChoco + 1)
    }
  }

  const morangoCldQ = () => {
    if (contadorCaldas === qtdCaldas || contadorMorangoCalda === qtdCaldas) {
      setContadorCaldas(contadorCaldas)
      setContadorMorangoCalda(contadorMorangoCalda)
    }
    else {
      setContadorCaldas(contadorCaldas + 1)
      setContadorMorangoCalda(contadorMorangoCalda + 1)
    }
  }

  const controleDeDados = () => {

    /*Complementos*/
    setContadorLeite(0)
    setContadorAmendoim(0)
    setContadoPacoca(0)
    setContadorGranola(0)
    setContadoFarinhaL(0)
    setContadoNescalC(0)
    setContadoMM(0)
    setContadoJujuba(0)
    setContadoBis(0)
    setContadoChocoboll(0)
    setContadoTubin(0)
    setContadoOvomaltine(0)
    setContadoFini(0)
    setContadoMarshmallow(0)
    setContadorComplementos(0)

    /*Frutas*/
    setContadorBanana(0)
    setContadorMorango(0)
    setContadorUva(0)
    setContadorKiwi(0)
    setContadorFrutas(0)

    /*Caldas*/
    setContadorLeitecond(0)
    setContadorChoco(0)
    setContadorMorangoCalda(0)
    setContadorCaldas(0)

    /*ADICIONAIS*/
    setContadorNutella(0)
    setContadorKitKat(0)
    setContadorOreo(0)
    setContadorChocB(0)
    setContadorDiamantesN(0)
    setContadorGotasDC(0)
  }

  /*Funcao de concatenacao de Strings*/

  /*Funcao dos Complementos*/

  useEffect(() => {

    /*String Leite*/
    if (contadorleite <= 0) {
      setMsgLeite("")
    }
    else {
      setMsgLeite(contadorleite + "X" + " " + "Leite em Pó\n")
    }

    /*String Amendoim*/

    if (contadoramendoim <= 0) {
      setMsgAmendoim("")
    }
    else {
      setMsgAmendoim(contadoramendoim + "X" + " " + "Amendoim\n")
    }

    /*String Pacoca*/

    if (contadorpacoca <= 0) {
      setMsgPacoca("")
    }
    else {
      setMsgPacoca(contadorpacoca + "X" + " " + "Paçoca\n")
    }

    /*String Granola*/

    if (contadorgranola <= 0) {
      setMsgGranola("")
    }
    else {
      setMsgGranola(contadorgranola + "X" + " " + "Granola\n")
    }

    /*String Farinha Láctea */

    if (contadorfarinhaL <= 0) {
      setMsgFarinhaL("")
    }
    else {
      setMsgFarinhaL(contadorfarinhaL + "X" + " " + "Farinha Láctea\n")
    }

    /*String Nescal Cereal */

    if (contadornescalC <= 0) {
      setMsgNescalC("")
    }
    else {
      setMsgNescalC(contadornescalC + "X" + " " + "Nescal Cereal\n")
    }

    /*String M&M */

    if (contadorMM <= 0) {
      setMsgMM("")
    }
    else {
      setMsgMM(contadorMM + "X" + " " + "M&M\n")
    }

    /*String Jujuba */

    if (contadorjujuba <= 0) {
      setMsgJujuba("")
    }
    else {
      setMsgJujuba(contadorjujuba + "X" + " " + "Jujuba\n")
    }

    /*String Bis */

    if (contadorbis <= 0) {
      setMsgBis("")
    }
    else {
      setMsgBis(contadorbis + "X" + " " + "Bis\n")
    }

    /*String Chocoboll */

    if (contadorchocoboll <= 0) {
      setMsgChocoboll("")
    }
    else {
      setMsgChocoboll(contadorchocoboll + "X" + " " + "Chocoboll\n")
    }

    /*String Tub-in */

    if (contadortubin <= 0) {
      setMsgTuTubin("")
    }
    else {
      setMsgTuTubin(contadortubin + "X" + " " + "Tub-in\n")
    }

    /*String OvoMaltine */

    if (contadorovomaltine <= 0) {
      setMsgOvomaltine("")
    }
    else {
      setMsgOvomaltine(contadorovomaltine + "X" + " " + "OvoMaltine\n")
    }

    /*String Fini */

    if (contadorfini <= 0) {
      setMsgFini("")
    }
    else {
      setMsgFini(contadorfini + "X" + " " + "Fini\n")
    }

    /*String Marshmallow */

    if (contadormarshmallow <= 0) {
      setMsgMarshmallow("")
    }
    else {
      setMsgMarshmallow(contadormarshmallow + "X" + " " + "Marshmallow\n")
    }

  }, [contadorleite, msgLeite, contadoramendoim, msgAmendoim, contadorpacoca, msgPacoca, contadorgranola, msgGranola, contadorfarinhaL, msgFarinhaL, contadornescalC, msgNescalC, contadorMM, msgMM, contadorjujuba, msgJujuba, contadorbis, msgBis, contadorchocoboll, msgChocoboll, contadortubin, msgTuTubin, contadorovomaltine, msgOvomaltine, contadorfini, msgFini, contadormarshmallow, msgMarshmallow])

  /*-------------------------------------------------------------------------------*/

  /*Funcao dos Frutas*/

  useEffect(() => {

    /*String Banana*/

    if (contadorBanana <= 0) {
      setMsgBanana("")
    }
    else {
      setMsgBanana(contadorBanana + "X" + " " + "Banana\n")
    }

    /*String Morango */

    if (contadorMorango <= 0) {
      setMsgMorango("")
    }
    else {
      setMsgMorango(contadorMorango + "X" + " " + "Morango\n")
    }

    /*String Uva */

    if (contadorUva <= 0) {
      setMsgUva("")
    }
    else {
      setMsgUva(contadorUva + "X" + " " + "Uva\n")
    }

    /*String Kiwi */

    if (contadorKiwi <= 0) {
      setMsgKiwi("")
    }
    else {
      setMsgKiwi(contadorKiwi + "X" + " " + "Kiwi\n")
    }
  }, [contadorBanana, msgBanana, contadorMorango, msgMorango, contadorUva, msgUva, contadorKiwi, msgKiwi])

  /*-------------------------------------------------------------------------------*/

  /*Funcao dos Caldas*/

  useEffect(() => {

    /*String Leite Condensado*/

    if (contadorLeitecond <= 0) {
      setMsgLeiteCond("")
    }
    else {
      setMsgLeiteCond(contadorLeitecond + "X" + " " + "Leite Condensado\n")
    }

    /*String Chocolate */

    if (contadorChoco <= 0) {
      setMsgChoco("")
    }
    else {
      setMsgChoco(contadorChoco + "X" + " " + "Chocolate\n")
    }

    /*String Morango */

    if (contadorMorangoCalda <= 0) {
      setMsgMorangoCalda("")
    }
    else {
      setMsgMorangoCalda(contadorMorangoCalda + "X" + " " + "Morango\n")
    }

  }, [contadorLeitecond, msgLeiteCond, contadorChoco, msgChoco, contadorMorangoCalda, msgMorangoCalda])

  /*-------------------------------------------------------------------------------*/

  /*Funcao dos Adicionais*/

  useEffect(() => {

    /*String Nutella*/

    if (contadorNutella <= 0) {
      setMsgNutella("")
    }
    else {
      setMsgNutella(contadorNutella + "X" + " " + "Nutella\n")

    }

    /*String KitKat */

    if (contadorKitKat <= 0) {
      setMsgKitKat("")
    }
    else {
      setMsgKitKat(contadorKitKat + "X" + " " + "KitKat\n")

    }

    /*String Oreo */

    if (contadorOreo <= 0) {
      setMsgOreo("")
    }
    else {
      setMsgOreo(contadorOreo + "X" + " " + "Oreo\n")
    }

    /*String Choc/Branco */

    if (contadorChocB <= 0) {
      setMsgChocB("")
    }
    else {
      setMsgChocB(contadorChocB + "X" + " " + "Choc/Branco\n")
    }

    /*String Diamante Negro */

    if (contadorDiamantesN <= 0) {
      setMsgDiamanteN("")
    }
    else {
      setMsgDiamanteN(contadorDiamantesN + "X" + " " + "Diamante Negro\n")
    }

    /*String Gotas de Chocolate */

    if (contadorGotasDC <= 0) {
      setMsgGotasDC("")
    }
    else {
      setMsgGotasDC(contadorGotasDC + "X" + " " + "Gotas de Chocolate\n")
    }

  }, [contadorNutella, msgNutella, contadorKitKat, msgKitKat, contadorOreo, msgOreo, contadorChocB, msgChocB, contadorDiamantesN, msgDiamanteN, contadorGotasDC, msgGotasDC])

  const confirmarPedido = () => {
    if (contadorComplementos === 0 || contadorFrutas === 0 || contadorCaldas === 0) {
      alert("Complete as Quantidades dos itens!!!")
    }
    else {
      setStepEnvio(2)
      history("/dadospedido")
    }
  }

  const pedirOutro = async () => {
    if (numWhats === '' || numWhats.length != 11) {
      alert("Digite Numero do seu WhatsApp!")
    }
    else if (contadorComplementos === 0 || contadorFrutas === 0 || contadorCaldas === 0) {
      alert("Complete as Quantidades dos itens!!!")
    }
    else {
      /*Complementos*/
      setContadorLeite(0)
      setContadorAmendoim(0)
      setContadoPacoca(0)
      setContadorGranola(0)
      setContadoFarinhaL(0)
      setContadoNescalC(0)
      setContadoMM(0)
      setContadoJujuba(0)
      setContadoBis(0)
      setContadoChocoboll(0)
      setContadoTubin(0)
      setContadoOvomaltine(0)
      setContadoFini(0)
      setContadoMarshmallow(0)
      setContadorComplementos(0)

      /*Frutas*/
      setContadorBanana(0)
      setContadorMorango(0)
      setContadorUva(0)
      setContadorKiwi(0)
      setContadorFrutas(0)

      /*Caldas*/
      setContadorLeitecond(0)
      setContadorChoco(0)
      setContadorMorangoCalda(0)
      setContadorCaldas(0)

      /*ADICIONAIS*/
      setContadorNutella(0)
      setContadorKitKat(0)
      setContadorOreo(0)
      setContadorChocB(0)
      setContadorDiamantesN(0)
      setContadorGotasDC(0)

      setPedirOutroA(false)
      setTamanhosAcai("")
      setQtdFrutas(0)
      setQtdCompl(0)
      setQtdCaldas(0)

      const GZAPPY_URL = "https://api.gzappy.com/v1/message/send-message"

      const response = await fetch(GZAPPY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'user_token_id': 'd05b1f8a-2ffd-4189-8987-ae80745bfc29'
        },
        body: JSON.stringify({
          instance_id: 'MR3D1SNFR8KXISR3AUP8FVAK',
          instance_token: 'b0df3c44-8028-4001-8550-7d14229d56d1',
          message: [msgPedidoPersonalizado],
          phone: [numeroEnvio]
        })
      })
      const data = await response.json()

      console.log(data)
      // { msg: 'Messages sent' }

      
    }
  }

  return (
    <div className="personalizados">
      <h1>*Açaí Personalizado</h1>
      <ul className='tamanhosacai'>
        <div className='QTScompltPai'>
          <li className={tamanhosAcai === "300ML" ? "acai300activo" : "acai300"} onClick={() => setTamanhosAcai("300ML")}>300ML</li>
          <div onClick={() => [controleDeDados(), setTamanhosAcai("300ML"), setQtdFrutas(2), setQtdCaldas(1), setQtdCompl(3), setValorAcai(9)]} className='QTScomple'>
            <p>R$9,00</p>
            <p>FRUTAS 2</p>
            <p>COMP 3</p>
            <p>CALDAS 1</p>
          </div>
        </div>

        <div className='QTScompltPai'>
          <li className={tamanhosAcai === "500ML" ? "acai500activo" : "acai500"} onClick={() => setTamanhosAcai("500ML")}>500ML</li>
          <div onClick={() => [setTamanhosAcai("500ML"), controleDeDados(), setTamanhosAcai("500ML"), setQtdFrutas(2), setQtdCaldas(2), setQtdCompl(4), setValorAcai(12)]} className='QTScomple'>
            <p>R$12,00</p>
            <p>FRUTAS 2</p>
            <p>COMP 4</p>
            <p>CALDAS 2</p>
          </div>
        </div>

        <div className='QTScompltPai'>
          <li className={tamanhosAcai === "700ML" ? "acai700activo" : "acai700"} onClick={() => setTamanhosAcai("700ML")}>700ML</li>
          <div onClick={() => [setTamanhosAcai("700ML"), controleDeDados(), setTamanhosAcai("700ML"), setQtdFrutas(3), setQtdCaldas(2), setQtdCompl(5), setValorAcai(15)]} className='QTScomple'>
            <p>R$15,00</p>
            <p>FRUTAS 3</p>
            <p>COMP 5</p>
            <p>CALDAS 2</p>
          </div>
        </div>

        <div className='QTScompltPai'>
          <li className={tamanhosAcai === "GG" ? "acaiggactivo" : "acaigg"} onClick={() => setTamanhosAcai("GG")}>GG</li>
          <div onClick={() => [setTamanhosAcai("GG"), controleDeDados(), setTamanhosAcai("GG"), setQtdFrutas(3), setQtdCaldas(3), setQtdCompl(7), setValorAcai(20)]} className='QTScomple'>
            <p>R$20,00</p>
            <p>FRUTAS 3</p>
            <p>COMP 7</p>
            <p>CALDAS 3</p>
          </div>
        </div>
      </ul>

      <div className='complementos'>
        <h2 className='complementosfilho'>*Complementos : {qtdComple} </h2>
        <div className='formComplementos'>

          <div className='Container'>
            <label onClick={LeiteQ}>
              <p>Leite em pó</p>
            </label>
            <div className='ContainerMMPai'>
              <div className='ContainerMMFilho'>
                <div className='ContainerPaiMenos'><div onClick={() => [setContadorLeite(contadorleite - 1), setContadorComplementos(contadorComplementos - 1)]} className={contadorleite === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorleite}</p>

                <div className='CMais' >  <div onClick={() => [setContadorLeite(contadorleite + 1), setContadorComplementos(contadorComplementos + 1)]} className={contadorComplementos === qtdComple ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadorAmendoim(contadoramendoim - 1), setContadorComplementos(contadorComplementos - 1)]} className={contadoramendoim === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadoramendoim}</p>

                <div className='CMais' >  <div onClick={() => [setContadorAmendoim(contadoramendoim + 1), setContadorComplementos(contadorComplementos + 1)]} className={contadorComplementos === qtdComple ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadoPacoca(contadorpacoca - 1), setContadorComplementos(contadorComplementos - 1)]} className={contadorpacoca === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorpacoca}</p>

                <div className='CMais' >  <div onClick={() => [setContadoPacoca(contadorpacoca + 1), setContadorComplementos(contadorComplementos + 1)]} className={contadorComplementos === qtdComple ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadorGranola(contadorgranola - 1), setContadorComplementos(contadorComplementos - 1)]} className={contadorgranola === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorgranola}</p>

                <div className='CMais' >  <div onClick={() => [setContadorGranola(contadorgranola + 1), setContadorComplementos(contadorComplementos + 1)]} className={contadorComplementos === qtdComple ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadoFarinhaL(contadorfarinhaL - 1), setContadorComplementos(contadorComplementos - 1)]} className={contadorfarinhaL === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorfarinhaL}</p>

                <div className='CMais' >  <div onClick={() => [setContadoFarinhaL(contadorfarinhaL + 1), setContadorComplementos(contadorComplementos + 1)]} className={contadorComplementos === qtdComple ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadoNescalC(contadornescalC - 1), setContadorComplementos(contadorComplementos - 1)]} className={contadornescalC === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadornescalC}</p>

                <div className='CMais'>  <div onClick={() => [setContadoNescalC(contadornescalC + 1), setContadorComplementos(contadorComplementos + 1)]} className={contadorComplementos === qtdComple ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadoMM(contadorMM - 1), setContadorComplementos(contadorComplementos - 1)]} className={contadorMM === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorMM}</p>

                <div className='CMais'>  <div onClick={() => [setContadoMM(contadorMM + 1), setContadorComplementos(contadorComplementos + 1)]} className={contadorComplementos === qtdComple ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadoJujuba(contadorjujuba - 1), setContadorComplementos(contadorComplementos - 1)]} className={contadorjujuba === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorjujuba}</p>

                <div className='CMais' >  <div onClick={() => [setContadoJujuba(contadorjujuba + 1), setContadorComplementos(contadorComplementos + 1)]} className={contadorComplementos === qtdComple ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadoBis(contadorbis - 1), setContadorComplementos(contadorComplementos - 1)]} className={contadorbis === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorbis}</p>

                <div className='CMais' >  <div onClick={() => [setContadoBis(contadorbis + 1), setContadorComplementos(contadorComplementos + 1)]} className={contadorComplementos === qtdComple ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadoChocoboll(contadorchocoboll - 1), setContadorComplementos(contadorComplementos - 1)]} className={contadorchocoboll === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorchocoboll}</p>

                <div className='CMais' >  <div onClick={() => [setContadoChocoboll(contadorchocoboll + 1), setContadorComplementos(contadorComplementos + 1)]} className={contadorComplementos === qtdComple ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadoTubin(contadortubin - 1), setContadorComplementos(contadorComplementos - 1)]} className={contadortubin === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadortubin}</p>

                <div className='CMais' >  <div onClick={() => [setContadoTubin(contadortubin + 1), setContadorComplementos(contadorComplementos + 1)]} className={contadorComplementos === qtdComple ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadoOvomaltine(contadorovomaltine - 1), setContadorComplementos(contadorComplementos - 1)]} className={contadorovomaltine === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorovomaltine}</p>

                <div className='CMais' >  <div onClick={() => [setContadoOvomaltine(contadorovomaltine + 1), setContadorComplementos(contadorComplementos + 1)]} className={contadorComplementos === qtdComple ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadoFini(contadorfini - 1), setContadorComplementos(contadorComplementos - 1)]} className={contadorfini === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorfini}</p>

                <div className='CMais' > <div onClick={() => [setContadoFini(contadorfini + 1), setContadorComplementos(contadorComplementos + 1)]} className={contadorComplementos === qtdComple ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadoMarshmallow(contadormarshmallow - 1), setContadorComplementos(contadorComplementos - 1)]} className={contadormarshmallow === 0 || contadorComplementos === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadormarshmallow}</p>

                <div className='CMais' ><div onClick={() => [setContadoMarshmallow(contadormarshmallow + 1), setContadorComplementos(contadorComplementos + 1)]} className={contadorComplementos === qtdComple ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/*Frutas*/}

      <div className='complementos'>
        <h2 className='complementosfilho'>*Frutas : {qtdFrutas}</h2>
        <div className='formComplementos'>

          <div className='Container'>
            <label onClick={bananaQ}>
              <div className='containerSeletor'></div>
              <p>Banana</p>
            </label>
            <div className='ContainerMMPai'>
              <div className='ContainerMMFilho'>
                <div className='ContainerPaiMenos'><div onClick={() => [setContadorBanana(contadorBanana - 1), setContadorFrutas(contadorFrutas - 1)]} className={contadorBanana === 0 || contadorFrutas === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorBanana}</p>

                <div className='CMais' ><div onClick={() => [setContadorBanana(contadorBanana + 1), setContadorFrutas(contadorFrutas + 1)]} className={contadorFrutas === qtdFrutas ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadorMorango(contadorMorango - 1), setContadorFrutas(contadorFrutas - 1)]} className={contadorMorango === 0 || contadorFrutas === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorMorango}</p>

                <div className='CMais' ><div onClick={() => [setContadorMorango(contadorMorango + 1), setContadorFrutas(contadorFrutas + 1)]} className={contadorFrutas === qtdFrutas ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadorUva(contadorUva - 1), setContadorFrutas(contadorFrutas - 1)]} className={contadorUva === 0 || contadorFrutas === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorUva}</p>

                <div className='CMais' ><div onClick={() => [setContadorUva(contadorUva + 1), setContadorFrutas(contadorFrutas + 1)]} className={contadorFrutas === qtdFrutas ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadorKiwi(contadorKiwi - 1), setContadorFrutas(contadorFrutas - 1)]} className={contadorKiwi === 0 || contadorFrutas === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorKiwi}</p>

                <div className='CMais' ><div onClick={() => [setContadorKiwi(contadorKiwi + 1), setContadorFrutas(contadorFrutas + 1)]} className={contadorFrutas === qtdFrutas ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/*caldas*/}

      <div className='complementos'>
        <h2 className='complementosfilho'>*Caldas : {qtdCaldas}</h2>
        <div className='formComplementos'>

          <div className='Container'>
            <label onClick={leiteCQ}>
              <div className='containerSeletor'></div>
              <p>Leite Condensado</p>
            </label>
            <div className='ContainerMMPai'>
              <div className='ContainerMMFilho'>
                <div className='ContainerPaiMenos'><div onClick={() => [setContadorLeitecond(contadorLeitecond - 1), setContadorCaldas(contadorCaldas - 1)]} className={contadorLeitecond === 0 || contadorCaldas === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorLeitecond}</p>

                <div className='CMais' ><div onClick={() => [setContadorLeitecond(contadorLeitecond + 1), setContadorCaldas(contadorCaldas + 1)]} className={contadorCaldas === qtdCaldas ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadorChoco(contadorChoco - 1), setContadorCaldas(contadorCaldas - 1)]} className={contadorChoco === 0 || contadorCaldas === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorChoco}</p>

                <div className='CMais' ><div onClick={() => [setContadorChoco(contadorChoco + 1), setContadorCaldas(contadorCaldas + 1)]} className={contadorCaldas === qtdCaldas ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
                <div className='ContainerPaiMenos'><div onClick={() => [setContadorMorangoCalda(contadorMorangoCalda - 1), setContadorCaldas(contadorCaldas - 1)]} className={contadorMorangoCalda === 0 || contadorCaldas === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorMorangoCalda}</p>

                <div className='CMais' ><div onClick={() => [setContadorMorangoCalda(contadorMorangoCalda + 1), setContadorCaldas(contadorCaldas + 1)]} className={contadorCaldas === qtdCaldas ? "CmaisFilhosDesact" : "CmaisFilhos"}> +</div></div>

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
            <label onClick={() => setContadorNutella(contadorNutella + 1)}>
              <div className='containerSeletor'></div>
              <div className='containervalorAd'>
                <p>Nutella</p>
                <p className='valorAD'>  + R$ {valorNutella}.00</p>
              </div>
            </label>
            <div className='ContainerMMPai'>
              <div className='ContainerMMFilho'>
                <div className='ContainerPaiMenos'><div onClick={() => setContadorNutella(contadorNutella - 1)} className={contadorNutella === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorNutella}</p>

                <div className='CMais' ><div onClick={() => setContadorNutella(contadorNutella + 1)} className="CmaisFilhos"> +</div></div>

              </div>
            </div>

          </div>

          <div className='Container'>
            <label onClick={() => setContadorKitKat(contadorKitKat + 1)}>
              <div className='containerSeletor'></div>
              <div className='containervalorAd'>
                <p>KitKat</p>
                <p className='valorAD'>  + R$ {valorKitKat}.00</p>
              </div>
            </label>
            <div className='ContainerMMPai'>
              <div className='ContainerMMFilho'>
                <div className='ContainerPaiMenos'><div onClick={() => setContadorKitKat(contadorKitKat - 1)} className={contadorKitKat === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorKitKat}</p>

                <div className='CMais' ><div onClick={() => setContadorKitKat(contadorKitKat + 1)} className="CmaisFilhos"> +</div></div>

              </div>
            </div>

          </div>

          <div className='Container'>
            <label onClick={() => setContadorOreo(contadorOreo + 1)}>
              <div className='containerSeletor'></div>
              <div className='containervalorAd'>
                <p>Oreo</p>
                <p className='valorAD'>  + R$ {valorOreo}.00</p>
              </div>
            </label>
            <div className='ContainerMMPai'>
              <div className='ContainerMMFilho'>
                <div className='ContainerPaiMenos'><div onClick={() => setContadorOreo(contadorOreo - 1)} className={contadorOreo === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorOreo}</p>

                <div className='CMais' ><div onClick={() => setContadorOreo(contadorOreo + 1)} className="CmaisFilhos"> +</div></div>

              </div>
            </div>

          </div>

          <div className='Container'>
            <label onClick={() => setContadorChocB(contadorChocB + 1)}>
              <div className='containerSeletor'></div>
              <div className='containervalorAd'>
                <p>Choc/Branco</p>
                <p className='valorAD'>  + R$ {valorChocB}.00</p>
              </div>
            </label>
            <div className='ContainerMMPai'>
              <div className='ContainerMMFilho'>
                <div className='ContainerPaiMenos'><div onClick={() => setContadorChocB(contadorChocB - 1)} className={contadorChocB === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorChocB}</p>

                <div className='CMais' ><div onClick={() => setContadorChocB(contadorChocB + 1)} className="CmaisFilhos"> +</div></div>

              </div>
            </div>

          </div>

          <div className='Container'>
            <label onClick={() => setContadorDiamantesN(contadorDiamantesN + 1)}>
              <div className='containerSeletor'></div>
              <div className='containervalorAd'>
                <p>Diamante Negro</p>
                <p className='valorAD'>  + R$ {valorDiamanteN}.00</p>
              </div>
            </label>
            <div className='ContainerMMPai'>
              <div className='ContainerMMFilho'>
                <div className='ContainerPaiMenos'><div onClick={() => setContadorDiamantesN(contadorDiamantesN - 1)} className={contadorDiamantesN === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorDiamantesN}</p>

                <div className='CMais' ><div onClick={() => setContadorDiamantesN(contadorDiamantesN + 1)} className="CmaisFilhos"> +</div></div>

              </div>
            </div>

          </div>

          <div className='Container'>
            <label onClick={() => setContadorGotasDC(contadorGotasDC + 1)}>
              <div className='containerSeletor'></div>
              <div className='containervalorAd'>
                <p>Gotas de Chocolate
                </p>
                <p className='valorAD'>  + R$ {valorGotasDC}0</p>
              </div>
            </label>
            <div className='ContainerMMPai'>
              <div className='ContainerMMFilho'>
                <div className='ContainerPaiMenos'><div onClick={() => setContadorGotasDC(contadorGotasDC - 1)} className={contadorGotasDC === 0 ? 'ContainerFilhoMenosLimite' : 'ContainerFilhoMenos'}>-</div></div>

                <p>{contadorGotasDC}</p>

                <div className='CMais' ><div onClick={() => setContadorGotasDC(contadorGotasDC + 1)} className="CmaisFilhos"> +</div></div>

              </div>
            </div>

          </div>

        </div>
      </div>

      <section className='valores'>
        <div className={tamanhosAcai === "" ? "containervalores" : "containervaloresActivo"}>
          <button onClick={() => setPedirOutroA(true)} className='butContinuar'>Pedir Outro</button>
          <h2>R${valorTotalPerssonalizado},00</h2>
          <button onClick={confirmarPedido} className='butContinuar'>CONTINUAR</button>
        </div>
      </section>

      <section className='valores'>
        <div className={pedirOutroA === true ? "containervaloresActivoPO" : "containervaloresPO"}>
          <p>WhatsApp:</p>
          <input className='numWha' placeholder='Exp.: 81999294899' type="number" onChange={(e) => setNumWhats(e.target.value)} />
          <button onClick={pedirOutro} className='butContinuar'>ENVIAR</button>
        </div>
      </section>

    </div>
  );
}

export default Personalizados;
