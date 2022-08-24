import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import testData from '../../cypress/mocks/testData';

describe('Testes do Projeto Star Wars', () => {
  test('Testando component App', () => {
    render(<App />);
    const h1Star = screen.getByRole('heading',
      {name: /projeto star wars \- trybe/i})
    expect(h1Star).toBeInTheDocument();
  });

  test('Testando o component Filter.jsx', async () => {
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(testData),
    });

    render(<App />);
    await waitFor(() => {
      expect(fetch).toHaveBeenCalled()
    })
    const inpText = screen.getByRole('textbox')
    expect(inpText).toBeInTheDocument();

    userEvent.type(inpText, 'Tatooine')
    expect(inpText).toHaveValue('Tatooine');
  });

  test('Testando o component FilterNumb.jsx', () => {
    render(<App />);
    const pesLabel = screen.getByRole('heading', {  name: /pesquisar:/i})

    expect(pesLabel).toBeInTheDocument();

    const dropPop = screen.getByTestId('column-filter')
    expect(dropPop).toBeInTheDocument()
    userEvent.click(dropPop)

    const dropMaior = screen.getByTestId('comparison-filter')

    expect(dropMaior).toBeInTheDocument()
    userEvent.click(dropMaior)

    const filValue = screen.getByRole('spinbutton')

    expect(filValue).toBeInTheDocument()

    const butFil = screen.getByRole('button', {  name: /filtrar/i})
    userEvent.click(butFil)

    expect(butFil).toBeInTheDocument()

  });

  test('Testando o component Table', () => {
    render(<App />)

    const tableIn = screen.getByRole('table')

    expect(tableIn).toBeInTheDocument();
  });

  test('Testando endPoint', async () => {
    jest.resetAllMocks()

    global.fetch = () => Promise.resolve({
      status: 200,
      ok: true,
      json: () => Promise.resolve(testData),
      });
    render(<App />)

    await waitFor(() => {
      expect(screen.getAllByRole('row')).toHaveLength(11)
    })

    expect(screen.getAllByRole('row')).toHaveLength(11)

    const dropPop = screen.getByTestId('column-filter')
    userEvent.selectOptions(dropPop, 'diameter')

    const dropMaior = screen.getByTestId('comparison-filter')
    userEvent.selectOptions(dropMaior, 'igual a')

    const filValue = screen.getByTestId('value-filter')
    userEvent.type(filValue, 10465)


    const butFil = screen.getByRole('button', {  name: /filtrar/i})
    userEvent.click(butFil)

  });

});
