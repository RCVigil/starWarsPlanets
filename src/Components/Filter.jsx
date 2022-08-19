import React, { useContext } from 'react';
import UrlContext from '../Context/UrlContext';

export default function Filtros() {
  const { setFiltro1 } = useContext(UrlContext);

  function handleChange(e) {
    const digValue = (e.target.value);
    setFiltro1(digValue);
  }

  return (
    <div>
      <label htmlFor="textFilter">
        <input
          type="text"
          name="textFilter"
          id="textFilter"
          data-testid="name-filter"
          placeholder="Pesquisa"
          onChange={ handleChange }
        />
      </label>
    </div>
  );
}