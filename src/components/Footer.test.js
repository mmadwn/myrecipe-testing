import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('renders footer text', () => {
    const footerText = screen.getByTestId('footer-text');
    expect(footerText).toBeInTheDocument();
    expect(footerText).toHaveTextContent(/\S/); // Checks if there's non-whitespace content
  });

  test('renders social media links', () => {
    const socialLinks = [
      { testId: 'link-facebook', href: 'https://facebook.com' },
      { testId: 'link-x', href: 'https://x.com' },
      { testId: 'link-instagram', href: 'https://instagram.com/' }
    ];

    socialLinks.forEach(({ testId, href }) => {
      const link = screen.getByTestId(testId);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
    });
  });
});

