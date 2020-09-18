//Los datos Fluyen desde este context
import React,{createContext,useState} from 'react';

//Crear el Context
export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y state (Dependiendo del proyecto las funciones pueden estar en otro fichero)
const CategoriasProvider = (props) => {
    //crear el state del Context
    const [hola,guardarHola] =useState('hola');

    //props.children --> ref a todos los componentes
    //Todo las props que pasemos por el atributo value de <CategoriasContext.Provider> estarán disponibles en todos los componentes
    return(
        <CategoriasContext.Provider 
            value={{hola,guardarHola}}
        > 
            {props.children} 
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;
