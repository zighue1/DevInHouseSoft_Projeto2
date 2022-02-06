import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const Card = ({jogo}) => {
   /* developer: "Phoenix Labs, Iron Galaxy"
    game_url: "https://www.mmobomb.com/open/dauntless"
    genre: "MMORPG"
    id: 1
    platform: "PC (Windows)"
    profile_url: "https://www.mmobomb.com/dauntless"
    publisher: "Phoenix Labs"
    release_date: "2019-05-21"
    short_description: "Gather your friends, forge your weapons, and hunt ferocious behemoths in Dauntless, the co-op multiplayer RPG from Phoenix Labs, a studio consisting of developers from some of the biggest MMORPG ever made. Set adrift in a lush fantasy world known as the Shattered Isles, \"Slayers\" must band together to contend with a harsh environment and even harsher enemies Each Slayer can choose his or her weapon and attack style, from lightning-fast sword attacks to powerful axe strikes."
    thumbnail: "https://www.mmobomb.com/g/1/thumbnail.jpg"
    title: "Dauntless"   
    */
    const navigate = useNavigate();
    const MyCard = styled.div`
        background-color: gray;
        width: 250px;
        height: 300px;
        margin: 5px;
    `;
    const MyButton = styled.button`
         
    `;
    const MyP = styled.p`text-align: center;`;

    const Logo = styled.img`
        display: block;
        width: 220px;
        margin-left: auto;
        margin-right: auto;
    `;

    return(
        <MyCard>
            <p style={{textAlign: 'center'}}>{jogo.title}  <span>{jogo.platform}</span></p>
            <Logo src={jogo.thumbnail} />
            <MyP>{jogo.short_description.slice(0,100)+"..."}</MyP>
            <MyButton onClick={() => navigate(`jogo/${jogo.id}`)}>Veja Mais</MyButton>
        </MyCard>
    );
}