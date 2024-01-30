import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import DadosPedido from './components/DadosPedido';
import Personalizados from './components/Personalizados';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

/*Hooks*/
import { useState } from 'react'
function App() {
  const [envioPedido,setEnvioPedido] = useState("")
  localStorage.setItem("pedido",envioPedido);
  return (
    <div className="App">
      <Router>
 
      

          <Routes>
        
          <Route exact path="/" element={<Main envioPedido={envioPedido} setEnvioPedido={setEnvioPedido}/>} />
          <Route exact path="/personalizados" element={<Personalizados/>} />
          <Route exact path="/dadospedido" element={<DadosPedido envioPedido={envioPedido} setEnvioPedido={setEnvioPedido}/>} />

          </Routes>
          <NavBar></NavBar>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
