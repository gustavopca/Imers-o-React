import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      
      <p>
        Saiba mais em 
        {' '}
        <a href="http://www.portaldorugby.com.br/">
          Portal do Rugby
        </a>
      </p>

      <p>Criado com base na imersão React da Alura</p>
    </FooterBase>
  );
}

export default Footer;
