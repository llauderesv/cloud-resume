import React from 'react';
import { render, screen } from '@testing-library/react';
import Resume from './App';

test('renders learn react link', () => {
  render(<Resume />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
