import { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import logo from "./img/image6-removebg-preview (2).png"

function NavBar() {
  const history = useNavigate();

  const [ContadorNav,setContadorNav] = useState(true)
  
  const Navigation = () => {
    if(ContadorNav===true){
        history("/personalizados")
        
    }
    else {
        history("/")
    }
  }
  console.log(ContadorNav)
  return (
    <div className="App">
 
      <header>
        <img onClick={() => history("/")} className='logo' src={logo} alt="logo" />
        {/*<p onClick={() => [Navigation(),setContadorNav(!ContadorNav)]} className='perssonalisar'>{ContadorNav === true ? 'Personalizar' : 'Dicas de Açaí'}</p>*/}
        
      </header> 
    </div>
  );
}

export default NavBar;
