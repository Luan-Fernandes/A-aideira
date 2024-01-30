import './Footer.css';
import logo from "./img/image6-removebg-preview (2).png"
import { FaInstagram } from "react-icons/fa";
import { FaRegRegistered } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
function Footer() {
    return (
      <div className="footer">
        <img className="logoFooter" src={logo} alt="" />
        <a href="https://www.instagram.com/lf.developer?igsh=Mm9vZHJhNXI3aDAw"><p className='fontsize'>lf.developer<FaInstagram /></p></a>
        <FaArrowUp />
        <p className='fontsize'>Desenvolvido 2024<FaRegRegistered /></p>
      </div>
    );
  }
  
  export default Footer;
  