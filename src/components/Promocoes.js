import { useState } from 'react';
import './Promocoes.css';
import PromoNutella from "./img/PromoNutella.jpeg";


function Promocoes() {
  const [hoje] = useState(4)

  /*Segunda num 1 Creme de Pacoca*/
    /*Quinta num 4 Nutella*/
    /*Sabado num 6 Clone*/

  const promos = () => {

    
   
  }
  const fotoPromo = () => {
    if(hoje === 1){
      return 'PromoCremePacoca'
    }
    else if(hoje === 4){
      return PromoNutella
    }
    else if(hoje === 6){
      return 'PromoClone'
    }
  }
  return (
    <div className='ContainerPaiP'>
      <img className="Promo" src={fotoPromo()} alt="Foto Promocao" />
      <button onClick={promos}>EU QUERO</button>
    </div>
  );
}

export default Promocoes;
