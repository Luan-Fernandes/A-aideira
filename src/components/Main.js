import './Main.css';
import { useState } from 'react'
/*imgs*/
import imgLimocity from "./img/image0.jpeg";
import imgAcaideira from "./img/image2.png";
import imgBlack from "./img/image3.png";
import imgKids from "./img/image4.png";
function Main() {

  const [openDesc1, setOpenDesc1] = useState(true);
  const [openDesc2, setOpenDesc2] = useState(true);
  const [openDesc3, setOpenDesc3] = useState(true);
  const [openDesc4, setOpenDesc4] = useState(true);

  const [butSelect1, setButSelect1] = useState(true);
  const [butSelect2, setButSelect2] = useState(true);
  const [butSelect3, setButSelect3] = useState(true);
  const [butSelect4, setButSelect4] = useState(true);

  const containervalores = () => {
    if(butSelect1 === true && butSelect2 === true && butSelect3 === true && butSelect4 === true){
      return ('containervalores')
    }
    else return ('containervaloresActivo')
  }
  return (
    <div className="App">
      <section className='valores'>
        <div className={containervalores()}>
        </div>
      </section>
      <main>
        <h1>Dicas de Açaí</h1>

        <h2 className='nomesAcai'>*Açaí Kids 300ML</h2>
        <section onClick={() => setOpenDesc1(!openDesc1)} className='acai1'>
        <div className={openDesc1 === true ? 'desacai' : 'desacaiActivo'}><h1 className='tiacai'>*KIDS</h1>
        <ul className='textacai'>
          <li>M&M</li>
          <li>CHOCOBALL</li>
          <li>JUJUBA</li>
          <li>CEREAL</li>
          <li>CALDA/MOR</li>
          <li>BANANA</li>
        </ul>
        </div>
        <img className={openDesc1 === true ? 'tipoacai' : 'tipoacaiActivo'} src={imgKids} alt="imagens dos acais" />
        </section>
        <div className='precosDms'>
         R$12,00
         <button onClick={() => setButSelect1(!butSelect1)} className={butSelect1 === true ? 'butSelect' : 'butSelectActivo'}>SELECIONAR</button>
        </div>

        <h2 className='nomesAcai'>*Açaí Limocity 700ML</h2>
        <section onClick={() => setOpenDesc2(!openDesc2)} className='acai2'>
        <div className={openDesc2 === true ? 'desacai' : 'desacaiActivo'}><h1 className='tiacai'>*LIMOCITY</h1>
        <ul className='textacai'>
          <li>SORV/LIMÃO</li>
          <li>LEITE EM PÓ</li>
          <li>LEITE MOÇA</li>
          <li>MORANGO</li>
          
        </ul>
        </div>
        <img className={openDesc2 === true ? 'tipoacai' : 'tipoacaiActivo'} src={imgLimocity} alt="imagens dos acais" />
        </section>
        <div className='precosDms'>
        R$12,00
        <button onClick={() => setButSelect2(!butSelect2)} className={butSelect2 === true ? 'butSelect' : 'butSelectActivo'}>SELECIONAR</button>
        </div>
        

        <h2 className='nomesAcai'>*Açaideira 700ML</h2>
        <section onClick={() => setOpenDesc3(!openDesc3)} className='acai3'>
        <div className={openDesc3 === true ? 'desacai' : 'desacaiActivo'}><h1 className='tiacai'>*AÇAIDEIRA</h1>
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
        </div>
        <img className={openDesc3 === true ? 'tipoacai' : 'tipoacaiActivo'} src={imgAcaideira} alt="imagens dos acais" />
        </section>
        <div className='precosDms'>
        R$12,00
        <button onClick={() => setButSelect3(!butSelect3)} className={butSelect3 === true ? 'butSelect' : 'butSelectActivo'}>SELECIONAR</button>
        </div>

        <h2 className='nomesAcai'>*Açaí Black 700ML</h2>
        <section onClick={() => setOpenDesc4(!openDesc4)} className='acai4'>
        <div className={openDesc4 === true ? 'desacai' : 'desacaiActivo'}><h1 className='tiacai'>*BLACK</h1>
        <ul className='textacai'>
          <li>CEREAL</li>
          <li>TUBIN</li>
          <li>NUTELLA</li>
          <li>CHOC/M.AMAR</li>
          <li>UVA PRETA</li>
          <li>CALDA/CHOC</li>
        </ul>
        </div>
        <img className={openDesc4 === true ? 'tipoacai' : 'tipoacaiActivo'} src={imgBlack} alt="imagens dos acais" />
        </section>
        <div className='precosDms'>
        R$12,00
        <button onClick={() => setButSelect4(!butSelect4)} className={butSelect4 === true ? 'butSelect' : 'butSelectActivo'}>SELECIONAR</button>
        </div>
      </main>
      
    </div>
  );
}

export default Main;
