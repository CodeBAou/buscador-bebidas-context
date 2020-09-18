import React, {createContext,useState,useEffect} from 'react';
import Axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
    
    const [recetas,guardarRecetas] = useState([]);

    const [busqueda,buscarRecetas] = useState({
        ingrediente:'',
        categoria:''
    })
    
    const [consultar,guardarConsultar] = useState(false);
    const {nombre, categoria}=busqueda;

    useEffect(()=>{

        if(consultar){
            const obtenerRecetas=async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                const resultado =  await Axios.get(url);
                //console.log(resultado.data.drinks);
                guardarRecetas(resultado.data.drinks);
            }
            obtenerRecetas()
        }
        
    }, [busqueda] ); //PARAMETROS [busqueda] --> Cuando busqueda cambia se vuelve a ejecutar el useEffect

    return(
        <RecetasContext.Provider
            value={{
                buscarRecetas,
                guardarConsultar
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}

export default RecetasProvider;