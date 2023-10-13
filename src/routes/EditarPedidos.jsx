/* useParams -Ele serve para receber parâmetros pela rota. Quando vamos criar uma rota, é possível fazer que ela receba parâmetros */
import { useNavigate, useParams } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';
import { useState } from 'react';
import { FaPen, FaPenToSquare, FaTags } from 'react-icons/fa6'
function EditarPedido() {
  //Recuperando o ID do pedido selecionado com useParams()
  const { id } = useParams();
  //Utilizando o useNavigate para fazer um redirect
  const navigate = useNavigate();

  /*Filter-para filtrar elementos de um array de dados antes de renderizá-los em uma lista */
  const recPedidosListaById = ListaPedidos.filter((item) => item.id == id);

  /*Hook -useState*/

  const [pedido, setPedido] = useState({
    id: recPedidosListaById[0].id,
    nome: recPedidosListaById[0].nome,
    desc: recPedidosListaById[0].desc,
    produto: recPedidosListaById[0].produto,
  });

  /*funções */

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    ListaPedidos.forEach((item, index) => {
      if (item.id == pedido.id) {
        indice = index;
      }
    });
    /*metodo slice- vai dividir o array com base no indice e no objeto */
    ListaPedidos.splice(indice, 1, pedido);
    /*chamar a tela pedidos */
    navigate('/pedidos');
  };

  const handleChange = (event) => {
    /*desestruturando */
    const { name, value } = event.target;
    /*pegando o useState e fazendo um spred no pedido pegando o name e value do input */
    setPedido({ ...pedido, [name]: value });
  };

  return (
    <section className='produtos'>
      <h1>Editar Pedido</h1>
      {/*chamando a função handleSubmit dentro do form */}
      <form onSubmit={handleSubmit}>
        <div className='content'>
          <input
            type="hidden"
            name="id"
            value={pedido.id}
            /*chamando a função handleChance dentro do input*/
            onChange={handleChange}
          />
        </div>
        <div className='content'>
          <label htmlFor="idNome">Nome</label>
          <div className="input">
            <FaPen className='icon' />
            <input
              type="text"
              name="nome"
              id="idNome"
              value={pedido.nome}
              /*chamando a função handleChance dentro do input*/
              onChange={handleChange}
            />
          </div>

        </div>
        <div className='content'>
          <label htmlFor="idProduto">Produto</label>
          <div className="input">
            <FaTags className='icon' />
            <input
              type="text"
              name="produto"
              id="idProduto"
              value={pedido.produto}
              /*chamando a função handleChance dentro do input*/
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='content'>
          <label htmlFor="idDesc">Descrição</label>
          <div className="desc">
            <FaPenToSquare className='icon' />
            <textarea
              name="desc"
              id="idDesc"
              value={pedido.desc}
              /*chamando a função handleChance dentro do input*/
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button type="submit" >EDITAR</button>
        </div>
        <div className="deco"></div>
      </form>
    </section>
  );
}
export default EditarPedido;
