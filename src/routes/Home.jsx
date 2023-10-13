import { useState } from 'react';
import styles from '../styles/estilo.css';
import '../styles/home.css';
import sushi1 from '../images/sushi6_preview_rev_1_auto_x2-PhotoRoom.png-PhotoRoom.png';
import sushi2 from '../images/sushi63.png';
import sobre from '../images/sobre.jpg';
import prato from '../images/prato1.jpg'
import prato1 from '../images/prato2.jpg'
import prato2 from '../images/prato3.jpg'
import prato3 from '../images/prato12.jpeg'
import prato4 from '../images/prato9.jpeg'
import prato5 from '../images/prato17.jpeg'
import prato6 from '../images/prato7.jpeg'
import prato7 from '../images/prato8.jpeg'
import { BsHandbag } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';


function Home() {
  const [slidePreview, setSlidePreview] = useState(1);

  /*criando o objeto de imagens*/
  const imagens = [
    { id: '1', image: './src/images/galeria1.jpeg' },
    { id: '2', image: './src/images/galeria2.jpeg' },
    { id: '3', image: './src/images/galeria3.jpeg' },
    { id: '4', image: './src/images/galeria4.jpeg' },
    { id: '5', image: './src/images/galeria5.jpeg' },
  ];

  return (
    <>
      <section className='hero'>
        <div className="texto">
          <div className="titulo">
            <div className="japones">
              <p>宝</p>
              <p>寿</p>
              <p>司</p>
            </div>
            <p className='slogan'>和食の宝</p>
            <h1>Explore o delicioso mundo da culinária japonesa</h1>
            <p>Desde 1984</p>
          </div>
          <p>Explore nossa fusão única de tradição e inovação japonesa. Nossos talentosos chefs e ingredientes frescos trazem o Japão até você. De sushis perfeitos a pratos quentes deliciosos, a jornada culinária inicia aqui</p>
          <button>Peça agora</button>
        </div>
        <img className='s1 sushihero' src={sushi1} alt="" />
        <img className='s2 sushihero' src={sushi2} alt="" />
      </section>

      <section className='sobre'>
        <img src={sobre} alt="" />
        <div className="texto">
          <p className='japones'>私たちについて</p>
          <h1>Sobre nós</h1>
          <p>Bem-vindo ao Takara Sushi, onde a tradição culinária japonesa encontra a inovação moderna. Há mais de uma década, nosso restaurante tem orgulho de servir pratos autênticos e saborosos, preparados por nossos talentosos chefs que dedicam suas vidas à arte da culinária japonesa.<br /><br />

            Nossa paixão pelo sushi e pela gastronomia japonesa é evidente em cada detalhe do nosso menu, desde os frescos sashimis até os rolos de sushi cuidadosamente elaborados. Nosso compromisso com a qualidade e o sabor autêntico é o que nos diferencia.<br /><br />

            No Takara Sushi, nosso objetivo é proporcionar a você uma experiência inesquecível, onde a hospitalidade japonesa se une à excelência culinária. Estamos ansiosos para compartilhar nossa herança gastronômica com você e tornar cada refeição uma jornada de sabores e cultura japonesa. Obrigado por escolher o Takara Sushi.</p>
        </div>
      </section>

      <section className="oferta">
        <h1>Ofertas</h1>
        <div className="cards">
          <div className="card">
            <img src={prato} alt="" />
            <h2>Takarabako</h2>
            <p>Uma caixa de tesouros de sushi (Uma variedade de sushis deliciosos, preparados com ingredientes frescos e de alta qualidade)</p>
            <div className="custo">
              <p>R$59,90</p>
              <div className="icon">
                <BsHandbag />
              </div>
            </div>
          </div>
          <div className="card">
            <img src={prato1} alt="" />
            <h2>Niwa</h2>
            <p>Um delicioso jardim de sushi (Uma variedade de sushis frescos e deliciosos, servidos em uma apresentação elegante e sofisticada)</p>
            <div className="custo">
              <p>R$55,90</p>
              <div className="icon">
                <BsHandbag />
              </div>
            </div>
          </div>
          <div className="card">
            <img src={prato2} alt="" />
            <h2>Hanataba</h2>
            <p>Um buquê de sushi (Uma variedade de sushis deliciosos, apresentados em uma forma delicada e elegante, como um buquê de flores.)</p>
            <div className="custo">
              <p>R$57,50</p>
              <div className="icon">
                <BsHandbag />
              </div>
            </div>
          </div>
        </div>
        <div className="deco"></div>
      </section>

      <section className="menu">
        <div className="left">
          <p className='jap'>私たちの芸術</p>
          <h1>Menu</h1>
          <div className="japones">
            <p>メ</p>
            <p>ニ</p>
            <p>ュ</p>
            <p>ー</p>
          </div>
          <p>Explore nossa eclética seleção de pratos autênticos da culinária japonesa, cuidadosamente elaborados para cativar os seus sentidos. Desde os sushis frescos e sashimis até os pratos quentes saborosos, nossa variedade de sabores e ingredientes frescos proporcionará uma experiência gastronômica inesquecível. Dê uma olhada em nosso menu e deixe-se levar em uma jornada de delícias japonesas.</p>
          <Link to="conteudo">Ver mais</Link>
        </div>
        <div className="right">
          <div className="prato m1">
            <h2>Dentō</h2>
            <span>R$89,90</span>
            <img src={prato3} id='p1' alt="" />
          </div>
          <hr />
          <div className="prato m2">
            <h2>Bōken</h2>
            <span>R$75,90</span>
            <img src={prato4} id='p2' alt="" />
          </div>
          <hr />
          <div className="prato m3">
            <h2>Zenyaku</h2>
            <span>R$110,45</span>
            <img src={prato5} id='p3' alt="" />
          </div>
          <hr />
          <div className="prato m4">
            <h2>Roman</h2>
            <span>R$98,50</span>
            <img src={prato6} id='p4' alt="" />
          </div>
          <hr />
          <div className="prato m4">
            <h2>Tabi</h2>
            <span>R$79,99</span>
            <img src={prato7} id='p4' alt="" />
          </div>
        </div>
      </section>

      <section className="galeria">
        <h1>Nossa Galeria</h1>
        <Swiper
          slidePreview={slidePreview}
          pagination={{ clickable: true }}
          className='swiper'
        >
          {imagens.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="Slides" className={styles.slideItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className='contato'>
        <h1>Entre em contato!</h1>
        <p>Estamos ansiosos para ouvir de você! Se você tiver alguma dúvida, comentário ou desejar fazer uma reserva, não hesite em entrar em contato conosco. Nossa equipe amigável está pronta para ajudar e tornar a sua experiência conosco ainda melhor. Esperamos vê-lo em breve no nosso restaurante!</p>
        <button>Fale Conosco</button>
        <p className="japones">ご連絡ください</p>
      </section>

    </>
  );
}
export default Home;
