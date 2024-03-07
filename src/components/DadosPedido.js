import './DadosPedido.css';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
/*icons*/
import { FaPix } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";

function DadosPedido({envioPedido,envioMsgPers,stepEnvio}) {

  const enviarMsg = () => {
    if(nome === "" || endereco === "" || celular === "" || complemento === "" || confirmNumero === false){
      alert("Preencha os campos obrigatorios, ou Confirme o Numero")
    }else{
      history("/pedidoconfirmado")
      return PedidoCompleto()
    }
    
  }
  console.log(envioMsgPers)

  const history = useNavigate();
  const [step,setStep] = useState();
  const [confirmNumero,setConfirmeNumero] = useState(false)

  const [nome,setNome] = useState(() => {
    const nomeSalvo = localStorage.getItem('nome');
    return nomeSalvo ? nomeSalvo : 'defalut'
  })
  const [endereco,setEndereco] = useState(() => {
    const enderecoSalvo = localStorage.getItem('endereco');
    return enderecoSalvo ? enderecoSalvo : 'defalut'
  })
  const [celular,setCelular] = useState(() => {
    const celularSalvo = localStorage.getItem('celular');
    return celularSalvo ? celularSalvo : 'defalut'
  })
  const [complemento,setComplemento] = useState(() => {
    const complementoSalvo = localStorage.getItem('complemento');
    return complementoSalvo ? complementoSalvo : 'defalut'
  })

  const [butDados, setButDados] = useState(false)

  const [observacao,setObservacao] = useState("--")
  const pedidoMsg = ("**Pedidos Açaideira**\n\n"+"Bem vindo(a)" +" "+ "*" + nome + "*"+" "+"!\n\n" +envioPedido+ "\n\n" + "*Endereço:*\n" +endereco+"\n\n"+"*Referência:*\n"+complemento+"\n\n"+ "*Forma de Pagamento:*"+" "+step+"\n\n"+ "*Observação:*\n"+observacao + "\n\n" + "*CASO O PAGAMENTO FOR VIA PIX, POR FAVOR, ENVIE O COMPROVANTE.*" +"\n\n"+ "*OBRIGADO PELA PREFERÊNCIA.*") 

  const pedidoMsgPers = ("**Pedidos Açaideira**\n\n"+"Bem vindo(a)" +" "+ "*" + nome + "*"+" "+"!\n\n" +envioMsgPers+ "\n\n" + "*Endereço:*\n" +endereco+"\n\n"+"*Referência:*\n"+complemento+"\n\n"+ "*Forma de Pagamento:*"+" "+step+"\n\n"+ "*Observação:*\n"+observacao + "\n\n" + "*CASO O PAGAMENTO FOR VIA PIX, POR FAVOR, ENVIE O COMPROVANTE.*" +"\n\n"+ "*OBRIGADO PELA PREFERÊNCIA.*") 

  const CelularEdit = "55"+celular;
  
  

  useEffect(() => {
    localStorage.setItem('nome',nome);
  },[nome])

  useEffect(() => {
    localStorage.setItem('endereco',endereco);
  },[endereco])

  useEffect(() => {
    localStorage.setItem('celular',celular);
  },[celular])

  useEffect(() => {
    localStorage.setItem('complemento',complemento);
  },[complemento])

  async function PedidoCompleto(){

    if(stepEnvio === 1){

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
    message: [pedidoMsg],
    phone: [CelularEdit]
  })
})
const data = await response.json()

console.log(data)
// { msg: 'Messages sent' }

  }
  else{
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
      message: [pedidoMsgPers],
      phone: [CelularEdit]
    })
  })
  const data = await response.json()
  
  console.log(data)
  // { msg: 'Messages sent' }
  
    }
  }
  
  
    return (
      <div className='ContainerPai'>
        <form className='containerFilho'>
             <label> *Nome:</label>
             <input placeholder='Exp.:Fabio Santos' value={butDados === true ? nome : undefined} type="text" onChange={(e) => setNome(e.target.value)}/>
            
            <label> *Endereço:</label>
            <input placeholder='Exp.:Bairro, Rua e Número' value={butDados === true ? endereco : undefined} type="text" onChange={(e) => setEndereco(e.target.value)}/>

            <label> *WhatsApp:</label>
            <div className='ConfirmeNumero'>
            <input placeholder='Exp.:81999294899' type="number" value={butDados === true ? celular : undefined} onChange={(e) => setCelular(e.target.value)}/>
            <input onClick={() => setConfirmeNumero(!confirmNumero)} className={confirmNumero === false ? "butNumero" : "butconfirmado"} type="button" value={confirmNumero === false ? "Confirme Número" : "Número Confirmado"} />
            </div>

            <label> *Referência:</label>
            <input placeholder='Exp.:Próximo ao Mercadinho' value={butDados === true ? complemento : undefined} type="text" onChange={(e) => setComplemento(e.target.value)}/>
            
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
        <div className='DadosAnteriores'>
          <h1>Dados Anteriores!</h1>
            <p>*Nome: {nome}.</p>
            <p>*Endereço: {endereco}.</p>
            <p>*WhatsApp: {celular}.</p>
            <p>*Referência: {complemento}.</p>
            <button onClick={() => setButDados(true)}>Usar Dados Anteriores.</button>
        </div>
      </div>
    );
  }
  
  export default DadosPedido;
  