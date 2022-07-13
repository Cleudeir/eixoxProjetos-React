import React from 'react';
import '../Style/ComoFunciona.css';
import {
  Link,
} from 'react-router-dom';

const ComoFunciona = ({exibir, comoDeseja}) => {
  return (
    <div className='ComoFunciona'>
      <h1>COMO FUNCIONA</h1>
      <div className='Card--container'>
        <Link to='/projetos' className='Card'>
          <img src={'https://img.icons8.com/ios/452/1-circle.png'} alt={''}/>
          <div>
            <h3>Veja nossos projetos</h3>
            <h4>clique aqui</h4>
          </div>
        </Link>
        <div className='Card' onClick={ ()=>{
          comoDeseja(true);
        } }>
          <img src={'https://img.icons8.com/ios/452/2-circle.png'} alt={''}/>
          <div>
            <h3>Faça seu orçamento preliminar</h3>
            <h4>clique aqui</h4>
          </div>
        </div>
        <a href='https://api.whatsapp.com/send?phone=553193281399' className='Card'>
          <img src={'https://img.icons8.com/ios/452/3-circle.png'} alt={''}/>
          <div>
            <h3>Contate-nos pelo WhatsApp</h3>
            <h4>clique aqui</h4>
          </div>
        </a>

      </div>
      <div className='Card--text'>
        <h3>Trabalhamos com projetos residenciais, cormerciais e reformas.
        </h3>
        <h3>Orçamos seu projeto em 01 dia útil, sem custo!</h3>
      </div>
    </div>
  );
};
export default ComoFunciona;
