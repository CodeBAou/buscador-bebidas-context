import React,{Fragment} from 'react';
import  CategoriasProvider from './contexts/categoriasContext';
import Header from './components/Header';
import Formulario from './components/Formulario';
import './App.css';
import RecetasProvider from './contexts/RecetasContext';

function App() {

  return (

    <CategoriasProvider>
      <RecetasProvider>

        <Header/>

        <div className="container mt-5">
          <div className="row">
            <Formulario/>
          </div>
        </div>

        </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
