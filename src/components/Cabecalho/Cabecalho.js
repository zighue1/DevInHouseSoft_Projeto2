
import { useNavigate } from "react-router-dom"
import { GameContext } from "../../context/GameContext";
import {useContext} from "react" 
import { ContainerPrincipal,BtSwitchTheme,Titulo,BtGoGameList,BtGoGameNews} from "./Cabecalho.styles";

export const Cabecalho = () => {
    const navigate = useNavigate();
    const context = useContext(GameContext)
   
    return(
        <ContainerPrincipal>
            <BtSwitchTheme onClick={()=> context.setDark(!context.dark)}>Tema</BtSwitchTheme>

            <Titulo>DevInHouseMMO</Titulo>
            <BtGoGameList onClick={()=> navigate('/')}>Game List</BtGoGameList>
            <BtGoGameNews onClick={()=> navigate('/news')}>Game News</BtGoGameNews>
           
        </ContainerPrincipal>
    );
}