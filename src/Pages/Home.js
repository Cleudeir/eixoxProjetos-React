
import Capa from '../Components/Capa';
import ComoFunciona from '../Components/ComoFunciona';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Style/App.css';
import {useEffect, useState} from 'react';
import Orcameto from '../Components/Orcamento';
import DadosUser from '../Components/DadosUser';
import Portifolio from '../Components/Portifolio';

function Home() {
  const scrolling = ()=>{
    const altura = window.document.querySelector('.Protifolio').offsetTop-60;
    window.scrollTo(0, altura);
    console.log(altura);
  };
  useEffect(()=>{
    // window.document.querySelector('.miniCard').scrollIntoView()
  }, []);

  return (
    <div className="App" >
      <Header />
      <>
        <Capa scrolling={scrolling}/>
        <Portifolio/>
      </>
      <Footer/>
    </div>
  );
}
export default Home;

