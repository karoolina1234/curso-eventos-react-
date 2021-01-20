import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import store from '../src/store/index';
import { Provider }  from 'react-redux'
/*Paginas*/
import RecuperaSenha from './view/usuario-recuperar-senha/index'
import Login from './view/login/index';
import Home from './view/home/index'
import Cadastro from './view/usuario-novo/index'
import CadastroEvento from './view/evento-cadastro/index'
function App() {
  return (
<Provider store={store}>
  <Router>
    <Route exact path="/" component={Login} />
    <Route exact path="/addEvento" component={CadastroEvento} />
    <Route exact path="/cadastro" component={Cadastro} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/recupera" component={RecuperaSenha} />
  </Router>
 </Provider>
  );
}

export default App;
 