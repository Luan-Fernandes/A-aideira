import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import DadosPedido from './components/DadosPedido';
import Personalizados from './components/Personalizados';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PedidoConfirmado from './components/PedidoConfirmado'
import Promocoes from './components/Promocoes';
import DadosSalvos from './components/DadosSalvos'

/*Hooks*/
import { useEffect, useState } from 'react'
function App() {
  const [envioPedido, setEnvioPedido] = useState("")
  const [envioMsgPers, setEnvioMsgPers] = useState("")
  const [stepEnvio, setStepEnvio] = useState()

  const [nome, setNome] = useState(() => {
    const nomeSalvo = localStorage.getItem('nome');
    return nomeSalvo ? nomeSalvo : 'defalut'
  })
  const [endereco, setEndereco] = useState(() => {
    const enderecoSalvo = localStorage.getItem('endereco');
    return enderecoSalvo ? enderecoSalvo : 'defalut'
  })
  const [celular, setCelular] = useState(() => {
    const celularSalvo = localStorage.getItem('celular');
    return celularSalvo ? celularSalvo : 'defalut'
  })
  const [celular2, setCelular2] = useState(() => {
    const celularSalvo = localStorage.getItem('celular');
    return celularSalvo ? celularSalvo : 'defalut'
  })
  const [complemento, setComplemento] = useState(() => {
    const complementoSalvo = localStorage.getItem('complemento');
    return complementoSalvo ? complementoSalvo : 'defalut'
  })

  const [butDados, setButDados] = useState(false)

  const [promoFechar, setPromoFechar] = useState()
  const [hoje] = useState(4)

  const aparecerPromo = () => {
    if(promoFechar === true){
      return "promocao"
    }
    else if(promoFechar === false){
      return "promocaoDesact"
    }
  }
  useEffect(() => {
    if(hoje === 1 || hoje === 4 || hoje === 6){
      setPromoFechar(true)
    }
    else{
      setPromoFechar(false)
    }
  },[])

  return (
    <div className="App">
      <Router>



        <Routes>

          <Route exact path="/" element={<Main nome={nome} envioPedido={envioPedido} setEnvioPedido={setEnvioPedido} setStepEnvio={setStepEnvio} />} />
          <Route exact path="/promocoes" element={<Promocoes />} />
          <Route exact path="/personalizados" element={<Personalizados celular2={celular2} celular={celular} setCelular={setCelular} setCelular2={setCelular2} envioMsgPers={envioMsgPers} setStepEnvio={setStepEnvio} setEnvioMsgPers={setEnvioMsgPers} />} />
          <Route exact path="/dadospedido" element={<DadosPedido nome={nome} setNome={setNome} setCelular={setCelular} setEndereco={setEndereco} setComplemento={setComplemento} celular2={celular2} setCelular2={setCelular2} endereco={endereco} setButDados={setButDados} butDados={butDados} celular={celular} complemento={complemento} stepEnvio={stepEnvio} envioPedido={envioPedido} envioMsgPers={envioMsgPers} setEnvioPedido={setEnvioPedido} />} />
          <Route exact path="/pedidoconfirmado" element={<PedidoConfirmado envioPedido={envioPedido} />} />
          <Route exact path="/dadossalvos" element={<DadosSalvos nome={nome} endereco={endereco} setButDados={setButDados} butDados={butDados} celular={celular} complemento={complemento} />} />


        </Routes>
        <NavBar></NavBar>
        <div className={aparecerPromo()}>
          <div className='butt' onClick={() => setPromoFechar(false)}>x</div>
          <Promocoes />
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
