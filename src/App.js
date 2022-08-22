import React from 'react';
import './App.css';
import Table from './Components/Table';
import UrlProvider from './Context/UrlProvider';
import Filtros from './Components/Filter';
import FilterNumb from './Components/FilterNumb';

function App() {
  return (
    <UrlProvider>
      <span>
        <h1>Projeto Star Wars - Trybe</h1>
        <Filtros />
        <FilterNumb />
        <Table />
      </span>
    </UrlProvider>
  );
}

export default App;
