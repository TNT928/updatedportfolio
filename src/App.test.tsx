import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the VanderLoon Media navigation', () => {
  render(<App />);
  expect(screen.getAllByRole('link', { name: /VanderLoon Media/i }).length).toBeGreaterThan(0);
});
