import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css'
import { FaUser, FaLock } from 'react-icons/fa'
import Pedidos from './Pedidos';

function Login() {
  /*hook useref ele retorna uma referencia a um elemento ou componente sem ter que ser renderizado novamente e também permite acesso ao DOM */
  const user = useRef();
  const password = useRef();
  /* pegando o usuario e adcionando ao sessionStorage */
  const getUser = sessionStorage.getItem('userData');
  /* pegando o senha e adcionando ao sessionStorage */
  const getSenha = sessionStorage.getItem('senhaData');

  /*função que verifica se o usuario e senha são validos e grava na sessão */
  const handleSubmit = () => {
    if (user.current.value === 'admin' && password.current.value === '12345') {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('userData', 'admin');
      sessionStorage.setItem('senhaData', token);
    } else {
      alert('usuário e senha inválidos !!!');
    }
  };



  return (
    <section className='login'>

      {/* if ternario*/}
      {getUser && getSenha ? (
        <>
          <Pedidos />
        </>

      ) : (
        /* chamando a função handleSubmit dentro do form*/
        <div className='box'>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='content'>

              <div className="input user ">
                <FaUser className='icon' id='user' />
                {/* passando a referencia no usuario */}
                <input id='nome' type="text" placeholder='Usuário' ref={user} />
              </div>
            </div>

            <div className='content'>

              <div className="input">
                <FaLock className='icon senha' />
                {/* passando a referencia na senha */}
                <input id='senha' type="password" placeholder='Senha' ref={password} />
              </div>

            </div>

            <input className='btn' type="submit" value="Entrar" />
            <div className="deco"></div>
          </form>
        </div>
      )}
    </section>
  );
}

export default Login



{/* <div className='entrou'>
          <h1>Bem-vindo(a) de volta!</h1>
          <Link to="/produtos">Produtos</Link>
          <Link to="/pedidos">Pedidos</Link>
          <button className='logout' onClick={handleLogout}>Logout</button>
          <p>ようこそ</p>
        </div> */}