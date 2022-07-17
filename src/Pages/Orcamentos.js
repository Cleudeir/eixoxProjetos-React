
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Style/App.css';
import Orcameto from '../Components/Orcamento';


export default function Orcamentos() {
  return (
    <div className="App" >
      <Header />
      <Orcameto />
      <Footer/>
    </div>
  );
}
