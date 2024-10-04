import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

const el = {
  image: 'https://via.placeholder.com/150',
  name: 'Test Recipe',
  rating: 4.5,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  id: 1
};

describe('Card Component', () => {
  beforeEach(() => {
    render(<Card el={el} />);
  });

  test('renders the image with correct src and alt', () => {
    const image = screen.getByTestId(`img-recipe-${el.id}`);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', el.image);
    expect(image).toHaveAttribute('alt', el.name);
  });

  test('renders the title with correct text', () => {
    const title = screen.getByTestId(`title-recipe-${el.id}`);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(el.name);
  });

  test('renders the rating with correct value', () => {
    const rating = screen.getByTestId(`rating-recipe-${el.id}`);
    expect(rating).toBeInTheDocument();
    expect(rating).toHaveTextContent(el.rating.toString());
  });

  test('renders only the first two tags', () => {
    el.tags.slice(0, 2).forEach((tag) => {
      const tagElement = screen.getByTestId(`tag-recipe-${tag}`);
      expect(tagElement).toBeInTheDocument();
      expect(tagElement).toHaveTextContent(tag);
    });

    // Check that the third tag is not rendered
    const thirdTag = screen.queryByTestId(`tag-recipe-${el.tags[2]}`);
    expect(thirdTag).not.toBeInTheDocument();
  });

  test('renders the link with correct href', () => {
    const link = screen.getByTestId(`link-recipe-${el.id}`);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `https://dummyjson.com/recipes/${el.id}`);
  });
});
