import React from 'react';
import '../Style/Cards.css'
import Card from './Orcamento/Card';
import Design from './Orcamento/projetos/_Design';
import Arquitetonico from './Orcamento/projetos/_Arquitetonico';
import Estrutural from './Orcamento/projetos/_Estrutural';
import Hidrossanitario from './Orcamento/projetos/_Hidrossanitario';
import InstalacaoEletrica from './Orcamento/projetos/_InstalacaoEletrica';

const Cards = () =>{
  return (
    <div className='Cards--Container'>
    {Card(Design())}
    {Card(Arquitetonico())}
    {Card(Estrutural())}
    {Card(Hidrossanitario())}
    {Card(InstalacaoEletrica())}
    </div>
  );
};
export default Cards;
