import React, { useContext } from 'react';
import UrlContext from '../Context/UrlContext';

export default function FilterRemov() {
  const {
    setColGlass,
    colGlass,
    column,
  } = useContext(UrlContext);

  const handleBrem = () => {
    const colAltern = colGlass.filter((el) => el === column);
    console.log('colAtern é: ', colAltern, 'colGlass é: ', colGlass);
    setColGlass(colAltern);
  };

  // useEffect(() => {
  //   handleBrem();
  // }, []);

  return (
    <div>
      { colGlass === '' ? '' : colGlass.map((elem, ind) => (
        <h3
          data-testid="filter"
          key={ ind }
          id={ ind }
        >
          {elem}
          {''}
          <button
            type="button"
            onClick={ handleBrem }
          >
            X
          </button>
        </h3>))}

    </div>
  );
}
