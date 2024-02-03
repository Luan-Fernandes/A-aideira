import './Main.css';
/*Hooks*/
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
/*imgs*/
import imgLimocity from "./img/image0.jpeg";
import imgAcaideira from "./img/image2.png";
import imgBlack from "./img/image3.png";
import imgKids from "./img/image4.png";
function Main({envioPedido,setEnvioPedido,}) {
  const history = useNavigate();

  const [openDesc1, setOpenDesc1] = useState(true);
  const [openDesc2, setOpenDesc2] = useState(true);
  const [openDesc3, setOpenDesc3] = useState(true);
  const [openDesc4, setOpenDesc4] = useState(true);

  const [butSelect1, setButSelect1] = useState(true);
  const [butSelect2, setButSelect2] = useState(true);
  const [butSelect3, setButSelect3] = useState(true);
  const [butSelect4, setButSelect4] = useState(true);

  /*Quatidades dos acais*/
  const [qKids,setQKids] = useState(0)
  const [qBlack,setQBlack] = useState(0)
  const [qAçaideira,setQAçaideira] = useState(0)
  const [qLimocity,setQLimocity] = useState(0)

  /*valores acai*/
  const [acaiKids,setAcaiKids] = useState();
  const [acaiBlack,setAcaiBlack] = useState();
  const [acaiAçaideira,setAcaiAçaideira] = useState();
  const [acaiLimocity,setAcaiLimocity] = useState();
  const valor = (acaiKids*qKids)+(acaiBlack*qBlack)+(acaiLimocity*qLimocity)+(acaiAçaideira*qAçaideira);
  
  /*msg acai*/
  const [opAcaiKids,setOpAcaiKids] = useState('');
  const [opAcaiBlack,setOpAcaiBlack] = useState('');
  const [opAcaiAçaideira,setOpAcaiAçaideira] = useState('');
  const [opAcaiLimocity,setOpAcaiLimocity] = useState('');
  const [opAcai,setOpAcai] = useState('')
  
  

  useEffect(() => {
    /*soma acai kids*/
    if(butSelect1 === true || qKids === 0){
      setQKids(0)
      setAcaiKids(0)
      setOpAcaiKids('')
    }
    else{
      setAcaiKids(9)
      setOpAcaiKids("\n"+"*" +qKids + 'x' +" " + 'KIDS*\n'+ "-M&M\n"+ "-CHOCOBALL\n"+ "-JUJUBA\n"+ "-CEREAL\n"+ "-CALDA/MOR\n"+ "-BANANA\n"+"--------------------------------")
    }
    /*soma acai black*/
    if(butSelect4 === true || qBlack === 0){
      setQBlack(0)
      setAcaiBlack(0)
      setOpAcaiBlack('')
    }
    else{
      setAcaiBlack(15)
      setOpAcaiBlack("\n"+"*" +qBlack + 'x' + " " + 'BLACK* \n'+ "-CEREAL\n"+ "-TUBIN\n"+ "-NUTELLA\n"+ "-CHOC/M.AMAR\n"+ "-UVA PRETA\n"+ "-CALDA/CHOC\n"+"--------------------------------")
      
    }
    /*soma acaideira*/
    if(butSelect3 === true || qAçaideira === 0){
      setQAçaideira(0)
      setAcaiAçaideira(0)
      setOpAcaiAçaideira('')
    }
    else{
      setAcaiAçaideira(16)
      setOpAcaiAçaideira("\n"+"*" +qAçaideira + 'x' +" " + 'AÇAIDEIRA*\n'+ "AMENDOIM\n"+ "M&M\n"+ "NUTELLA\n"+ "CHOC/BRANCO\n"+ "MORANGO\n"+ "BANANA\n" + "TUBIN\n"+ "CALDA/CHOC\n"+"--------------------------------")
      
    }
  /*soma limocity*/
    if(butSelect2 === true ||qLimocity === 0){
      setAcaiLimocity(0)
      setOpAcaiLimocity('')
      setQLimocity(0)
    }
    else{
      
      setAcaiLimocity(12)
      setOpAcaiLimocity("\n"+"*" +qLimocity + 'x' +" "+ 'LIMOCITY* \n'+ "-SORV/LIMÃO\n"+ "-LEITE EM PÓ\n"+ "-LEITE MOÇA\n"+ "-MORANGO\n"+"--------------------------------")
    }
    setOpAcai(opAcaiLimocity+opAcaiAçaideira+opAcaiBlack+opAcaiKids);

    setEnvioPedido("VOU QUERER:\n\n" + opAcai + "\n" + "*Valor a pagar:*"+" "+ "R$"+valor + ",00" )
    
  
  },[valor,setEnvioPedido,qLimocity,qAçaideira,qBlack,qKids,opAcai,opAcaiLimocity,opAcaiAçaideira,opAcaiBlack,opAcaiKids,butSelect1,butSelect2,butSelect3,butSelect4,acaiKids,acaiBlack,acaiAçaideira,acaiLimocity])
  
  const containervalores = () => {
    if(butSelect1 === true && butSelect2 === true && butSelect3 === true && butSelect4 === true){
      return ('containervalores')
    }
    else return ('containervaloresActivo')
  }
  return (
    <div className="App">
      
      <main>
        <h1>Dicas de Açaí</h1>
        <p>*Click para ver Detalhes.</p>

        <h2 className='nomesAcai'>*Açaí Kids 300ML</h2>
        <section onClick={() => setOpenDesc1(!openDesc1)} className='acai1'>
        <div className={openDesc1 === true && butSelect1 === true ? 'desacai' : 'desacaiActivo'}><h1 className='tiacai'>*KIDS</h1>
        <ul className='textacai'>
          <li>M&M</li>
          <li>CHOCOBALL</li>
          <li>JUJUBA</li>
          <li>CEREAL</li>
          <li>CALDA/MOR</li>
          <li>BANANA</li>
        </ul>
        <span className='quantidades' >{qKids}x</span>
        </div>
        <img className={openDesc1 === true  && butSelect1 === true ? 'tipoacai' : 'tipoacaiActivo'} src={imgKids} alt="imagens dos acais" />
        </section>
        <div className='precosDms'>
        <p className='valor'>R$9,00</p>
        <div className='maisMenos'>
        <div className='containerMa'>
        <div onClick={() => setQKids(qKids-1)} className={qKids <= 0 ? 'menosDesativo' : 'menos'}>-</div>
        </div>
        <button onClick={() => setButSelect1(!butSelect1)} className={butSelect1 === true ? 'butSelect' : 'butSelectActivo'}>{butSelect1 === true ? 'SELECIONAR' : 'SELECIONADO'}</button>
        <div className='containerMe'>
        <div onClick={() => setQKids(qKids+1)} className={butSelect1 === true ? 'maisDesativo' : 'mais'}>+</div>
        </div>
        </div>
        </div>

        <h2 className='nomesAcai'>*Açaí Limocity 700ML</h2>
        <section onClick={() => setOpenDesc2(!openDesc2)} className='acai2'>
        <div className={openDesc2 === true && butSelect2 === true? 'desacai' : 'desacaiActivo'}><h1 className='tiacai'>*LIMOCITY</h1>
        <ul className='textacai'>
          <li>SORV/LIMÃO</li>
          <li>LEITE EM PÓ</li>
          <li>LEITE MOÇA</li>
          <li>MORANGO</li>
        </ul>
        <span className='quantidades' >{qLimocity}x</span>
        </div>
        <img className={openDesc2 === true && butSelect2 === true? 'tipoacai' : 'tipoacaiActivo'} src={imgLimocity} alt="imagens dos acais" />
        </section>
        <div className='precosDms'>
        <p className='valor'>R$12,00</p>
        <div className='maisMenos'>
        <div className='containerMa'>
        <div onClick={() => setQLimocity(qLimocity-1)} className={qLimocity <= 0 ? 'menosDesativo' : 'menos'}>-</div>
        </div>
        <button onClick={() => setButSelect2(!butSelect2)} className={butSelect2 === true ? 'butSelect' : 'butSelectActivo'}>{butSelect2 === true ? 'SELECIONAR' : 'SELECIONADO'}</button>
        <div className='containerMe'>
        <div onClick={() => setQLimocity(qLimocity+1)} className={butSelect2 === true ? 'maisDesativo' : 'mais'}>+</div>
        </div>
        </div>
        </div>
        

        <h2 className='nomesAcai'>*Açaideira 700ML</h2>
        <section onClick={() => setOpenDesc3(!openDesc3)} className='acai3'>
        <div className={openDesc3 === true && butSelect3 === true ? 'desacai' : 'desacaiActivo'}><h1 className='tiacai'>*AÇAIDEIRA</h1>
        <ul className='textacai'>
          <li>AMENDOIM</li>
          <li>M&M</li>
          <li>NUTELLA</li>
          <li>CHOC/BRANCO</li>
          <li>MORANGO</li>
          <li>BANANA</li>
          <li>TUBIN</li>
          <li>CALDA/CHOC</li>
        </ul>
        <span className='quantidades' >{qAçaideira}x</span>
        </div>
        <img className={openDesc3 === true && butSelect3 === true? 'tipoacai' : 'tipoacaiActivo'} src={imgAcaideira} alt="imagens dos acais" />
        </section>
        <div className='precosDms'>
        <p className='valor'>R$16,00</p>
        <div className='maisMenos'>
        <div className='containerMa'>
        <div onClick={() => setQAçaideira(qAçaideira-1)} className={qAçaideira <= 0 ? 'menosDesativo' : 'menos'}>-</div>
        </div>
        <button onClick={() => setButSelect3(!butSelect3)} className={butSelect3 === true ? 'butSelect' : 'butSelectActivo'}>{butSelect3 === true ? 'SELECIONAR' : 'SELECIONADO'}</button>
        <div className='containerMe'>
        <div onClick={() => setQAçaideira(qAçaideira+1)} className={butSelect3 === true ? 'maisDesativo' : 'mais'}>+</div>
        </div>
        </div>
        </div>

        <h2 className='nomesAcai'>*Açaí Black 700ML</h2>
        <section onClick={() => setOpenDesc4(!openDesc4)} className='acai4'>
        <div className={openDesc4 === true && butSelect4 === true ? 'desacai' : 'desacaiActivo'}><h1 className='tiacai'>*BLACK</h1>
        <ul className='textacai'>
          <li>CEREAL</li>
          <li>TUBIN</li>
          <li>NUTELLA</li>
          <li>CHOC/M.AMAR</li>
          <li>UVA PRETA</li>
          <li>CALDA/CHOC</li>
        </ul>
        <span className='quantidades' >{qBlack}x</span>
        </div>
        <img className={openDesc4 === true && butSelect4 === true? 'tipoacai' : 'tipoacaiActivo'} src={imgBlack} alt="imagens dos acais" />
        </section>
        <div className='precosDms'>
        <p className='valor'>R$15,00</p>
        <div className='maisMenos'>
        <div className='containerMa'>
        <div onClick={() => setQBlack(qBlack-1)} className={qBlack <= 0 ? 'menosDesativo' : 'menos'}>-</div>
        </div>
        <button onClick={() => setButSelect4(!butSelect4)} className={butSelect4 === true ? 'butSelect' : 'butSelectActivo'}>{butSelect4 === true ? 'SELECIONAR' : 'SELECIONADO'}</button>
        <div className='containerMe'>
        <div onClick={() => setQBlack(qBlack+1)} className={butSelect4 === true ? 'maisDesativo' : 'mais'}>+</div>
        </div>
        </div>
        </div>
      </main>
      <section className='valores'>
        <div className={containervalores()}>
          <h1>Valor:</h1>
          <h2>R${valor},00</h2>
          <button onClick={() => valor === 0 ? alert("Adicione pelo menos um Açai!") : history("/dadospedido")} className='butContinuar'>CONTINUAR</button>
        </div>
      </section>
    </div>
  );
}

export default Main;
