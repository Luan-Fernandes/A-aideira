import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import DadosPedido from './components/DadosPedido';
import Personalizados from './components/Personalizados';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PedidoConfirmado from './components/PedidoConfirmado'

/*Hooks*/
import { useState } from 'react'
function App() {
  const [envioPedido,setEnvioPedido] = useState("")
  const [envioMsgPers, setEnvioMsgPers] = useState("")
  const [stepEnvio, setStepEnvio] = useState()

  
  return (
    <div className="App">
      <Router>
 
      

          <Routes>
        
          <Route exact path="/" element={<Main envioPedido={envioPedido} setEnvioPedido={setEnvioPedido} setStepEnvio={setStepEnvio} />} />
          <Route exact path="/personalizados" element={<Personalizados envioMsgPers={envioMsgPers} setStepEnvio={setStepEnvio} setEnvioMsgPers={setEnvioMsgPers}/>} />
          <Route exact path="/dadospedido" element={<DadosPedido stepEnvio={stepEnvio} envioPedido={envioPedido} envioMsgPers={envioMsgPers} setEnvioPedido={setEnvioPedido}/>} />
          <Route exact path="/pedidoconfirmado" element={<PedidoConfirmado envioPedido={envioPedido}/>} />

          </Routes>
          <NavBar></NavBar>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
