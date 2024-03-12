import './PedidoConfirmado.css';
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import imgacai from "./img/acai-bowl-3174823__480.png"

function PedidoConfirmado() {

  const history = useNavigate();

    return (
      <div className="PedidoConfirmado">
        <div>
        <h1 className='titulo'>Pedido Enviado<TbTruckDelivery /></h1>
        <img className='img' src={imgacai} alt="" />
        <p className='txt'>Acompanhe pedido pelo WhatsApp, Obrigado pela Preferência!!!</p>
        <input onClick={() => history("/")} className='but' type="button" value="Continuar Pedindo" />
        </div>
      </div>
    );
  }
  
  export default PedidoConfirmado;
  