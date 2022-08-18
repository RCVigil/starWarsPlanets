import React from 'react';
import './App.css';
import Table from './Components/Table';
import UrlProvider from './Context/UrlProvider';

function App() {
  return (
    <UrlProvider>
      <span>
        <h1>Projeto Star Wars - Trybe</h1>
        <Table />
      </span>
    </UrlProvider>
  );
}

export default App;
