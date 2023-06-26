import React, { useState } from 'react';

const Footer = () => {

  return (

    <>

     
  {/* <!-- Footer Section --> */}
  <footer class="footer-section">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-lg-6">
          <h3 class="footer-title">Sobre Nós</h3>
          <p class="foo footer-description">Somos a CryMoney, uma equipe apaixonada por criptomoedas, inovação financeira e melhorias na forma como as pessoas utilizam as criptos no mercado local. Com nossa expertise e dedicação, oferecemos uma solução abrangente e inovadora. Junte-se a nós nesta jornada emocionante rumo ao futuro das transações financeiras.</p>
        </div>
        <div class="col-md-4 col-lg-3">
          <h3 class="footer-title">Links Úteis</h3>
          <ul class="foo footer-links">
            <li><a href="#features">Recursos</a></li>
            <li><a href="#how-it-works">Como Funciona</a></li>
            <li><a href="#team">Time</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
        <div class="col-md-4 col-lg-3">
          <h3 class="footer-title">Contatos</h3>
          <ul class="foo footer-contact">
            <li><i class="bi bi-geo-alt"></i> Rua do Mufulama, Talatona, Luanda - Angola</li>
            <li><i class="bi bi-telephone"></i> <a className='text-dark' style={{textDecoration:'none'}} href="tel:+244928134249">+244 928 134 249</a></li>
            <li><i class="bi bi-envelope"></i> <a className='text-dark' style={{textDecoration:'none'}} href="mailto:info@Crymoney.com">info@Crymoney.com</a></li>
          </ul>
        </div>
        <div className="col-12 text-center mt-4 mt-lg-5">
            <div className="text-seocondary foo">&copy; 2023 - CryMoney</div>
        </div>
      </div>
    </div>
  </footer>


    </>
  );
};

export default Footer;
