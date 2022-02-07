import {MyCard,Logo,MyP, MyButton} from "./Card.styles"
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { GameContext } from "../../context/GameContext";
import { useContext } from "react";

export const Card = ({jogo}) => {
    const theme = useTheme();
    const dark = useContext(GameContext)
    const navigate = useNavigate();
    
    return(
        <MyCard fundo={dark.dark?"dark":"main"}>
            <MyP style={{textAlign: 'center'}}>{jogo.title}  <span>{jogo.platform}</span></MyP>
            <Logo src={jogo.thumbnail} />
            <MyP>{jogo.short_description.slice(0,100)+"..."}</MyP>
            <MyButton onClick={() => navigate(`jogo/${jogo.id}`)}>Veja Mais</MyButton>
        </MyCard>
    );
}