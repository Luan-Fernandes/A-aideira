import { useState,useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

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
        <figure><spam>Logo</spam></figure>
        <p onClick={() => [Navigation(),setContadorNav(!ContadorNav)]} className='perssonalisar'>{ContadorNav === true ? 'Personalizar' : 'Dicas de Açaí'}
        </p>
      </header> 
    </div>
  );
}

export default NavBar;
