import React,{useEffect,useState, createContext} from 'react';
import Axios from 'axios';

//crear el context
export const ModalContext=createContext();

const ModalProvider = (props) => {

    //state del provider
    const [idreceta,guardarIdReceta]=useState(null);
    const [receta,guardarReceta]=useState({});
    
    //LLamada a la api, cuando tengamos la receta
    useEffect(()=>{

        const obtenerReceta = async () =>{

            if(!idreceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const resultado=await Axios.get(url);
            console.log(resultado);

        }

        obtenerReceta();

    },[idreceta]);

    return(

        <ModalContext.Provider
            value={{
                guardarIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>

    );
}

export default ModalProvider;