import React, {useContext} from 'react';
import {RecetasContext} from '../contexts/RecetasContext';
import Receta from './receta';

const ListaRecetas = () => {

    //Extrer Recetas
    const {recetas} = useContext(RecetasContext);
    

    console.log(recetas);

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