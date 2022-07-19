
import Capa from '../Components/Capa';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Style/index.css';
import '../Style/Orcamento.css'
import {useEffect, useState} from 'react';
import Imagens from '../Components/Portifolio/Imagens';
import Imagens360 from '../Components/Portifolio/Imagens360';
import Videos from '../Components/Portifolio/Videos';
import Card from '../Components/Orcamento/Card';
import Design from '../Components/Orcamento/projetos/_Design';
import Arquitetonico from '../Components/Orcamento/projetos/_Arquitetonico';
import Estrutural from '../Components/Orcamento/projetos/_Estrutural';
import Hidrossanitario from '../Components/Orcamento/projetos/_Hidrossanitario';
import InstalacaoEletrica from '../Components/Orcamento/projetos/_InstalacaoEletrica';

function Home() {
  const scrolling = ()=>{
    const altura = window.document.querySelector('.Preco--Container').offsetTop-60;
    window.scrollTo(0, altura);
    console.log(altura);
  };
  return (
    <div className="App" >
      <Header />
      <>
        <Capa scrolling={scrolling}/>
        <div className='Preco--Container'>
        {Card(Design())}
        {Card(Arquitetonico())}
        {Card(Estrutural())}
        {Card(Hidrossanitario())}
        {Card(InstalacaoEletrica())}
        </div>
        <Imagens/>
        <Imagens360/>
        <Videos/>
      </>
      <Footer/>
    </div>
  );
}
export default Home;

