import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from "../../src/app/components/header";

describe('Header', () => {
  it('renders the title and text correctly', () => {
    const mockProps = {
      title: 'Test Title',
      text: 'Test Text'
    };
    const { getByText } = render(<Header {...mockProps} />);
    expect(getByText(mockProps.title)).toBeInTheDocument();
    expect(getByText(mockProps.text)).toBeInTheDocument();
  });
});