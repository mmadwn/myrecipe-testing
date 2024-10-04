import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar Component', () => {
  let renderNavBar;

  beforeEach(() => {
    renderNavBar = (props = {}) => {
      return render(<NavBar {...props} />);
    };
  });

  test('renders with My Recipe text', () => {
    renderNavBar();
    const myRecipeText = screen.getByTestId('my-recipe');
    expect(myRecipeText).toBeInTheDocument();
    expect(myRecipeText).toHaveTextContent('My Recipe');
  });

  test('renders search button and handles search submission', () => {
    const mockSearch = jest.fn();
    renderNavBar({ search: mockSearch });
    
    const searchInput = screen.getByPlaceholderText('Recipe Name');
    const searchButton = screen.getByRole('button', { name: /search/i });
    expect(searchButton).toBeInTheDocument();
    
    fireEvent.change(searchInput, { target: { value: 'Pasta' } });
    fireEvent.click(searchButton);
    
    expect(mockSearch).toHaveBeenCalledWith('Pasta');
    expect(searchInput).toHaveValue('');
  });

  test('handles form submission on enter key', () => {
    const mockSearch = jest.fn();
    renderNavBar({ search: mockSearch });
    
    const searchInput = screen.getByPlaceholderText('Recipe Name');
    
    fireEvent.change(searchInput, { target: { value: 'Salad' } });
    fireEvent.submit(screen.getByTestId('form-search'));
    
    expect(mockSearch).toHaveBeenCalledWith('Salad');
    expect(searchInput).toHaveValue('');
  });
});
