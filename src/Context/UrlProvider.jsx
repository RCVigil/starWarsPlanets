import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UrlContext from './UrlContext';
import getApiUrl from '../Helpers/getApiStarWars';
// import Filtros from '../Components/Filter';

function UrlProvider({ children }) {
  const [resApi, setResApi] = useState([]);

  const [resApiDel, setResApiDel] = useState([]);

  const [filtro1, setFiltro1] = useState(['']);

  const getApiStar = async () => {
    const res = await getApiUrl();
    setResApi(res.results);
  };

  useEffect(() => {
    getApiStar();
  }, []);

  useEffect(() => {
    setFiltro1(filtro1);
  }, []);

  useEffect(() => {
    setResApiDel(resApi.map((e) => delete e.residents));
  }, [resApi]);

  const contextValue = {
    resApi,
    resApiDel,
    filtro1,
    setFiltro1,
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
