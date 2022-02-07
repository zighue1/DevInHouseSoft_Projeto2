import { Routes, Route } from 'react-router-dom';
import { GamePage } from '../components/GamePage';
import { ListaGames } from '../components/ListaGames/ListaGames';
import {ListaNews} from '../components/ListaNews/ListaNews'

export const Router = () => (
    <Routes>
        <Route path={"/"} element={<ListaGames />}></Route>
       <Route path={"/news" } element={<ListaNews />} />
       <Route path={"/jogo/:idJogo"} element={<GamePage></GamePage>} />
    </Routes>
);