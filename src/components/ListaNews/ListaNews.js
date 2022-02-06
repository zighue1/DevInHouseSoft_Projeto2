import { useEffect, useState } from "react";
import { mmoConnections} from "../../services"
import {CardNews} from "../CardNews"
import styled from 'styled-components';

export const ListaNews = () => {

    const [listaNews, setlistaNews] = useState([]);
    const [listaNewsFiltrada, setlistaNewsFiltrada] = useState([]);
    async function fetchMMOConnections (){
        let result = await mmoConnections("latestnews")
        setlistaNews(result)
        setlistaNewsFiltrada(result)
    }
     useEffect(() => {
        fetchMMOConnections()
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
            {listaNewsFiltrada.map((e,i)=>
              
              i<10?(
                    <>
                        <CardNews key={i} news={e}/>
                        <hr />
                    </>
                ):''
               
            
            )}
        </>
    );
}