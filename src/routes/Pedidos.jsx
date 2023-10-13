import { Link, useNavigate } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import '../styles/login.css'
import "../styles/produtos.css"

function Pedidos() {
  const navigate = useNavigate();

  /*função para realizar o logout */
  const handleLogout = async () => {
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    alert("Saindo da sessão");
    navigate('/');
  }
  return (
    <section className='produtos pedido'>
      <h1>Lista de pedidos</h1>
      <div className='tabela'>
        <table>
          <thead>
            <tr>
              <th className='meio'>ID</th>
              <th>Nome</th>
              <th>Produto</th>
              <th className='grande'>Descrição</th>
              <th className='pouco'>Editar</th>
            </tr>
          </thead>
          <tbody>
            {/* ele faz a leitura de todos os elementos do array, executa uma função callback para cada um e devolve como retorno um novo array */}
            {ListaPedidos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.produto}</td>
                <td>{item.desc}</td>
                <td className='icons'>
                  {' '}
                  {/*Link para chamar a tela de editar pedidos */}
                  <Link to={`/editar/pedidos/${item.id}`}>
                    <FaPencilAlt className='icon' />
                  </Link >{' '}
                  {/*Link para chamar a tela de excluir pedidos */}
                  <Link to={`/excluir/pedidos/${item.id}`}>
                    <FaTrash className='icon' />
                    {/*espaço entre os links '' */}
                  </Link>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link className='cadastrar' to="/cadastrar/pedido">Cadastrar</Link>
      <button className='logout' onClick={handleLogout}>Logout</button>
    </section>
  );
}
export default Pedidos;
