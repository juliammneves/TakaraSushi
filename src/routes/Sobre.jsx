import '../styles/sobre.css'
import sobre from "../images/sobre1.jpg"

function Conteudo() {
  return (
    <div className='sobre-pag'>
      <img src={sobre} alt="" />
      <div className="texto">
        <h1>Nossa Equipe de Desenvolvimento</h1>
        <p>Conheça as mentes criativas por trás da nossa plataforma. A equipe de desenvolvimento do nosso site é composta por profissionais talentosos dedicados a trazer a melhor experiência para você. Aqui estão alguns dos membros que trabalharam incansavelmente para tornar nosso site possível:</p>
        <div className="devs">
          <p>Júlia Marques Mendes das Neves</p>
          <p>Matheus Gusmão Aragão</p>
          <p>Gustavo Calce da Silva</p>
          <p>Gabriel Diegues Figueiredo Rocha</p>
          <p>Arthur Petrin</p>
        </div>
      </div>
    </div>
  )
}
export default Conteudo

/* 550638 - Gustavo Calce da Silva
98680 - Júlia Marques Mendes das Neves
550826 - Matheus Gusmão Aragão
98735 - Arthur Petrin
550788 - Gabriel Diegues Figueiredo Rocha */