import { Formik, Field, Form, ErrorMessage} from "formik"
import { useReducer } from "react";

import * as Yup from 'yup'
import {DivSuperior, MeuTextarea, VotoDown, VotoUp, ComentarioP, Nome, ContainerComentarios, DivComentario, DivInferior, DivNome, DivEmail, PontuacaoP} from "./FormComentario.style"
function reducer(state, action) {
    const newArr = JSON.parse(JSON.stringify(state))
    switch (action.type) {
       
      case 'increment':
        newArr[action.index].ponto++
        localStorage.setItem("comentarios",JSON.stringify(newArr))
        return newArr;
      case 'decrement':
        newArr[action.index].ponto--
        localStorage.setItem("comentarios",JSON.stringify(newArr))
        return newArr;
        case 'addComent':
            newArr.push(action.p)
            localStorage.setItem("comentarios",JSON.stringify(newArr))
            return newArr;
      default:
        throw new Error();
    }
}

export const FormComentario = ({game}) => {
    
    const init = () =>{
        if(JSON.parse(localStorage.getItem("comentarios")))
            return JSON.parse(localStorage.getItem("comentarios"))
        return [];
    }
   
    const [state, dispatch] = useReducer(reducer, [], init);

    const handleSubmit = (values) => {
        values.ponto = 10;
        values.id = game.id;
        // if(state)
        // setComentarios([values])
        // setComentarios([...comentarios,values])
        //localStorage.setItem("comentarios",JSON.stringify([...comentarios,values]));
        console.log('HandleSubmit',state)
        dispatch({type: "addComent",index: 0, p:values})
    };
    
    const schema = Yup.object().shape({
        email: Yup.string().required('Campo obrigatório').email('email inválido'),
        nome: Yup.string().required('Campo Obrigatório'),
        comentario: Yup.string().required('Campo Obrigatório')
    })

    
    
    const handleVoto = (p)=>{
        
        
        console.log('HandleVoto',state)  
    }
    
        return (
            <>
                <h1>Comentários</h1>

                <Formik initialValues={{email: "", nome: "", comentario: ""}} onSubmit={handleSubmit} validateOnMount validationSchema={schema}>
                {({ values}) => (
                    <Form>
                        
                        <DivSuperior>
                            <DivEmail>
                                <label htmlFor="email">E-mail: </label>
                                <Field name="email" paceholder="E-mail" type="email" />
                                <ErrorMessage name="email" component='span' style={{color: "red"}}/>
                            </DivEmail>
                            <DivNome>
                                <label htmlFor="nome">Nome: </label>
                                <Field name="nome" type="input" />
                                <ErrorMessage name="nome" component='span'/>
                            </DivNome>
                        </DivSuperior>
                        <DivInferior>
                            <label htmlFor="comentario">Comentario: </label>
                            <Field name="comentario" as={MeuTextarea} type="textarea" rows="8" cols="50"/>
                        </DivInferior>
                        
                        <button type="submit" >Enviar</button>
                       
                    </Form>
                )}
                </Formik>
                
                {state.map((e,i)=>
                    e.id==game.id?
                    (<DivComentario>
                        <ContainerComentarios>

                            <Nome>{e.nome}:</Nome>
                            <ComentarioP>{e.comentario}</ComentarioP>
                        </ContainerComentarios>
                        
                        <VotoUp onClick={()=>dispatch({type: "increment",index: i, p: e})}></VotoUp>
                        {e.ponto< 0 ?<PontuacaoP className="red">{e.ponto}</PontuacaoP>:<PontuacaoP className="green">+{e.ponto}</PontuacaoP>}
                       
                        <VotoDown onClick={()=>dispatch({type: "decrement",index: i, p: e})}></VotoDown>
                    </DivComentario>)
                    :""
                )}
                
            </>
        );
};