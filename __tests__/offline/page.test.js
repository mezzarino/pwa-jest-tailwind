import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Offline from '../../src/app/offline/page';

describe('Offline', () => {
  it('should render the offline page', () => {
    const { container } = render(<Offline />);
    const header = container.querySelector('h1');

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Offline');
  });
});