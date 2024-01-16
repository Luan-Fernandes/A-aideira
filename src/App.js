import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import DadosPedido from './components/Main';
import Personalizados from './components/Personalizados';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <Router>
 
      <NavBar></NavBar>

          <Routes>
        
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/personalizados" element={<Personalizados/>} />
          <Route exact path="/dadospedido" element={<DadosPedido/>} />

          </Routes>
          
      </Router>
    </div>
  );
}

export default App;
