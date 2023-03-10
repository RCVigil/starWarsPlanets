import React, { useContext } from 'react';
import UrlContext from '../Context/UrlContext';
import '../SASS/Table.sass';

export default function Table() {
  const { resEsp } = useContext(UrlContext);

  return (
    <div className="tableDiv1">

      <br />

      <table className="tableFat">

        <thead className="tableThead">

          <tr>

            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>

          </tr>

        </thead>

        <tbody>

          { resEsp.map((el, ind2) => (
            <tr className={ `trTable-${ind2}` } key={ ind2 }>

              <td>
                {el.name}
              </td>
              <td>
                {el.rotation_period}
              </td>
              <td>
                {el.orbital_period}
              </td>
              <td>
                {el.diameter}
              </td>
              <td>
                {el.climate}
              </td>
              <td>
                {el.gravity}
              </td>
              <td>
                {el.terrain}
              </td>
              <td>
                {el.surface_water}
              </td>
              <td>
                {el.population}
              </td>
              <td>
                <br />
                <a
                  target="_blank"
                  href={ el.films }
                  rel="license noreferrer"
                >
                  {el.films}
                </a>
                <br />
              </td>
              <td>
                {el.created}
              </td>
              <td>
                {el.edited}
              </td>
              <td>
                <a
                  target="_blank"
                  href={ el.url }
                  rel="license noreferrer"
                >
                  {el.url}
                </a>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}
