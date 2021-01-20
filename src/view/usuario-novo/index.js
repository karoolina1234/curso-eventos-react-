import React, {useState} from 'react'
import firebase from '../../config/Firebase';
import 'firebase/auth';
import './usuario-novo.css';
import Navbar from '../../components/navbar/index'

function NovoUsuario (){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState(); 
    const [carregando, setCarregando] = useState();


    function cadastrar(){
        setCarregando(1);
        setMsgTipo(null);

        if(!email || !senha){
            setMsgTipo('erro')
            setMsg("Você precisa informar o email e senha para fazer o cadastro")
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado =>{
            setMsgTipo('sucesso')
            setCarregando(0)
        }).catch(erro=>{
            setCarregando(0)
            setMsgTipo('erro')
            switch(erro.message){
                case 'Password should be at least 6 characters':
                    setMsg("A senha deve ter pelo menos 6 caracteres");
                    break;
                case 'The email address is already in use by another account.':
                    setMsg("Email ja esta sendo usado por outro usuario");
                    break
                case 'The email address is badly formatted.':
                      setMsg("Formato do e-mail inválido");
                      break;
                default:
                       setMsg("Não foi possivel cadastrar tente novamente mais tarde");
                       break;
            }
        })
    }
    return(
        <div> <Navbar/>
       <div className="form-cadastro">                                                   
           <form className="text-center form-login mx-auto mt-5">
               <h1 className="h3 mb-2 text-black font-weight-bold">Cadastro</h1>
                
                <input  onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="E-mail"/>
                <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha"/>
                {
                    carregando ? <div class="spinner-border text-danger" role="status"><span class="visually-hidden"></span></div>
                    : <button onClick={cadastrar} type="button"  className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar </button>
                }
               
                
                <div className="msg-login text-center my-4">
                    {msgTipo === 'sucesso' && <span><strong>Usuário Cadastrado!</strong></span>}
                    { msgTipo === 'erro' && <span><strong>{msg}</strong></span>}
                 </div>
                  </form>

                  </div>
       </div>
    )

}

export default NovoUsuario;