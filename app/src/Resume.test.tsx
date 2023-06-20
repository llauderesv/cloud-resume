import {render, screen} from '@testing-library/react';
import Resume from './Resume';

test('renders learn react link', () => {
  render(<Resume />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
