import './DadosPedido.css';
import { useState } from 'react'
function DadosPedido({envioPedido,setEnvioPedido}) {

  
  const [nome,setNome] = useState("")
  const [endereco,setEndereco] = useState("")
  const [celular,setCelular] = useState("")
  const [complemento,setComplemento] = useState("")
  const [observacao,setObservacao] = useState("")
  const pedidoMsg = ("*Bem vindo*" + "*_" + nome + "_*\n\n" +envioPedido+ "\n\n" + "*Endereço*\n" + "_"+endereco+"_\n\n"+"*Complemento*\n" + "_"+complemento+"_\n\n"+ "*Observação*\n" + "_"+observacao + "\n\n" + "*!!!CASO O PAGAMENTO FOR VIA PIX, POR FAVOR, ENVIE O COMPROVANTE*" +"\n\n"+ "*OBRIGADO PELA PREFERÊNCIA*") 
  const CelularEdit = "5581"+celular;

  async function enviarPedido(){

    const GZAPPY_URL = "https://api.gzappy.com/v1/message/send-message"

  const response = await fetch(GZAPPY_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'user_token_id': 'a094b463-1b0d-4b4c-bc56-15c785f7c591'
  },
  body: JSON.stringify({
    instance_id: '1S3YM80P0S8SXQT3X27E9BYV',
    instance_token: '75eef91a-a744-4e2d-b7a0-456bfa2e9454',
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
        <form>
             <label> Nome:</label>
             <input type="text" onChange={(e) => setNome(e.target.value)}/>
            
            <label> Endereço:</label>
            <input type="text" onChange={(e) => setEndereco(e.target.value)}/>

            <label> Celular:</label>
            <input type="number" onChange={(e) => setCelular(e.target.value)}/>

            <label> Complemento:</label>
            <input type="text" onChange={(e) => setComplemento(e.target.value)}/>
            

            <label> Observação:</label>
            <input type="text" onChange={(e) => setObservacao(e.target.value)}/>
            
            <button onClick={enviarPedido} className='ButtonEnviar'> Enviar Pedido</button>
        </form>
      </div>
    );
  }
  
  export default DadosPedido;
  