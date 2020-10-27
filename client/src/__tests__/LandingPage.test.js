import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from '../pages/LandingPage';

test('renders story cards', () => {
  const { getAllByText } = render(<LandingPage />);
  expect(getAllByText('This is a story card.')[0]).toBeInTheDocument();
});


