import styled from "styled-components";


export const MeuH2 = styled.h2`
    margin-top: 0px;
 `;

export   const ImgThumb = styled.img`
        width: 20vw;
        display: block;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
`;

export  const ImgDestaque = styled.img`
       
        width: 50vw;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
        border-radius: 5px;
`;

export const ContainerMiniaturas = styled.div`
        display: flex;
        justify-content: center;
`;
export const ImgMiniatura = styled.img`
        margin-left: 5px;
        padding: 1px;
        &:hover {
            border: 1px solid red;
        }
`;

export const ContainerInfos = styled.div`
        background-color: gray;
        width: 30vw;
        height: auto;
        border-radius: 20px;
        padding: 5px  
 `;
export const MeuDL = styled.dl`
       
`;
export const MeuDT = styled.dt`
    
    float: left;
    clear: left;
    width: 150px;   
    text-align: left;
    font-weight: bold;
    color: green;
    &:after {
        content: ":";
    }
`;
export const MeuDD = styled.dd`
        margin: 0 0 0 110px;
        padding: 0 0 0.5em 0;

       
    `;
export const Descri = styled.p`
    
    `;
    export const DivDtDd = styled.div`
        display: flexbox;
        flex-direction: row;
    `;
export const ContainerImages = styled.div`


        margin: 15px;
        padding: 20px;
        border: 3px solid ${({ fundo, theme }) => fundo=='main'?theme.colors.linha.main:theme.colors.linha.dark };
        background-color: ${({ fundo, theme }) => fundo=='main'?theme.colors.fundo.main:theme.colors.fundo.dark };
        border-radius: 40px;
    `;
export const ContainerInfosGeral = styled.div`
        width: 30vw;
        margin: 10px;
        padding: 20px;
        border: 3px solid ${({ fundo, theme }) => fundo=='main'?theme.colors.linha.main:theme.colors.linha.dark };
        background-color: ${({ fundo, theme }) => fundo=='main'?theme.colors.fundo.main:theme.colors.fundo.dark };
        border-radius: 40px;
    `;
export const ContainerGeral = styled.div`
        display: flex;
    `;
export const ContainerComentarios = styled.div`

    `;
export const Comentar = styled.textarea`

    `