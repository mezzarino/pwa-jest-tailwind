import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../src/app/page';

describe('Home', () => {
  it('should render the home page', () => {
    const { container } = render(<Home />);
    const header = container.querySelector('h1');

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Travel guides');
  });
});