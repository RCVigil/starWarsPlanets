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
    setValue,
    columArray,
    setColumArray,
    value } = useContext(UrlContext);

  function handleSubmit() {
    const filtNumMaior = resEsp.filter((elem) => {
      if (comparison === 'maior que') {
        return (+elem[column]) > (+value);
      }
      if (comparison === 'menor que') {
        return (+elem[column]) < (+value);
      }
      if (comparison === 'igual a') {
        return elem[column] === value;
      }
      return elem;
    });
    setResEsp(filtNumMaior);
    setColumArray(columArray.filter((el) => el !== column));
  }

  return (
    <div>
      <label htmlFor="pesq">
        <h1>Pesquisar:</h1>

        <br />
        <select
          onChange={ (e) => setColumn(e.target.value) }
          name="pesq"
          id="pesq"
          data-testid="column-filter"
        >

          {
            columArray.map((eleCol, ind) => (
              <option
                key={ ind }
                value={ eleCol }
              >
                {eleCol}
              </option>
            ))
          }

          {/* <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option> */}
        </select>

        {' '}

        <select
          name="pesq"
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option
            value="maior que"
          >
            maior que
          </option>
          <option
            value="menor que"
          >
            menor que
          </option>
          <option
            value="igual a"
          >
            igual a
          </option>
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

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleSubmit }
      >
        Filtrar
      </button>

    </div>
  );
}

export default FilterNumb;
