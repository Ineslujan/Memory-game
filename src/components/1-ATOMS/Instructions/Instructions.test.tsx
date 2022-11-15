import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Instructions from './Instructions';

describe('component: Instructions', () => {
  test('is the instruction display minute ?', () => {
    render(<Instructions second={1} />);

    expect(screen.getByText(/minute/i)).toBeInTheDocument();
  });
});
