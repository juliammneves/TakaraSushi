import { Link } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

import "../styles/produtos.css"

function Produtos() {
  return (
    <section className='produtos'>
      <h1>Lista de produtos</h1>
      <div className='tabela'>
        <table>
          <thead>
            <tr>
              <th className='meio'>ID</th>
              <th>Nome</th>
              <th className='grande'>Descrição</th>
              <th className='medio'>Preço</th>
              <th className='pouco'>Editar</th>
            </tr>
          </thead>
          <tbody>
            {/* ele faz a leitura de todos os elementos do array, executa uma função callback para cada um e devolve como retorno um novo array */}
            {ListaProdutos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>{item.valor}</td>
                <td className='icons'>
                  {' '}
                  {/*Link para chamar a tela de editar produtos */}
                  <Link to={`/editar/produtos/${item.id}`}>
                    <FaPencilAlt className='icon' />
                  </Link >{' '}
                  {/*Link para chamar a tela de excluir produtos */}
                  <Link to={`/excluir/produtos/${item.id}`}>
                    <FaTrash className='icon' />
                    {/*espaço entre os links '' */}
                  </Link>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link className='cadastrar' to="/cadastrar/produto">Cadastrar</Link>
    </section>
  );
}
export default Produtos;
