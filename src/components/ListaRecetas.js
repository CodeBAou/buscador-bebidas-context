import React, {useContext, useEffect} from 'react';
import {RecetasContext} from '../contexts/RecetasContext';
import Receta from './receta';

const ListaRecetas = () => {

    //Extrer Recetas
    const {recetas} = useContext(RecetasContext);

    
    return (
        <div className="row mt-5 col-12">
            {recetas.map(receta => (
                <Receta
                    key={receta.idDrink}
                    receta={receta}
                />
            ))
            }
        </div>
    )
}

export default ListaRecetas;