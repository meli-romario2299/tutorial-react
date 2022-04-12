import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';

import Login from './Login';
import Dashboard from '../dashboard/Dashboard';

describe("Prueba del componente de Login", () => {

  beforeEach(() => {
    
  })


  test('Verificar si el componente se encuentra renderizado', () => { 

    const propierties = {
      backgroundColor: 'red'
    }

    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login backgroundColor={propierties.backgroundColor} />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
      </Routes>
      </BrowserRouter>
    );
    expect( screen.getByText('View de Login') ).toBeInTheDocument();
    expect( container ).toMatchSnapshot();

   })

   test("Testeando la funcionalidad del formulario", () => {

    const propierties = {
      backgroundColor: 'red'
    }

    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login backgroundColor={propierties.backgroundColor} />} />
          <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    );

    fireEvent.change(
      screen.getByPlaceholderText('Ingrese su email corporativo'),
      { target: { value: 'micorreo@corporativo.com' } }
    );

    fireEvent.change(
      screen.getByPlaceholderText('Ingresa tu password'),
      { target: { value: 'mipass1234' } }
    );

    fireEvent.submit(
      screen.getByText('Login')
    )

    expect( screen.getByText('Calculadora') ).toBeInTheDocument();
    expect(container).toMatchSnapshot();

   })


});