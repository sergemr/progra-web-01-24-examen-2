import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Boton from './Boton';

describe('<Boton />', () => {
  test('it should mount', () => {
    render(<Boton />);
    
    const boton = screen.getByTestId('Boton');

    expect(boton).toBeInTheDocument();
  });
});