
export const mmoConnections = async function (url) {
    
      let response = await fetch(`https://mmo-games.p.rapidapi.com/${url}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                    "x-rapidapi-key": "90e4a82796msh84d32f0d28c872cp10ff8ajsn2a2ec716db80"
                }
            })
            response = await response.json()
        return response  
}

export const mmoLinkTable = [

]