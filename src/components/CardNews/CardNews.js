import styled from 'styled-components';

export const CardNews = ({news}) => {
    /*
        article_content: "<p><img class=\"aligncenter size-large\" src=\"../file/2022/1/elder-scrolls-online-high-isle-709x418.jpg\" alt=\"Elder Scrolls Online High Isle\" width=\"709\" height=\"418\" /></p>\r\n<p>Today, Bethesda offered Elder Scrolls Online players a look at what’s in store for 2022 during the Global Reveal stream. This year, the game’s story will take players to the island paradise of High Isle located in the Systres Archipelago, inspired by the Mediterranean. It’s the home of the Bretons, a nation filled with medieval culture and architecture and descendants of both humans and elves. Yes, there will be big castles and the kind of tournament grounds where knightly competitions take place. There will also be politics – or rather “political intrigue”. High Isle attracts that sort of thing, being a place where some might want to hold conferences, particularly peace talks intended to end the Three Banners War. It’s not all knights and polite politics in High Isle, though. After all, where you have high society and a social elite, you also have backstabbing and plenty of people willing to do what it takes to get their way.</p>\r\n<p>In addition to the new story content, the ESO team also plans to expand on the game’s companion system. Two new companions are being added to the game. The first is a street-wise Khajiit with an affinity for magic named Ember. The second is Isobel, a Breton with aspirations to become a knight.</p>\r\n<p>Other new content being added includes a new card game. Tales of Tribute is a game invented in High Isle and features both PvP and PvE. It offers players a way to increase their rank through its leveling system and offers rewards, such as furnishings. It also adds to the game’s story content when played against specific NPCs.</p>\r\n<p>On the more technical side of things, Spanish text translations will be added in June of this year. Legacy voice content will continue to be in English, but Spanish-speaking players can look forward to future content being translated.</p>\r\n<p>High Isle is set to release on June 6 for PC and Mac, and June 21 on consoles. Those who want to can <a title=\"Elder Scrolls Online High Isle Pre-Purchase\" href=\"https://www.elderscrollsonline.com/en-us/joinus\" target=\"_blank\" rel=\"noopener\">pre-purchase the new chapter now</a>.</p>\r\n<p><iframe src=\"https://www.youtube.com/embed/DVNSIhJgJ_Y\" title=\"YouTube video player\" width=\"709\" height=\"418\" allowfullscreen=\"allowfullscreen\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"></iframe></p>"1
article_url: "https://www.mmobomb.com/news/the-elder-scrolls-online-next-big-adventure-features-never-before-seen-world"
id: 131093
main_image: "https://www.mmobomb.com/file/2022/1/elder-scrolls-online-high-isle.jpg"
short_description: "The 2022 adventure focuses on “The Legacy of the Bretons”."
thumbnail: "https://www.mmobomb.com/file/2022/1/elder-scrolls-online-high-isle-218x150.jpg"
title: "The Elder Scrolls Online’s Next Expansion Adventure Features A Never-Before-Seen World...And A Card Game"
    */
const MyCard = styled.div`
      
        display: flex;
        height: 150px;
        margin: 5px 15px 5px 15px;
`;

const Logo = styled.img`
        height: 120px;
        width: auto;
       
        margin-top: 15px;
        margin-bottom: 15px;
    `;
const ContainerInfo = styled.div`
    margin-left: 20px;
    flex-grow: 1;
`;

const MyButton = styled.button`
        display: block;
        margin-left: auto;
        margin-right: 20px;
        color: blue;
        margin-bottom: 15px;
`;

const MyTitle = styled.h2`
    justify-content: stretch
    flex-grow: 1;
    text-align: left;
`
    return (
        <MyCard>
            
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