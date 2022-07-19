import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './Pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route component={()=>{
            <div>Erro 404</div>;
          }}/>
        </Switch>
        </BrowserRouter>
    </React.StrictMode>,
);
