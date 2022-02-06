import { useEffect, useState } from "react";
import { mmoConnections} from "../../services"
import {CardNews} from "../CardNews"

export const ListaNews = () => {

    const [listaNews, setlistaNews] = useState([]);
    const [listaNewsFiltrada, setlistaNewsFiltrada] = useState([]);
   
    useEffect(async () => {
        let temp =  await mmoConnections(`latestnews`)
        setlistaNews(temp)
        setlistaNewsFiltrada(temp)
       
    }, []); 


    const filtraNews = (e) => {
        let textoDigitado = e.target.value

        let listateste = []
        listaNews.map(news=>{
            if(news.title.includes(textoDigitado)){
                
                listateste.push(news)
            }
        })
        setlistaNewsFiltrada(listateste)
        console.log(listaNewsFiltrada)
    }
  
    return (
        <>
            <h1>Lista de Noticias</h1>
            <input placeholder={'Digite Aqui'} onChange={e=>filtraNews(e)}></input>
            {listaNews?listaNewsFiltrada.map((e,i)=>
              
              i<10?(
                    <>
                        <CardNews key={i} news={e}/>
                        <hr />
                    </>
                ):''
            ):<p>Carregando</p>}
        </>
    );
}