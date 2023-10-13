import { useState } from 'react';
import { ListaProdutos } from '../components/ListaProdutos';
/* É através dele que se conseguirá fazer a navegação entre as diferentes rotas de uma aplicação. Declaramos ele atribuindo o hook a uma variável e depois invocando-a, passando a rota do destino como parâmetro obrigatório, conforme exemplo: */
import { useNavigate } from 'react-router-dom';
import { FaPen, FaPenToSquare, FaTags } from 'react-icons/fa6'


function InserirProduto() {
  /*Hooks - navigate */
  const navigate = useNavigate();

  //Gerando um novo ID
  let novoId = ListaProdutos[ListaProdutos.length - 1].id + 1;

  /*Hooks - useState */
  const [produto, setProduto] = useState({
    id: novoId,
    nome: '',
    desc: '',
    valor: '',
  });

  /*funções */

  const handleSubmit = (e) => {
    /*serve para prevenir o comportamento padrão de um evento */
    e.preventDefault();
    /*puxa tudo que estiver na lista de produtos */
    ListaProdutos.push(produto);
    navigate('/produtos');
  };

  const handleChange = (e) => {
    /*serve para prevenir o comportamento padrão de um evento */
    e.preventDefault();
    //Destructuring
    const { name, value } = e.target;
    //Através da função set do useState, vamos adicionar o valor(value), na propriedade name que é a mesma que foi declarada no useState produto.
    //Utilize o SPREAD, para tornar a função mais simples!!
    setProduto({ ...produto, [name]: value });
  };

  return (
    <section className='produtos'>
      <h1>Cadastro de Produtos</h1>
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
              value={produto.nome}
              placeholder='Digite aqui...'
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
              value={produto.desc}
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
export default InserirProduto;
