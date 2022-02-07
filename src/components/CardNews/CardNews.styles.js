import styled from 'styled-components';

export const MyCard = styled.div`
        font-family: 'Montserrat', sans-serif;
        border: 3px solid ${({ fundo, theme }) => fundo=='main'?theme.colors.linha.main:theme.colors.linha.dark };
        background-color: ${({ fundo, theme }) => fundo=='main'?theme.colors.fundo.main:theme.colors.fundo.dark };
        display: flex;
        height: 150px;
        margin: 5px 15px 5px 15px;
`;

export const Logo = styled.img`
        height: 120px;
        width: auto;
       
        margin-top: 15px;
        margin-bottom: 15px;
    `;
export const ContainerInfo = styled.div`
    margin-left: 20px;
    flex-grow: 1;
`;

export const MyButton = styled.button`
        display: block;
        margin-left: auto;
        margin-right: 20px;
        color: blue;
        margin-bottom: 15px;
`;

export const MyTitle = styled.h2`
    justify-content: stretch
    flex-grow: 1;
    text-align: left;
`