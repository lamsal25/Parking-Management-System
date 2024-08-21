import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navigation from '../components/navigation/Navigation'; // Assuming this is the path to your Navigation component

test('Navigation is properly displayed', () => {
  // Render the Navigation component
  render(<Navigation />);

  // Assert that the navigation bar is rendered
  const navigationBar = screen.getByTestId('navigation-bar');
  expect(navigationBar).toBeDefined();

  // Assert that the logo is rendered
  const logo = screen.getByAltText('EasyWayPark');
  expect(logo).toBeDefined();

  // Assert that the navigation links are rendered
  const homeLink = screen.getByRole('link', { name: /home/i });
  expect(homeLink).toBeDefined();

  const aboutLink = screen.getByRole('link', { name: /about us/i });
  expect(aboutLink).toBeDefined();

  const contactLink = screen.getByRole('link', { name: /contact/i });
  expect(contactLink).toBeDefined();

  // Assert that the login and register buttons are rendered
  const loginButton = screen.getByRole('button', { name: /login/i });
  expect(loginButton).toBeDefined();

  const registerButton = screen.getByRole('button', { name: /register/i });
  expect(registerButton).toBeDefined();
});