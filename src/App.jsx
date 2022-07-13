import './Style/index.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './Pages/Home';
import Projetos from './Pages/Projetos';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/projetos" component={Projetos}/>
        <Route component={()=>{
          <div>Erro 404</div>;
        }}/>
      </Switch>
    </BrowserRouter>
  );
}
