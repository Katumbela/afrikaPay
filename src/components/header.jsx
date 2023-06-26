import React, { useState } from 'react';
import logo from '../img/logoo.png'

const Header = () => {

  return (

    <>

      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand"  href="#">
            <img src={logo} style={{height: '2.5em'}} alt="Crymoney Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">Recursos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#how-it-works">Como Funciona</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">Time</a>
              </li>
              <li className="nav-item">
                <a className=" btn btn-outline-primary" href="#waiting-list">Entrar</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link btn btn-primary text-white" href="#waiting-list">Criar Conta</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Header;
