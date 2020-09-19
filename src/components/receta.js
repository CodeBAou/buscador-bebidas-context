import React,{useContext} from 'react';
import {ModalContext} from '../contexts/modalContext';

const Receta = ({receta}) => {

    //Extraer los valores del context
    const {guardarIdReceta} = useContext(ModalContext);

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h6 className="card-header">{receta.strDrink}</h6>
                <img className="card-img-top" src={receta.strDrinkThumb} alt={`imagen de ${receta.strDrink}`}/>
                <div className="card-body">
                    <button
                        type="buttom"
                        className="btn btn-block btn-primary"
                        onClick={()=> {
                            guardarIdReceta(receta.idDrink)
                        }}
                    >
                        ver Receta
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Receta;