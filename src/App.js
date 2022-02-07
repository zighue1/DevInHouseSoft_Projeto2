import { Router } from "./routes/Router";
import { BrowserRouter } from 'react-router-dom';
import { myTheme } from './themes/themes';
import { ThemeProvider } from 'styled-components';
import { Cabecalho } from "./components/Cabecalho";
import { GameContextProvider } from "./context/GameContext";


function App() {
  return (
    <div className="App">
       <ThemeProvider theme={myTheme}>
        <GameContextProvider>
          <BrowserRouter>
              <Cabecalho></Cabecalho>
              <Router />
          </BrowserRouter>
        </GameContextProvider>
       
      </ThemeProvider>
    </div>
  );
}

export default App;
