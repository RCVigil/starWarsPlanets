import React, { useContext } from 'react';
import UrlContext from '../Context/UrlContext';

export default function Table() {
  const { resApi, filtro1, filtNum } = useContext(UrlContext);

  return (
    <div>

      <br />

      <table border="1">

        <thead>

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

          { filtNum.length !== 0 ? (filtNum.map((el, ind2) => (
            <tr key={ ind2 }>

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
          ))) : ((resApi).filter((plan) => (
            (plan.name).includes(filtro1)))
            .map((elem, ind) => (
              <tr key={ ind }>

                <td>
                  {elem.name}
                </td>
                <td>
                  {elem.rotation_period}
                </td>
                <td>
                  {elem.orbital_period}
                </td>
                <td>
                  {elem.diameter}
                </td>
                <td>
                  {elem.climate}
                </td>
                <td>
                  {elem.gravity}
                </td>
                <td>
                  {elem.terrain}
                </td>
                <td>
                  {elem.surface_water}
                </td>
                <td>
                  {elem.population}
                </td>
                <td>
                  <br />
                  <a
                    target="_blank"
                    href={ elem.films }
                    rel="license noreferrer"
                  >
                    {elem.films}
                  </a>
                  <br />
                </td>
                <td>
                  {elem.created}
                </td>
                <td>
                  {elem.edited}
                </td>
                <td>
                  <a
                    target="_blank"
                    href={ elem.url }
                    rel="license noreferrer"
                  >
                    {elem.url}
                  </a>
                </td>

              </tr>
            )))}

        </tbody>

      </table>

    </div>
  );
}
