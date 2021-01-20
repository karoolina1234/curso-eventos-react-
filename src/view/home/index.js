import React, {useState, useEffect} from 'react'; 
import './home.css';
import firebase from '../../config/Firebase';
import 'firebase/auth';
import {Link} from 'react-router-dom'
import Navbar from '../../components/navbar/index'
import {useSelector} from 'react-redux'
import EventoCard from '../../components/evento-card/index'
import Firebase from '../../config/Firebase'
function Home() {

    const [eventos, setEventos ] = useState([]);
    let listaEventos = []
    useEffect(() =>{
        Firebase.firestore().collection('eventos').get().then(async(resultado)=>{
            await resultado.docs.forEach(doc=>{
                listaEventos.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setEventos(listaEventos)
        })
    })


    return(
        <div>
            <Navbar/>
            <h1> {useSelector(state=> state.usuarioLogado)}</h1>
            <div className="row mt-3">
               { eventos.map( item =>(<EventoCard key={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} vizualizacoes={item.vizualizacoes}  />))} 
            </div>
            
        </div>
    )
}

export default Home;