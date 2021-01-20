import React , {useState, useEffect} from 'react'; 
import './evento.css';
import {Link} from 'react-router-dom'
import Firebase from '../../config/Firebase'
function EventoCard({key, img, titulo, detalhes, vizualizacoes}){
    const [urlImagem, setUrlImagem] = useState();
   useEffect(()=>{
    Firebase.storage().ref(`img/${img}`).getDownloadURL().then(url => setUrlImagem(url));
}, [urlImagem]);
   
    return(
        <div className="col-md-3 col-sm-12">
            <img  src={urlImagem} className="card-img-top img-cartao" alt="imagem do evento"></img>

            <div className="card-body">
                <h5>{titulo}</h5>
                <p className="card-text text-justify">{detalhes}</p>              <div className="row rodape-card d-flex align-items-center">
                    
                    <div className="col-6 ">
                        <Link to="#" className="btn btn-sm btn-delalhes">+ detalhes</Link>
                    </div>
                    
                    <div className="col-6 text-right">
                        <i className="fas fa-eye"><span>{vizualizacoes}</span></i>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default EventoCard