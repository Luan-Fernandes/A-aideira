import './DadosSalvos.css';
/*Hooks*/
import { useNavigate } from 'react-router-dom';
function DadosSalvos({nome,endereco,celular,complemento,setButDados,butDados}) {
    const history = useNavigate()
  return (
    
       <div className='dadosA'>
        <div className='DadosAnteriores'>
              <h1>Dados Anteriores!</h1>
                <p>*Nome: {nome}.</p>
                <p>*Endereço: {endereco}.</p>
                <p>*WhatsApp: {celular}.</p>
                <p>*Referência: {complemento}.</p>
                <button onClick={() => [setButDados(true),history("/dadospedido")]}>Usar Dados Anteriores.</button>
            </div>
            </div>
  );
}

export default DadosSalvos;
