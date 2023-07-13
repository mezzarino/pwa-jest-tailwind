import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from "../../src/app/components/card";

describe('Card component', () => {
  it('should render the card with the given props', () => {
    const mockProps = {
      imageSrc: '/image.jpg',
      imageAlt: 'Image Alt Text',
      link: '/link',
      title: 'Title'
    };
    const { getByText } = render(<Card {...mockProps} />);

    expect(getByText(mockProps.title)).toBeInTheDocument();
    expect(getByText('Read more')).toBeInTheDocument();

    const testImage = document.querySelector("img");
    expect(testImage.alt).toContain(mockProps.imageAlt);

    const testLink = document.querySelector('a');
    expect(testLink.href).toContain(mockProps.link);
  });
});