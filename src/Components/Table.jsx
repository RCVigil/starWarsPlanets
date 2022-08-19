import React, { useContext } from 'react';
import UrlContext from '../Context/UrlContext';

export default function Table() {
  const { resApi, filtro1 } = useContext(UrlContext);

  return (
    <div>

      <br />

      <table>

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

          { ((resApi).filter((plan) => (
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
                  {elem.films}
                </td>
                <td>
                  {elem.created}
                </td>
                <td>
                  {elem.edited}
                </td>
                <td>
                  {elem.url}
                </td>

              </tr>
            )))}

        </tbody>

      </table>

    </div>
  );
}
