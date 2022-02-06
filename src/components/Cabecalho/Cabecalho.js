import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { GameContext } from "../../context/GameContext";
import {useContext} from "react" 
export const Cabecalho = () => {
    const navigate = useNavigate();
    const context = useContext(GameContext)
    const ContainerPrincipal = styled.div`
        height: 60px;
        background-color: black;
        display: flex;
        padding-right: 10px;
    `
    const Titulo = styled.h1`
        color: white;
        flex-grow: 1;
    `
    const BtGoGameList = styled.button`
        flex-grow: 0;
    `
    const BtGoGameNews =  styled.button`
        flex-grow: 0;

    `
    const BtSwitchTheme = styled.button`
        flex-grow: 0;
    `
    return(
        <ContainerPrincipal>
            <BtSwitchTheme onClick={()=> context.setDark(!context.dark)}>Tema</BtSwitchTheme>

            <Titulo>DevInHouseMMO</Titulo>
            <BtGoGameList onClick={()=> navigate('/')}>Game List</BtGoGameList>
            <BtGoGameNews onClick={()=> navigate('/news')}>Game News</BtGoGameNews>
           
        </ContainerPrincipal>
    );
}