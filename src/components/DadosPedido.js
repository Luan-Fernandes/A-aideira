import './DadosPedido.css';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function DadosPedido({envioPedido,setEnvioPedido}) {

  const history = useNavigate();
  const [nome,setNome] = useState("")
  const [endereco,setEndereco] = useState("")
  const [celular,setCelular] = useState("")
  const [complemento,setComplemento] = useState("")
  const [observacao,setObservacao] = useState("")
  const pedidoMsg = ("Bem vindo" +" "+ "*" + nome + "*\n\n" +envioPedido+ "\n\n" + "*Endereço*\n" + "_"+endereco+"_\n\n"+"*Complemento*\n" + "_"+complemento+"_\n\n"+ "*Observação*\n" + "_"+observacao + "\n\n" + "*CASO O PAGAMENTO FOR VIA PIX, POR FAVOR, ENVIE O COMPROVANTE*" +"\n\n"+ "*OBRIGADO PELA PREFERÊNCIA*") 
  const CelularEdit = "5581"+celular;


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
            <input onCli onClick={PedidoCompleto} type="button" className='ButtonEnviar' value="Enviar Pedido"/>
        </form>
      </div>
    );
  }
  
  export default DadosPedido;
  