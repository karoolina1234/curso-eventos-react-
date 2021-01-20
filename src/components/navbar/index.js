import React from 'react'; 
import './navbar.css';
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

function Navbar() {
  const dispatch = useDispatch()
   return(
<div>
<nav className="navbar navbar-expand-lg ">
 
    <span className="navbar-brand">
    Eventos</span>
    
        
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
        </li>
{     
     useSelector(state=> state.usuarioLogado)>0?


     <>
     <Link to="/addEvento" className="nav-link active" aria-current="page">Publicar evento</Link>
     <Link to="/" className="nav-link active" aria-current="page">Meus eventos</Link>
   
     <Link onClick={() => dispatch({type:"LOG_OUT"})} className="nav-link active" aria-current="page">Sair</Link>
  
   </>:
        <>
        
          <Link to="/" className="nav-link active" aria-current="page">Login</Link>
        
          <Link to="/cadastro" className="nav-link active" aria-current="page">Cadastro</Link>
       
        </>

       

}
      </ul>
  </div>
</nav>
</div>
   )
}

export default Navbar;