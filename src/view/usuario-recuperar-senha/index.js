import React, {useState} from 'react'
import './recuperaSenha.css';
import firebase from '../../config/Firebase';
import 'firebase/auth';
import {Link, Redirect} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Navbar from '../../components/navbar/index'


function RecuperaSenha() {
    const [email, setEmail]  = useState();
    const [msg, setMsg] = useState();

    function recupSenha() {
        firebase.auth().sendPasswordResetEmail(email).then(resultado =>{
            setMsg('Enviamos um link no seu e-mail para você redefinir sua senha')
        }).catch(erro=>{
            setMsg('verifique se o e-mail esta correto')
        })
    }
    return(
       <>
       <Navbar/>

       <div className="form-cadastro">
            <h1 className="text-center">Recuperar senha</h1>

            <form className="text-center form-login mx-auto mt-5">
                <input onChange={e=>setEmail(e.target.value)} type='email' className='form-control my-2' placeholder="Informe seu e-mail"/>
                <div className="msg my-5">
                    <span className="text-center">{msg}</span>
                </div>
                <button onClick={recupSenha} className="btn btn-recuperar btn-lg btn-block ">Recupera senha</button>
            </form>
       </div>
       
       </>
    )
    
}


export default RecuperaSenha;