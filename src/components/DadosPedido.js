import './DadosPedido.css';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
/*icons*/
import { FaPix } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";

function DadosPedido({envioPedido,setEnvioPedido}) {

  const enviarMsg = () => {
    if(nome === "" || endereco === "" || celular === "" || complemento === ""){
      alert("Preencha os campos obrigatorios marcados com *.")
    }else{
      history("/personalizados")
      return PedidoCompleto()
    }
    
  }

  const history = useNavigate();
   const [step,setStep] = useState();
  const [nome,setNome] = useState("")
  const [endereco,setEndereco] = useState("")
  const [celular,setCelular] = useState("")
  const [complemento,setComplemento] = useState("")
  const [observacao,setObservacao] = useState("--")
  const pedidoMsg = ("**Pedidos Açaideira**\n\n"+"Bem vindo" +" "+ "*" + nome + "*\n\n" +envioPedido+ "\n\n" + "*Endereço*\n" +endereco+"\n\n"+"*Complemento*\n"+complemento+"\n\n"+ "Forma de Pagamento:"+step+"\n\n"+ "*Observação*\n"+observacao + "\n\n" + "*CASO O PAGAMENTO FOR VIA PIX, POR FAVOR, ENVIE O COMPROVANTE*" +"\n\n"+ "*OBRIGADO PELA PREFERÊNCIA*") 
  const CelularEdit = "5581"+celular;
  console.log(pedidoMsg)


  async function PedidoCompleto(){

    const GZAPPY_URL = "https://api.gzappy.com/v1/message/send-message"

  const response = await fetch(GZAPPY_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'user_token_id': '9ce7cdb5-f347-4260-b14c-34844e320b75'
  },
  body: JSON.stringify({
    instance_id: 'GTTPCDN0YT7UP2PZW3QFPS27',
    instance_token: '7d13ed94-c404-45a7-bd20-3f682c381901',
    message: [pedidoMsg],
    phone: [CelularEdit]
  })
})

const data = await response.json()

console.log(data)
// { msg: 'Messages sent' }

  }
    return (
      <div className='ContainerPai'>
        <form className='containerFilho'>
             <label> *Nome:</label>
             <input type="text" onChange={(e) => setNome(e.target.value)}/>
            
            <label> *Endereço:</label>
            <input type="text" onChange={(e) => setEndereco(e.target.value)}/>

            <label> *Celular:</label>
            <input type="number" onChange={(e) => setCelular(e.target.value)}/>

            <label> *Referência:</label>
            <input type="text" onChange={(e) => setComplemento(e.target.value)}/>
            
            <div className='pagamento'>
            <label>*Forma de Pagamento:</label>
            <div className='formaPagamento'>
              <div onClick={() => setStep("Pix")} className={step === "Pix" ? "pixS" : "pix"}>  <FaPix /></div>
              <div onClick={() => setStep("Card")} className={step === "Card" ? "cardS" : "card"}><FaCcMastercard /></div>
              <div onClick={() => setStep("Dinhero")} className={step === "Dinhero" ? "dinheiroS" : "dinheiro"}><FaMoneyBillWave /></div>
            </div>
            </div>

            <label> Observação:</label>
            <input type="text" onChange={(e) => setObservacao(e.target.value)}/>
            
            <input onClick={enviarMsg} type="button" className='ButtonEnviar' value="Enviar Pedido"/>
        </form>
      </div>
    );
  }
  
  export default DadosPedido;
  