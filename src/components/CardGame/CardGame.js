

export const CardGame = ({jogo}) => {
/*
description: "<p style=\"text-align: justify;\"><strong>World of Tanks</strong> is a team-based free MMO action game exclusively focused on the armored warfare in the mid-20th century. Created by the strategy masterminds at Wargaming.net, this is a shooter with a lot of tactical elements to be taken into consideration. Choose your tanks and enter epic battles!</p>\r\n<p style=\"text-align: justify;\">An advanced upgrade system will turn your simple tank into one amazing destruction machine, able to take out all the rivals that stand in your path. Choose your vehicle carefully, from fast and maneuverable tanks with less protection to the heaviest but slower machines. Or go for a compromise between the two, with an all-purpose medium tank. Whichever you choose, make sure it fits your gameplay style.</p>\r\n<p style=\"text-align: justify;\">However, it’s not just the tank that will win the battles. In World of Tanks, besides being a great commander you also need to be a great team player. The combined efforts of every soldier in your team will take you one step closer to victory.</p>\r\n<p style=\"text-align: justify;\">Improve your tank with the experience and credits you earn in battle so that you can research and develop upgrades and mods for your war machine, RPG style. The performance in the battlefield will be completely different with the upgrades. World of Tanks is an authentic game, recreating over 150 tanks produced in Germany, Soviet Union, and the United States with incredible fidelity. Try some legends of the 1930 – 1950 period, including some prototypes that we’re never unleashed in the battlefield.</p>\r\n\r\n<p style=\"text-align: justify;\">World of Tanks is a shooter with a high strategy element, where teamwork is key. Crush you enemies and destroy most of the scenario that gets in your way, creating shortcuts for you and your teammates to explore.</p>\r\n<p style=\"text-align: justify;\">Wargaming.net also publishes World of Warships and World of Warplanes.</p>\r\n"
developer: "Wargaming"
game_url: "https://www.mmobomb.com/open/world-of-tanks"
genre: "Shooter"
id: 2
minimum_system_requirements:
graphics: "Nvidia GeForce 6800 / ATI X1800 with 256 mb ram"
memory: "2 GB"
os: "Windows XP / Vista / 7 / 8"
processor: "Intel Pentium 4 2.2 GHz"
storage: "16 GB"
[[Prototype]]: Object
platform: "Windows"
profile_url: "https://www.mmobomb.com/world-of-tanks"
publisher: "Wargaming"
release_date: "2011-04-12"
screenshots: Array(4)
0: {id: 10, image: 'https://www.mmobomb.com/g/2/World-of-Tanks-1.jpg'}
1: {id: 11, image: 'https://www.mmobomb.com/g/2/World-of-Tanks-2.jpg'}
2: {id: 12, image: 'https://www.mmobomb.com/g/2/World-of-Tanks-3.jpg'}
3: {id: 13, image: 'https://www.mmobomb.com/g/2/World-of-Tanks-4.jpg'}
length: 4
[[Prototype]]: Array(0)
short_description: "World of Tanks is a team-based free MMO action game exclusively focused on the armored warfare in the mid-20th century. Created by the strategy masterminds at Wargaming.net, this is a shooter with a lot of tactical elements to be taken into consideration."
status: "Live"
thumbnail: "https://www.mmobomb.com/g/2/thumbnail.jpg"
title: "World of Tanks"
*/
    return (
        <div>
            <h2>{jogo.title}</h2>
            <img src={jogo.thumbnail}/>
        </div>
    );
}

