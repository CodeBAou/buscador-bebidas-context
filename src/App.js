import React,{Fragment} from 'react';
import  CategoriasProvider from './contexts/categoriasContext';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';
import RecetasProvider from './contexts/RecetasContext';

function App() {

  return (

    <CategoriasProvider>
      <RecetasProvider>

        <Header/>

        <div className="container w-100">

          <div className="row">
            <Formulario/>
          </div>

          <ListaRecetas/>

        </div>

        

        </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
