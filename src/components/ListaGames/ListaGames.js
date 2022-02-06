import { useEffect, useState } from "react";
import { Card } from "../Card";
import styled from 'styled-components';

export const ListaGames = () => {

    

    const [listaGames, setlistaGames] = useState([]);
    const [listaGamesFiltrada, setlistaGamesFiltrada] = useState([]);
    useEffect(() => {
        fetch("https://mmo-games.p.rapidapi.com/games", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                    "x-rapidapi-key": "90e4a82796msh84d32f0d28c872cp10ff8ajsn2a2ec716db80"
                }
            })
            .then(response => {
               response.json().then(r=>{
                   setlistaGames(r)
                   setlistaGamesFiltrada(r.slice(0,10))
               })
            })
            .catch(err => {
                console.error(err);
            });
                    return () => {
                        
                    };
    }, []);
    const filtraJogos = (e) =>{
        let textoDigitado = e.target.value
       
        let listateste = []
        listaGames.map(jogo=>{
            if(jogo.title.includes(textoDigitado)){
                
                listateste.push(jogo)
            }
        })
        setlistaGamesFiltrada(listateste) 
        console.log('lista', listaGamesFiltrada)
    }
    const Desk = styled.div`
        display: flex;
        flex-wrap: wrap

    `;
    return (
        <>
            
            <p>Filtre os jogos:</p>
            <input placeholder={'Digite Aqui'} onChange={e=>filtraJogos(e)}></input>
            <p>{listaGames.length>0?'Foram encontrados: '+listaGames.length:'Fazendo Donwload das Informações'}</p>
            <Desk>
                {listaGamesFiltrada.map((e,i) =>            
                    i<10?<Card key={i} jogo={e} />:''
                )}
            </Desk>
            
        </>
    );
}