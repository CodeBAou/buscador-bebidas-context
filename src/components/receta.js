import React,{useContext,useState} from 'react';
import {ModalContext} from '../contexts/modalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';

function getModalStyle() {
    const top = 50 ;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 600,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {

    //Extraer los valores del context
    const {recetaData,guardarIdReceta} = useContext(ModalContext);
    const [modalStyle] = useState(getModalStyle);
    const [open,setOpen] = useState(false);
    const classes=useStyles();
    const handleOpen = ()=>{
        setOpen(true);
    }
    const handClose = () => {
        setOpen(false);
    }

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
                            guardarIdReceta(receta.idDrink);
                            handleOpen();
                        }}
                    >
                        ver Receta
                    </button>

                    <Modal

                        open={open}
                        onClose={()=>{
                            guardarIdReceta(null);
                            handClose();
                        }}

                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h5>{recetaData.strDrink}</h5>
                            <h6>Instrucciones</h6>
                            <p>{recetaData.strInstructions}</p>
                            <p>{recetaData.strInstructionsDE}</p>
                        </div>

                    </Modal>

                </div>
            </div>
        </div>
    );
}

export default Receta;