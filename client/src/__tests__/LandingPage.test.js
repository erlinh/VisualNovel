import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from '../pages/LandingPage';

test('renders hero banner text', () => {
  const { getByText } = render(<LandingPage />);
  expect(getByText('This is hero banner')).toBeInTheDocument();
});

test('renders story cards', () => {
  const { getAllByText } = render(<LandingPage />);
  expect(getAllByText('This is a story card.')[0]).toBeInTheDocument();
});


