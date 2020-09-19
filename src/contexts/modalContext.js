import React,{useEffect,useState, createContext} from 'react';
import Axios from 'axios';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

//crear el context
export const ModalContext=createContext();

const ModalProvider = (props) => {

    //state del provider
    const [idreceta,guardarIdReceta]=useState(null);
    const [recetaData,guardarReceta]=useState({});

    //LLamada a la api, cuando tengamos la receta
    useEffect(()=>{

        const obtenerReceta = async () =>{

            if(!idreceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const resultado=await Axios.get(url);
            guardarReceta(resultado.data.drinks[0]);
            console.log(recetaData);
        }

        obtenerReceta();

    },[idreceta]);

    return(

        <ModalContext.Provider
            value={{
                recetaData,
                guardarIdReceta,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>

    );
}

export default ModalProvider;