import styled from "styled-components";

export const MeuTextarea = styled.textarea`
    max-width: 400px
`;

export const DivSuperior = styled.div`
        
    `;
export const DivInferior = styled.div`
        display: flex;
        flex-direction: column;
    `;
export const DivNome = styled.div`
    
    `;
export const DivEmail = styled.div`
    
    `;
export const DivComentario = styled.div`
        display: flex;
    `;
export const Nome = styled.p`
        weight: bold;
    `;
export const ComentarioP = styled.p`

    `;
export const ContainerComentarios = styled.div`
    
    `;
export const VotoUp = styled.div`
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent    ;
        border-bottom: 25px solid #555;
    `;
export const VotoDown = styled.div`
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 25px solid #555;
    `
    export const PontuacaoP = styled.p`
   

        &.red {
            color: red;
        }
        &.green {
            color: green;
        }
    `;