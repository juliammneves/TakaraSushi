import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';


function ExcluirPedido() {
  /*Hooks- useParams e Navigate */
  const { id } = useParams();
  const navigate = useNavigate();

  const recPedidoListaById = ListaPedidos.filter((item) => item.id == id);
  /*Hook-useState */
  const [pedido] = useState({
    id: recPedidoListaById[0].id,
    nome: recPedidoListaById[0].nome,
    desc: recPedidoListaById[0].desc,
    produto: recPedidoListaById[0].produto,
  });
  /*funções */
  const handleExclude = (event) => {
    event.preventDefault();
    let indice;
    ListaPedidos.forEach((item, index) => {
      if (item.id == pedido.id) {
        indice = index;
      }
    });
    ListaPedidos.splice(indice, 1);
    navigate('/login');
  };

  return (
    <section className='produtos'>
      <h1>Excluir Pedido</h1>
      <div className="excluir">
        <div className='info'>
          <p><span>Nome:</span> {pedido.nome}</p>
          <p><span>Produto:</span> {pedido.produto}</p>
          <p className='excluir-desc'><span>Descrição:</span> {pedido.desc}</p>
        </div>
        <div className='btns'>
          {/*chamando a função handleExclude dentro do botão*/}
          <button onClick={handleExclude} >
            EXCLUIR
          </button>
          {/*chamando o navigate para voltar para a tela produtos */}
          <button onClick={() => navigate('/login')}>
            CANCELAR
          </button>
        </div>
        <div className="deco"></div>
      </div>
    </section>
  );
}
export default ExcluirPedido;
