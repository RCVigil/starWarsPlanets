import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UrlContext from './UrlContext';
import getApiUrl from '../Helpers/getApiStarWars';
// import Filtros from '../Components/Filter';

function UrlProvider({ children }) {
  const [resApi, setResApi] = useState([]);

  // const [resApiDel, setResApiDel] = useState([]);

  const [filtro1, setFiltro1] = useState('');

  const [column, setColumn] = useState('population');

  const [comparison, setComparison] = useState('maior que');

  const [value, setValue] = useState('0');

  const [filtNum, setFiltNum] = useState([]);

  const getApiStar = async () => {
    const res = await getApiUrl();
    setResApi(res.results);
  };

  useEffect(() => {
    getApiStar();
    // setFiltro1(filtro1);
    // setColumn(column);
    // setComparison(comparison);
    // setValue(value);
    // setFiltNum(filtNum);
  }, []);

  // useEffect(() => {
  //   setResApiDel(resApi.map((e) => delete e.residents));
  // }, [resApi]);

  const contextValue = {
    resApi,
    // resApiDel,
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
