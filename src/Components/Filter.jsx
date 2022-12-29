import React, { useContext } from 'react';
import '../SASS/Filter.sass';
import UrlContext from '../Context/UrlContext';
import DarkMode from './DarkMode';

export default function Filtros() {
  const { filtro1, setFiltro1 } = useContext(UrlContext);

  function handleChange(e) {
    const digValue = (e.target.value);
    setFiltro1(digValue);
  }

  return (
    <div className="filterDiv">
      <label htmlFor="textFilter">
        <input
          type="text"
          name="textFilter"
          value={ filtro1 }
          id="textFilter"
          data-testid="name-filter"
          placeholder="Pesquisa"
          onChange={ handleChange }
        />
      </label>
      <DarkMode />
    </div>
  );
}
