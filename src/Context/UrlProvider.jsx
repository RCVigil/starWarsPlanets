import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UrlContext from './UrlContext';
import getApiUrl from '../Helpers/getApiStarWars';

function UrlProvider({ children }) {
  const [resApi, setResApi] = useState([]);
  const [resApiDel, setResApiDel] = useState([]);

  const getApiStar = async () => {
    const res = await getApiUrl();
    setResApi(res.results);
    console.log(res.results);
  };

  useEffect(() => {
    getApiStar();
  }, []);

  useEffect(() => {
    setResApiDel(resApi.map((e) => delete e.residents));
    console.log('DEL', resApiDel);
  }, [resApi]);

  const contextValue = {
    resApi,
    resApiDel,
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
