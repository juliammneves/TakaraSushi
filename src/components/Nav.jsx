import { } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/nav.css'
import { FaUser } from 'react-icons/fa6';


function Nav() {
  /*utilizando o useNavigate para fazer um redirecionamento */


  return (
    <>
      <header>
        <h2>Takara Sushi<span>.</span></h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
        <div className="botoes-de-acesso">
          <Link to="/login"><button className='login-btn'><p>LOGIN</p>{/* <FaUser className='logado' /> */}</button></Link>
        </div>
      </header>
      <hr className='linha' />
    </>
  );
}
export default Nav;
