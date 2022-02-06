import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mmoConnections } from "../../services";
import {ContainerComentarios, ImgMiniatura,ContainerInfosGeral,MeuH2, ImgThumb,MeuDD,MeuDT,Descri,ContainerMiniaturas,ImgDestaque, ContainerInfos, ContainerGeral,MeuDL,ContainerImages} from "./GamePage.styles"
import { FormComentario } from "../FormComentario";
import { useTheme } from 'styled-components';
import { GameContext } from "../../context/GameContext";


export const GamePage = () => {
    const { idJogo } = useParams();
    const theme = useTheme();
    const dark = useContext(GameContext)
    console.log(dark.dark )
    const [infoGame, setinfoGame] = useState([]);
    const [imagemDestaque, setimagemDestaque] = useState(0);
    
    

    useEffect(async () => {
        let temp =  await mmoConnections(`game?id=${idJogo}`)
        setinfoGame(temp)
        console.log(infoGame)
       
    }, []); 
    //awaits
    return (
        <div>
            

            {infoGame.screenshots != undefined?
            <>
               
                <ImgThumb src={infoGame.thumbnail}/>
                <ContainerGeral>
                    <ContainerInfosGeral fundo={dark.dark?"dark":"main"}>
                        <MeuH2>{infoGame.title}</MeuH2>
                        <Descri>{infoGame.short_description}</Descri>
                        <ContainerInfos>
                            <MeuDL>
                                    <MeuDT>Developer</MeuDT>
                                    <MeuDD>{infoGame.developer}</MeuDD>
                                
                                    <MeuDT>Publisher</MeuDT>
                                    <MeuDD>{infoGame.publisher}</MeuDD>
                            
                            
                                    <MeuDT>Release Date</MeuDT>
                                    <MeuDD>{infoGame.release_date}</MeuDD>
                            
                                    <MeuDT>Platform</MeuDT> 
                                    <MeuDD>{infoGame.platform}</MeuDD>

                                    <MeuDT>Placa de video</MeuDT>
                                    <MeuDD>{infoGame.minimum_system_requirements.graphics}</MeuDD>

                                    <MeuDT>memory</MeuDT>
                                    <MeuDD>{infoGame.minimum_system_requirements.memory}</MeuDD>

                                    <MeuDT>os</MeuDT>
                                    <MeuDD>{infoGame.minimum_system_requirements.os}</MeuDD>

                                    <MeuDT>processor</MeuDT>
                                    <MeuDD>{infoGame.minimum_system_requirements.processor}</MeuDD>

                                    <MeuDT>storage</MeuDT>
                                    <MeuDD>{infoGame.minimum_system_requirements.storage}</MeuDD>
                            </MeuDL>
                        </ContainerInfos>
                    </ContainerInfosGeral>
                    <ContainerImages fundo={dark.dark?"dark":"main"}>
                        <ImgDestaque src={infoGame.screenshots[imagemDestaque].image}/>
                        <ContainerMiniaturas>
                            <ImgMiniatura src={infoGame.screenshots[0].image} onMouseOver={() => setimagemDestaque(0)}/>
                            <ImgMiniatura src={infoGame.screenshots[1].image} onMouseOver={() => setimagemDestaque(1)}/>
                            <ImgMiniatura src={infoGame.screenshots[2].image} onMouseOver={() => setimagemDestaque(2)}/>
                            <ImgMiniatura src={infoGame.screenshots[3].image} onMouseOver={() => setimagemDestaque(3)}/>
                        </ContainerMiniaturas>
                    </ContainerImages>
                </ContainerGeral>
                <ContainerComentarios>
                    <h3>Comentários</h3>
                  
                    <FormComentario game={infoGame}></FormComentario>
                </ContainerComentarios>
                
               
            </>:<></>}
            
        </div>
    )
}