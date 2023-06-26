import React from 'react';
import '../components/cabeca.css'
import b from '../img/logo.png';
import Header from '../components/header';
import Footer from '../components/footer';

function Dash() {
  document.title ='Dashboard CryMoney | CryMoney'
  return (
    <div classNameName="">
      <Header />
      
      <center><h2>Bem vindo ao seu dashboard $Usuario</h2></center>
  <br />
  
  <Footer />


    </div>
  );
}

export default Dash;
