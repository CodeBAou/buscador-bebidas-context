import React,{useContext,useState} from 'react';
import {CategoriasContext} from '../contexts/categoriasContext';
import {RecetasContext} from '../contexts/RecetasContext';

const Formulario = () => {

    const [busqueda,guardarBusqueda]=useState({
        nombre:'',
        categoria:''
    });

    const{categorias}=useContext(CategoriasContext);
    const{buscarRecetas,guardarConsultar}=useContext(RecetasContext);

    //Funcion Lectura de contenidos
    const obtenerDatosReceta=e=>{
        guardarBusqueda(
            {
                ...busqueda,
                [e.target.name]:e.target.value
            }
        )
    }

    return(

        <form
            className="col-12 text-center"
            onSubmit={e=>{
                e.preventDefault();
                if( busqueda.nombre!='' && busqueda.nombre != null ){
                    buscarRecetas(busqueda);
                    guardarConsultar(true);
                }
            }}
        >
            <fieldset className="text-center">
                <legend>Busca Bebidas por categoria o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">

                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
            
                <div className="col-md-4">

                    <select 
                        className="form-control" 
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option 
                            value=""
                        >-- Seleccion Categoria --</option>

                        {categorias.map(categoria => ( 
                            <option 
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}

                    </select>
                    
                </div>

                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Recetas"
                    />
                </div>

            </div>
        </form>

    )
}

export default Formulario;