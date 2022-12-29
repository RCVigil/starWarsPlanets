import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UrlContext from './UrlContext';
import getApiUrl from '../Helpers/getApiStarWars';

function UrlProvider({ children }) {
  const [resApi, setResApi] = useState([]);

  const [resEsp, setResEsp] = useState([]);

  const [filtro1, setFiltro1] = useState('');

  const [column, setColumn] = useState('population');

  const [comparison, setComparison] = useState('maior que');

  const [value, setValue] = useState('0');

  const [filtNum, setFiltNum] = useState(resApi);

  const [columArray, setColumArray] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [filterGlass, setFilterGlass] = useState([]);

  const handleBrem = () => {
    console.log(column, comparison, value);
  };

  const handleBremBut = handleBrem;

  const getApiStar = async () => {
    const res = await getApiUrl();
    setResApi(res.results);
    setResEsp(res.results);
  };

  useEffect(() => {
    getApiStar();
  }, []);

  useEffect(() => {
    const filterStr = () => {
      setResEsp(resApi.filter((elem) => elem
        .name.toLowerCase().includes(filtro1.toLowerCase())));
    };
    filterStr();
  }, [filtro1]);

  const contextValue = {
    resApi,
    setResEsp,
    filtro1,
    setFiltro1,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filtNum,
    setFiltNum,
    resEsp,
    columArray,
    setColumArray,
    filterGlass,
    setFilterGlass,
    handleBremBut,
  };

  return (
    <UrlContext.Provider value={ contextValue }>
      {children}
    </UrlContext.Provider>
  );
}

UrlProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default UrlProvider;
