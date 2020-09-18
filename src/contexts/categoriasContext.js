
import React,{createContext,useState, useEffect} from 'react';
import axios from 'axios';

//Crear el Context
export const CategoriasContext = createContext();


//Provider es donde se encuentran las funciones y state (Dependiendo del proyecto las funciones pueden estar en otro fichero)

const CategoriasProvider = (props) => {

    //crear el state del Context
    const [categorias,guardarCategorias] =useState([]);

    //Llamada a la api
    useEffect(()=>{
        const obtenerCategorias=async()=>{
            const url ='https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin&c=Ordinary_Drink';
            
            const categorias= await axios.get(url); //await - se usa para esperar una promesa
            console.log(categorias);
        }

        obtenerCategorias();
    });

    //props.children --> ref a todos los componentes
    //Todo las props que pasemos por el atributo value de <CategoriasContext.Provider> estarán disponibles en todos los componentes
    return(
        <CategoriasContext.Provider 
            value={{}}
        > 
            {props.children} 
        </CategoriasContext.Provider>
    )

}

export default CategoriasProvider;
