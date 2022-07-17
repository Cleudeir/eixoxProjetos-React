
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
  const [areas, setAreas] = useState(false);
  const scrolling = ()=>{
    const altura = window.document.querySelector('.Protifolio').offsetTop-60;
    window.scrollTo(0, altura);
    console.log(altura);
  };
  const PassarAreas = (props)=>{
    console.log(props);
    setAreas(props);
  };
  const comoDeseja =(props)=>{
    setExibirComoDeseja(props);
    setTimeout(() => {
      const altura = window.document.querySelector('.DadosUser').offsetTop-60;
      window.scrollTo(0, altura);
    }, 100);
  };
  useEffect(()=>{
    setAreas({areaConsruir: 60, areaTerreno: 240});
  }, []);

  return (
    <div className="App" >
      <Header />
      <>
        <Capa scrolling={scrolling}/>
        <Portifolio/>
        <ComoFunciona e comoDeseja={comoDeseja}/>
        {areas && <Orcameto areaConsruir={areas.areaConsruir} areaTerreno={areas.areaTerreno}/>}
      </>
      <Footer/>
    </div>
  );
}
export default Home;

