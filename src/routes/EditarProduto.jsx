/* useParams -Ele serve para receber parâmetros pela rota. Quando vamos criar uma rota, é possível fazer que ela receba parâmetros */
import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import { useState } from 'react';
import { FaPen, FaPenToSquare, FaTags } from 'react-icons/fa6'
function EditarProduto() {
  //Recuperando o ID do produto selecionado com useParams()
  const { id } = useParams();
  //Utilizando o useNavigate para fazer um redirect
  const navigate = useNavigate();

  /*Filter-para filtrar elementos de um array de dados antes de renderizá-los em uma lista */
  const recProdutoListaById = ListaProdutos.filter((item) => item.id == id);

  /*Hook -useState*/

  const [produto, setProduto] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    desc: recProdutoListaById[0].desc,
    valor: recProdutoListaById[0].valor,
  });

  /*funções */

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    /*metodo slice- vai dividir o array com base no indice e no objeto */
    ListaProdutos.splice(indice, 1, produto);
    /*chamar a tela produtos */
    navigate('/produtos');
  };

  const handleChange = (event) => {
    /*desestruturando */
    const { name, value } = event.target;
    /*pegando o useState e fazendo um spred no produto pegando o name e value do input */
    setProduto({ ...produto, [name]: value });
  };

  return (
    <section className='produtos'>
      <h1>Editar produto</h1>
      {/*chamando a função handleSubmit dentro do form */}
      <form onSubmit={handleSubmit}>
        <div className='content'>
          <input
            type="hidden"
            name="id"
            value={produto.id}
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
              value={produto.nome}
              /*chamando a função handleChance dentro do input*/
              onChange={handleChange}
            />
          </div>

        </div>
        <div className='content'>
          <label htmlFor="idValor">Valor</label>
          <div className="input">
            <FaTags className='icon' />
            <input
              type="text"
              name="valor"
              id="idValor"
              value={produto.valor}
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
              value={produto.desc}
              /*chamando a função handleChance dentro do input*/
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button type="subtmit" >EDITAR</button>
        </div>
        <div className="deco"></div>
      </form>
    </section>
  );
}
export default EditarProduto;
