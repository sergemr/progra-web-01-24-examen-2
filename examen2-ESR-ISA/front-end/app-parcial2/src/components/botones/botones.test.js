import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Botones from './botones';

describe('<Botones />', () => {
  test('it should mount', () => {
    render(<Botones />);
    
    const botones = screen.getByTestId('Botones');

    expect(botones).toBeInTheDocument();
  });
});