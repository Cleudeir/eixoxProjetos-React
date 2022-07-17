import './Style/index.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './Pages/Home';
import Projetos from './Pages/Projetos';
import Orcamentos from './Pages/Orcamentos';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/projetos" component={Projetos}/>
        <Route path="/orcamentos" component={Orcamentos}/>
        <Route component={()=>{
          <div>Erro 404</div>;
        }}/>
      </Switch>
    </BrowserRouter>
  );
}
