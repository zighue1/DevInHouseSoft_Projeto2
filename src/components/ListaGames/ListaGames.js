import { useEffect, useState } from "react";
import { Card } from "../Card";
import styled from 'styled-components';
import { mmoConnections } from "../../services";

export const ListaGames = () => {

    

    const [listaGames, setlistaGames] = useState([]);
    const [listaGamesFiltrada, setlistaGamesFiltrada] = useState([]);

    useEffect(async () => {
        let temp =  await mmoConnections(`games`)
     
        setlistaGames(temp)
        setlistaGamesFiltrada(temp.slice(0,10))
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