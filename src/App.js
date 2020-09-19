import React,{Fragment} from 'react';
import  CategoriasProvider from './contexts/categoriasContext';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';
import RecetasProvider from './contexts/RecetasContext';
import ModalProvider from './contexts/modalContext';

function App() {

  return (

    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>

          <Header/>

          <div className="container w-100">

            <div className="row">
              <Formulario/>
            </div>

            <ListaRecetas/>

          </div>

        
          </ModalProvider>
        </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
