import React from 'react';

const Receta = ({receta}) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h6 className="card-header">{receta.strDrink}</h6>
                <img className="card-img-top" src={receta.strDrinkThumb} alt={`imagen de ${receta.strDrink}`}/>
                <div className="card-body">
                    <buttom
                        type="buttom"
                        className="btn btn-block btn-primary"
                    >
                        ver Receta
                    </buttom>
                </div>
            </div>
        </div>
    );
}

export default Receta;