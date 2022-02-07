import styled from 'styled-components';

export const MyCard = styled.div`
        background-color: ${({ fundo, theme }) => fundo=='main'?theme.colors.fundo.main:theme.colors.fundo.dark };
        border: 3px solid ${({ fundo, theme }) => fundo=='main'?theme.colors.linha.main:theme.colors.linha.dark };
        width: 250px;
        height: 320px;
        margin: 5px;
    `;
export   const MyButton = styled.button`
         
    `;
export   const MyP = styled.p`
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`;

export  const Logo = styled.img`
        display: block;
        width: 220px;
        margin-left: auto;
        margin-right: auto;
    `;
