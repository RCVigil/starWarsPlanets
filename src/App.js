import React from 'react';
import './SASS/App.sass';
import Table from './Components/Table';
import UrlProvider from './Context/UrlProvider';
import Filtros from './Components/Filter';
import FilterNumb from './Components/FilterNumb';
import FilterRemov from './Components/FilterRemov';
import backImage from './CSS/projectIntroStarWars.gif';

function App() {
  return (
    <>
      <img
        src={ backImage }
        className="imgStarWars"
        alt="Imagem StarWars"
      />
      <UrlProvider>
        <span className="App-header ">
          <h1>Projeto Star Wars - Trybe</h1>
          <Filtros />
          <FilterNumb />
          <FilterRemov />
          <Table />
        </span>
      </UrlProvider>

    </>
  );
}

export default App;
