import { useState } from 'react';
import { ListaPedidos } from '../components/ListaPedidos';
/* É através dele que se conseguirá fazer a navegação entre as diferentes rotas de uma aplicação. Declaramos ele atribuindo o hook a uma variável e depois invocando-a, passando a rota do destino como parâmetro obrigatório, conforme exemplo: */
import { useNavigate } from 'react-router-dom';
import { FaPen, FaPenToSquare, FaTags } from 'react-icons/fa6'


function InserirPedido() {
  /*Hooks - navigate */
  const navigate = useNavigate();

  //Gerando um novo ID
  let novoId = ListaPedidos[ListaPedidos.length - 1].id + 1;

  /*Hooks - useState */
  const [pedido, setPedido] = useState({
    id: novoId,
    nome: '',
    desc: '',
    produto: '',
  });

  /*funções */

  const handleSubmit = (e) => {
    /*serve para prevenir o comportamento padrão de um evento */
    e.preventDefault();
    /*puxa tudo que estiver na lista de pedidos */
    ListaPedidos.push(pedido);
    navigate('/pedidos');
  };

  const handleChange = (e) => {
    /*serve para prevenir o comportamento padrão de um evento */
    e.preventDefault();
    //Destructuring
    const { name, value } = e.target;
    //Através da função set do useState, vamos adicionar o produto(value), na propriedade name que é a mesma que foi declarada no useState pedido.
    //Utilize o SPREAD, para tornar a função mais simples!!
    setPedido({ ...pedido, [name]: value });
  };

  return (
    <section className='produtos'>
      <h1>Cadastro de pedidos</h1>
      {/*chando a função handleSubmit dentro do form */}
      <form onSubmit={handleSubmit}>
        <div className='content'>
          <label htmlFor="idNome">Nome</label>
          <div className="input">
            <FaPen className='icon' />
            <input
              type="text"
              name="nome"
              id="idNome"
              value={pedido.nome}
              placeholder='Digite aqui...'
              /*chamando a função handleChance dentro do input*/
              onChange={handleChange}
            />
          </div>

        </div>
        <div className='content'>
          <label htmlFor="idproduto">Produto</label>
          <div className="input">
            <FaTags className='icon' />
            <input
              type="text"
              name="produto"
              id="idProduto"
              value={pedido.produto}
              placeholder='Digite aqui...'
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
              placeholder='Digite aqui...'
              /*chamando a função handleChance dentro do input*/
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button type="subtmit" >CADASTRAR</button>
        </div>
        <div className="deco"></div>
      </form>
    </section>
  );
}
export default InserirPedido;
