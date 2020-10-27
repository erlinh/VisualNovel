// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders h1 element', () => {
  const { getByText } = render(<App />);
  expect(getByText('this is landing page. Includes all the components belongs to landing page')).toBeInTheDocument();
});
