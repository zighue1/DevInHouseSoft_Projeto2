import {MyCard, Logo, ContainerInfo, MyTitle, MyButton} from "./CardNews.styles"
import { useTheme } from 'styled-components';
import { GameContext } from "../../context/GameContext";
import { useContext } from "react";

export const CardNews = ({news}) => {
    const theme = useTheme();
    const dark = useContext(GameContext)

    return (
        <MyCard fundo={dark.dark?"dark":"main"}>
            
            <Logo src={news.thumbnail}/>
            <ContainerInfo>
                <MyTitle>{news.title}</MyTitle>
                <p>{news.short_description}</p>
                <MyButton   onClick={()=>{
                    window.open(news.article_url, '_blank');}}>Veja Mais</MyButton>
            </ContainerInfo>
        </MyCard>
    );
}