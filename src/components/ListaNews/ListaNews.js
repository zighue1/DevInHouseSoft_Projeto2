import { useEffect, useState } from "react";
import { mmoConnections} from "../../services"
import {CardNews} from "../CardNews"
import styled from 'styled-components';

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

    const MeuH1 = styled.h1`
        margin-top: 10px
        font-family: 'Montserrat', sans-serif;
        display: block;
    `
  
    return (
        <>
            <MeuH1>Lista de Noticias</MeuH1>
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