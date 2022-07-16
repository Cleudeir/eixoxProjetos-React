import React from 'react';
import '../../Style/Orcamento.css';
import {useState, useEffect} from 'react';
import Card from './Card';
import Arquitetonico from './projetos/_Arquitetonico';
import Design from './projetos/_Design';
import Estrutural from './projetos/_Estrutural';
import Hidrossanitario from './projetos/_InstalacaoEletrica';
import InstalacaoEletrica from './projetos/_InstalacaoEletrica';
const Orcameto = () =>{
  const [areaConsruir, setAreaConsruir] = useState(60);

  function miniCard(value){

    return(
      <div className='miniCard' onClick={()=>{
        setAreaConsruir(value)
       }}>
        <h4>{value}m²</h4>
    </div>
    )
  }

  return (
    (
    <>
      <div className='Preco'>
         {miniCard(30)}
         {miniCard(60)} 
         {miniCard(90)}  
      </div>
      <section className='Preco'>
          {Card(Arquitetonico({areaConsruir}))}
          {Card(Design({areaConsruir}))}
          {Card(Estrutural({areaConsruir}))}
          {Card(Hidrossanitario({areaConsruir}))}
          {Card(InstalacaoEletrica({areaConsruir}))}
      </section>
    </>
    )
  );
};
export default Orcameto;
