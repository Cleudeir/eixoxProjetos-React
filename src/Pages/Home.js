
import Capa from '../Components/Capa';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Style/index.css';
import Imagens from '../Components/Portifolio/Imagens';
import Imagens360 from '../Components/Portifolio/Imagens360';
import Videos from '../Components/Portifolio/Videos';
import Cards from '../Components/Cards';


function Home() {
  const scrolling = ()=>{
    const altura = window.document.querySelector('.Cards--Container').offsetTop-60;
    window.scrollTo(0, altura);
    console.log(altura);
  };
  return (
    <div className="App" >
      <Header />
      <>
        <Capa scrolling={scrolling}/>
        <Imagens/>
        <Videos/>
        <Imagens360/>
        <Cards/>
      </>
      <Footer/>
    </div>
  );
}
export default Home;

