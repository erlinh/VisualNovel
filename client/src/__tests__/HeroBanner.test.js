import React from 'react';
import { render } from '@testing-library/react';
import HeroBanner from '../components/HeroBanner/HeroBanner';

test('HeroBanner renders "Hello, John!" when passed "John" as prop', () => {
  const { getByText } = render(<HeroBanner name={'John'} />);
  expect(getByText('Hello, John!')).toBeInTheDocument();
});

