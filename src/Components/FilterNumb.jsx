import React, { useContext } from 'react';
import UrlContext from '../Context/UrlContext';

function FilterNumb() {
  const {
    setResEsp,
    resEsp,
    setColumn,
    column,
    setComparison,
    comparison,
    columArray,
    setColumArray,
    filterGlass,
    setFilterGlass,
    setValue,
    value,
  } = useContext(UrlContext);

  function columArrayDel() {
    setFilterGlass(([
      ...filterGlass,
      { col: column, comp: comparison, valor: value },
    ]).sort());
  }

  function handleSubmit() {
    const filtNumMaior = resEsp?.filter((elem) => {
      if (comparison === 'maior que') {
        return +elem[column] > +value;
      }
      if (comparison === 'menor que') {
        return +elem[column] < +value;
      }
      if (comparison === 'igual a') {
        return elem[column] === value;
      }
      return elem;
    });
    setResEsp(filtNumMaior);
    const columFilter = columArray.filter((el) => el !== column);
    setColumArray(columFilter, ...columArray);
    const natyvie = resEsp.Set();
    console.log(natyvie);
    setValue('0');
    columArrayDel();
  }

  return (
    <div>
      <br />
      <label htmlFor="pesq">
        <h1>Pesquisar:</h1>
        <select
          onChange={ (e) => setColumn(e.target.value) }
          name="pesq"
          id="pesq"
          data-testid="column-filter"
        >
          {columArray.map((eleCol, ind) => (
            <option key={ ind } value={ eleCol }>
              {eleCol}
            </option>
          ))}
        </select>
        {' '}
        <select
          name="pesq"
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        {' '}
        <input
          type="number"
          name="value"
          value={ value }
          data-testid="value-filter"
          onChange={ (e) => Number(setValue(e.target.value)) }
        />
      </label>
      {' '}
      <button type="button" data-testid="button-filter" onClick={ handleSubmit }>
        Filtrar
      </button>
      <br />
    </div>
  );
}

export default FilterNumb;
