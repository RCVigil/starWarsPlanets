import React, { useContext } from 'react';
import UrlContext from '../Context/UrlContext';

export default function FilterRemov() {
  const {
    filterGlass,
    handleBremBut,
  } = useContext(UrlContext);

  // useEffect(() => {
  //   handleBremBut();
  // }, []);

  return (
    <div>
      { filterGlass && filterGlass.map((elem, ind) => (
        <h3
          data-testid="filter"
          key={ ind }
          id={ ind }
        >
          {elem.col}
          {''}
          <button
            type="button"
            onClick={ handleBremBut }
          >
            X
          </button>
        </h3>))}

    </div>
  );
}
