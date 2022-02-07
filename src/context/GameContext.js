import { createContext, useState } from "react";

export const GameContext = createContext();

export function GameContextProvider({children, value}){
    const [dark, setDark] = useState(false)

    return (
        <GameContext.Provider value={{dark, setDark}}>
            {children}
        </GameContext.Provider>
    )
}