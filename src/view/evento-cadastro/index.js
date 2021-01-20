import React, {useState} from 'react'; 
import './evento.css';
import firebase from '../../config/Firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom'
import Navbar from '../../components/navbar/index'
import {useSelector} from 'react-redux'

function CadastroEvento() {
    const [msgTipo, setMsgTipo] = useState();
    const [titulo, setTitulo] = useState();
    const [tipo, setTipo] = useState();
    const [detalhes, setDetalhes] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [foto , setFoto,] = useState();
    // const [usuarioEmail, setUsuarioEmail] = useState();

    const storage = firebase.storage();
    const db = firebase.firestore();

    const usuarioEmail = useSelector(state => state.usuarioEmail);    
    function cadastrar(){
        setMsgTipo(null);
        
        
        storage.ref(`img/${foto.name}`).put(foto).then(() => {
            db.collection('eventos').add({
                titulo: titulo,
                tipo: tipo,
                detalhes: detalhes,
                data: data,
                hora: hora,
                usuario: usuarioEmail, 
                visualizacoes: 0,
                foto: foto.name,
                publico: 1,
                criacao: new Date()
            }).then(() => {
                setMsgTipo('sucesso');
                
            }).catch(erro => {
                setMsgTipo('erro');
              
        });
    });
}
    return (
        <>
        <Navbar/>
        <div className="col-12">
            <div className="row">
                <h3 className="mx-auto mt-3">Novo Evento</h3>
            </div>
                <form>
                    <div className="form-group">
                        <label>Titulo</label>
                        <input onChange={(e) => setTitulo(e.target.value)} type="text" className="form-control"/>
                    </div>


                    <div className="form-group">
                        <label>Tipo do evento</label>
                        <select onChange={(e) => setTipo(e.target.value)} className="form-control">
                            <option disabled selected value>Selecione uma opção</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>


                    <div className="form-group">
                        <label>Descrição evento</label>
                        <textarea  onChange={(e) => setDetalhes(e.target.value)}className="form-control" rows="3"/>
                    </div>


                    <div className="form-group row">
                        <div className="col-6">
                            <label>Data</label>
                            <input onChange={(e) => setData(e.target.value)}type="date" className="form-control" />
                        
                        </div>

                        <div className="col-6">
                            <label>Hora</label>
                            <input onChange={(e) => setHora(e.target.value)} type="time" className="form-control" />
                        
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Upload da imagem </label><br></br>
                        <input onChange={(e) => setFoto(e.target.files[0])} className="from-control" type="file"/>
                    </div>


                    
                    <button onClick={cadastrar} type='button' className="btn btn-enviar-evento btn-block btn-lg">Publicar evento</button>

                    
                
                </form>
           
                {
                    msgTipo === 'sucesso' &&
                     <span><strong>Evento publicado </strong></span>}
                       { msgTipo === 'erro' &&
                     <span><strong>Erro ao publicar</strong></span>
               
                }
            
        </div>
        </>
    )
}

export default CadastroEvento;