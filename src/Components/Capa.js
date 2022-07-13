import React from 'react';
import '../Style/Capa.css';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import {useState} from 'react';
const Capa = ({scrolling}) =>{
  const [opacity, setOpacity]= useState(0);
  const opacidade = ()=>{
    setOpacity(1);
  };
  setTimeout(opacidade, 5000);
  return (
    <div className='Capa'>

      <video autoPlay muted playsInline poster="./video/roca_1080p.jpg">
        <source src="./video/roca_1080p.mp4" type="video/mp4"/>
      </video>
      <div className='Capa--info' style={{opacity: opacity, cursor: 'pointer'}} onClick={scrolling}>
        <h3>VEJA MAIS</h3>
        <KeyboardArrowDownOutlinedIcon className='Capa--seta--down' ></KeyboardArrowDownOutlinedIcon>
      </div>

    </div>
  );
};
export default Capa;
