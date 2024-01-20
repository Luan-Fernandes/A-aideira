import './DadosPedido.css';
function DadosPedido() {
    return (
      <div className='ContainerPai'>
        <form>
             <label> Nome:</label>
             <input type="text" />
            
            <label> endereço:</label>
            <input type="text" />

            <label> Celular:</label>
            <input type="number" />

            <label> Complemento:</label>
            <input type="text" />
            

            <label> Observação:</label>
            <textarea></textarea>
            
            <button className='ButtonEnviar'> Enviar Pedido</button>
        </form>
      </div>
    );
  }
  
  export default DadosPedido;
  