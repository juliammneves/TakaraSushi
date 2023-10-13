import '../styles/footer.css'
import { FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";


function Footer() {
  return (
    <footer>
      <h2>Takara Sushi<span>.</span></h2>
      <p>@Todos os direitos Reservados</p>
      <div className="icons">
        <FaFacebook className='icon' />
        <FaInstagram className='icon' />
        <FaLinkedinIn className='icon' />
        <BiLogoGmail className='icon' />
      </div>
    </footer>
  )
}
export default Footer