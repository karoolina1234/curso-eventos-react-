import React, {useState} from 'react'; 
import './login.css';
import firebase from '../../config/Firebase';
import 'firebase/auth';
import {Link, Redirect} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

function Login(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    
    const dispatch = useDispatch()

    function logar(){ 
       firebase.auth().signInWithEmailAndPassword(email, senha).then( resultado =>{
            setMsgTipo('sucesso')
            dispatch({type: 'LOG_IN', usuarioEmail: email})
       }).catch(erro =>{    
           setMsgTipo('erro')

       });
      
    } 
  
    return(
    <div className="login-content d-flex align-items-center">
       {
            useSelector(state=> state.usuarioLogado)>0?<Redirect to="/home"/>:null
       } 
       
        <form className="form-signin mx-auto">
            <div className="text-center mb-4">
                <h1 className="text-white font-weigth-bold">Login</h1>
           
           
            </div>


   
                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2"  placeholder="email"/>       
                <input onChange={(e) => setSenha(e.target.value)}type="password" id="inputPassword" className="form-control my-2" placeholder="senha"/>
           
            <button className="btn btn-lg btn-block btn-login"onClick={logar} type="button">Logar</button>
            <div className="msg-login text-white text-center my-4">
                
                {
                    msgTipo === 'sucesso' &&
                     <span><strong>você está conectado </strong></span>}
                       { msgTipo === 'erro' &&
                     <span><strong>verifique se a senha ou usuário estão corretos!</strong></span>
               
                }
                 </div>
            <div className="opcoes-login text-center">
                <Link to="/recupera" className="mx-2">Recuperar senha</Link>
                <span className="text-white">&#9733;</span>
                <Link to="/cadastro" className="mx-2">Quero cadastrar</Link>
            </div>
            
        </form>
        </div>
    );
}

export default Login;