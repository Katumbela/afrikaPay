import React, { useState } from 'react';
import '../components/cabeca.css'
import b from '../img/logo.png';
import logo from '../img/logo1.png';
import katumbela from '../img/katumbela.JPG';
import tavares from '../img/tavares.jpeg';
import gneto from '../img/gneto.jpeg';
import Swal from 'sweetalert2';
import user from '../img/user.png';
import gm from '../img/gm.jpg';
import logo1 from '../img/logo2.png';
import m2 from '../img/m2.jpeg';
import m1 from '../img/m1.webp';
import m4 from '../img/m4.jpeg';
import c1 from '../img/c1.jpeg';
import p2p from '../img/p2p.jpeg';
import s2 from '../img/s2.jpeg';
import cc2 from '../img/cc2.png';
import card from '../img/cardd.png';
import w from '../img/w.jpeg';
import s1 from '../img/s1.png';

import sendd from '../img/send.png';

import purp from '../img/purp.png';
import logoo from '../img/logoo.png';
import Header from '../components/header';
import Footer from '../components/footer';
import db from './firebase';


function Home() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [send, setSend] = useState(false);
  const [send2, setSend2] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSend(true);

    if (nome && email) {
      db.collection('lista_espera').add({
        nome: nome,
        email: email,
        dataEnvio: new Date()
      })
        .then(() => {
          // Dados enviados com sucesso
          setSend(false);
          Swal.fire({
            icon: 'success',
            title: 'Sucesso!',
            text: 'Dados enviados com sucesso, foi adicionado a lista de espera.'
          });
        })
        .catch(error => {
          // Ocorreu um erro ao enviar os dados

          setSend(false);
          Swal.fire({
            icon: 'error',
            title: 'Opah!',
            text: 'Ocorreu um erro ao tentar enviar seus dados, tente novamente mais tarde!.'
          });
        });

      // Limpe os campos do formulário após o envio
      setNome('');
      setEmail('');
    } else {
      // Exiba uma mensagem de erro se os campos não estiverem preenchidos
      console.error('Por favor, preencha todos os campos.');
    }
  };


  const [nomee, setNomee] = useState('');
  const [emaill, setEmaill] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit2 = (e) => {
    e.preventDefault();

    setSend2(true);
    if (nomee && emaill && mensagem) {
      enviarMensagem(nomee, emaill, mensagem);

      setNomee('');
      setEmaill('');
      setMensagem('');
    } else {

    setSend2(false)
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Por favor, preencha todos os campos.'
      });
    }
  };

  const enviarMensagem = (nome, email, mensagem) => {
    db.collection('mensagens')
      .add({
        nome: nome,
        email: email,
        mensagem: mensagem,
        dataEnvio: new Date()
      })
      .then(() => {

    setSend2(false)
        Swal.fire({
          icon: 'success',
          title: 'Obrigado!',
          text: 'Mensagem enviada com sucesso, entraremos em contacto.'
        });
      })
      .catch((error) => {

    setSend2(false)
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: `Erro ao enviar a sua mensagem, por favor tente mais tarde.`
        });
      });
  };

  document.title = 'Pagina Inicial | CryMoney'
  return (


    <div classNameName="">
      <Header />

      {/* <!-- Hero Section --> */}
      <section id="hero" className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="hero-title">Envie dinheiro para qualquer lugar do mundo de forma rápida e segura.</h1>
              <p className="hero-description">Com o CryMoney, você pode transferir dinheiro para qualquer pessoa, em qualquer lugar do mundo, de maneira rápida, segura e sem taxas de transação ou manutenção para usuarios cadastrados na plataforma. Experimente agora mesmo!</p>
              <a href="#waiting-list" className="btn btn-primary">Crie sua conta<i className="bi bi-arrow-right-short"></i></a>
            </div>
            <div className="col-md-6 text-center">
              <img src={purp} alt="Envie dinheiro com o CryMoney" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      //
      <section id='waiting-list' className='bg-afri text-center py-3 py-md-5'>
        <div className='w-lg-50 mx-auto'>
          <h2 className="text-white">Junte-se à Lista de espera</h2>
          <span className='text-white'>Seja um dos primeiros a se cadastrar na plataforma</span>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control my-2 w-lg-50 mx-auto"
              placeholder='Seu Nome completo'
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
            <input
              type="email"
              className="form-control my-2 w-lg-50 mx-auto"
              placeholder='Seu email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <br />
            <button disabled={!nome || !email} className="btn border-white text-white" type="submit">
              {send == false ? <span> Enviar <i className="bi bi-arrow-right-short"></i></span> : <span>Enviando...</span>}
            </button>
          </form>
        </div>

      </section>

      {/* <!-- Features Section --> */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title text-center">Recursos da CryMoney</h2>
          <div className="row">
            <div className="col-md-4 col-lg-3 my-3">
              <div className="feature-box">
                <img src={m1} alt="Transferências Rápidas" className="feature-icon" />
                <h3 className="feature-title">Transferências Rápidas</h3>
                <p className="feature-description">Realize transferências de dinheiro de forma rápida e segura para qualquer lugar do mundo.</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 my-3">
              <div className="feature-box">
                <img src={m4} alt="Pagamentos Digitais" className="feature-icon" />
                <h3 className="feature-title">Pagamentos Digitais</h3>
                <p className="feature-description">Realize pagamentos digitais de forma conveniente e segura em plataformas parceiras.</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 my-3">
              <div className="feature-box">
                <img src={c1} alt="Cartões Virtuais" className="feature-icon" />
                <h3 className="feature-title">Cartões Virtuais</h3>
                <p className="feature-description">Crie cartões virtuais para realizar compras online de forma segura e prática.</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 my-3">
              <div className="feature-box">
                <img src={p2p} alt="Negociações P2P" className="feature-icon" />
                <h3 className="feature-title">Negociações P2P</h3>
                <p className="feature-description">Conecte-se com outros usuários e realize negociações diretas entre partes, sem intermediários.</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 my-3">
              <div className="feature-box">
                <img src={m2} alt="Caixa da Plataforma" className="feature-icon" />
                <h3 className="feature-title">Seja um Caixa</h3>
                <p className="feature-description">Torne-se um caixa da plataforma e ganhe dinheiro realizando transações para outros usuários.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-h bg-light py-3 py-mg-5 ">
        <div className="row container">
          <div style={{ display: 'grid', placeContent: 'center' }} className="col-12 col-sm-6">
            <div className="">
              <h1 className="text-afri my-auto ">

                Gaste Suas cryptos localmente e obtenha um cartão digital para este efeito
              </h1>
              <br />
              <a href='#waiting-list' className="btn btn-primary">Junte-se</a>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <img src={card} className='img- w-100' alt="" />
          </div>
        </div>
      </section>
      <br />
      <br />

      {/* <!-- How It Works Section --> */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="container">  
          <h2 className="section-title text-center text-afri">Como Funciona</h2>
          <div className="row">
            <div className="col-md-4 col-sm-6 text-center my-3">
              <div className="step">
                <img src={w} alt="Passo 1" className="step-icon" />
                <h3 className="step-title">Junte se a lista de espera</h3>
                <p className="step-description">Cadastre-se no CryMoney e crie sua conta gratuitamente.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 text-center my-3">
              <div className="step">
                <img src={cc2} alt="Passo 2" className="step-icon" />
                <h3 className="step-title">Adicione fundos</h3>
                <p className="step-description">Adicione fundos à sua conta usando diferentes métodos de pagamento.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 text-center my-3">
              <div className="step">
                <img src={sendd} alt="Passo 3" className="step-icon" />
                <h3 className="step-title">Envie dinheiro</h3>
                <p className="step-description">Envie dinheiro para qualquer pessoa, em qualquer lugar do mundo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Team Section --> */}
      <section id="team" className="team-section">
        <div className="container">
          <h2 className="section-title text-center text-afri">Nosso Time</h2>
          <div className="row">
            <div className="col-md-4 col-lg-3 my-3">
              <div className="team-member">
                <img src={katumbela} alt="Membro da Equipe" className="team-member-photo" />
                <h3 className="team-member-name">João A. Katombela</h3>
                <p className="team-member-position">CEO & Dev.</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 my-3">
              <div className="team-member">
                <img src={gneto} alt="Membro da Equipe" className="team-member-photo" />
                <h3 className="team-member-name">Josefino Miguel</h3>
                <p className="team-member-position">CFO & Dir. Operacional</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 my-3">
              <div className="team-member">
                <img src={gm} alt="Membro da Equipe" className="team-member-photo" />
                <h3 className="team-member-name">Gonçalo Gonçalves</h3>
                <p className="team-member-position">COO & Design</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 my-3">
              <div className="team-member">
                <img src={tavares} alt="Membro da Equipe" className="team-member-photo" />
                <h3 className="team-member-name">Tavares Evaristo</h3>
                <p className="team-member-position">CTO & Dev.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title text-center text-afri">Entre em Contato</h2>
          <p className="section-description text-center">Estamos disponíveis para esclarecer suas dúvidas e receber seus feedbacks.</p>
          <div className="row">
            <div className="col-md-6">
            <form onSubmit={handleSubmit2}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Seu nome"
          value={nomee}
          onChange={(e) => setNomee(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Seu e-mail"
          value={emaill}
          onChange={(e) => setEmaill(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="5"
          placeholder="Sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        ></textarea>
      </div>
      <button disabled={!nomee || !emaill || !mensagem} type="submit" className="btn btn-primary">
      {send2 == false ? <span> Enviar mensagem<i className="bi bi-arrow-right-short"></i></span> : <span>Enviando...</span>}
           
      </button>
    </form>
            </div>
            <div className="col-md-6">
              <div className="contact-info">
                <br />
                <br />
                <h3 className='ms-4'>Informações de Contato</h3>
                <ul>
                  <li><i class="bi bi-geo-alt"></i> Rua do Mufulama, Talatona, Luanda - Angola</li>
                  <li><i class="bi bi-telephone"></i> <a className='text-dark' style={{ textDecoration: 'none' }} href="tel:+244928134249">+244 928 134 249</a></li>
                  <li><i class="bi bi-envelope"></i> <a className='text-dark' style={{ textDecoration: 'none' }} href="mailto:info@Crymoney.com">info@Crymoney.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />

      <Footer />


    </div>
  );
}

export default Home;
