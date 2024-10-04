# React Testing Project: Recipe App
This project is a React-based recipe application that requires comprehensive testing. The main focus is on testing components with specific data-testid attributes. Here's an overview of the testing requirements and how to use them:

## Files to Test
1. App.jsx
2. components/Card.jsx
3. components/Footer.jsx
4. components/NavBar.jsx

## Elements to Test (by data-testid)
1. `image-banner`
2. `img-recipe-n` (where n is the el.id value from Card props)
3. `title-recipe-n`
4. `rating-recipe-n`
5. `link-recipe-n`
6. `footer-text`
7. `link-facebook`
8. `link-x`
9. `link-instagram`
10. `my-recipe`
11. `form-search`

## Testing Guidelines
- For image elements: Test both `src` and `alt` attributes
- For text elements (h1-h6, p, span): Test innerHTML using .toBe matcher
- For anchor elements: Test the href attribute
- For the Card component: Use hardcoded props data for testing one instance

## How to Use data-testid
1. In your React components, add the `data-testid` attribute to the elements you want to test. For example:
   ```jsx
   <img src={bannerImage} alt="Banner" data-testid="image-banner" />
   ```

2. In your test files, use the `getByTestId` function from React Testing Library to select elements:
   ```javascript
   const bannerImage = screen.getByTestId('image-banner');
   expect(bannerImage).toHaveAttribute('src', expectedSrc);
   expect(bannerImage).toHaveAttribute('alt', 'Banner');
   ```

3. For dynamic testids like `img-recipe-n`, use a template literal in your component:
   ```jsx
   <img src={el.image} alt={el.name} data-testid={`img-recipe-${el.id}`} />
   ```
   And in your test:
   ```javascript
   const recipeImage = screen.getByTestId(`img-recipe-${el.id}`);
   ```

## Additional Information
- This project uses Jest and React Testing Library for unit and integration tests
- Ensure to mock API calls and use appropriate test data
- Pay attention to component interactions and state management
- Consider edge cases and error handling in your tests
- Aim for high test coverage, but focus on meaningful tests rather than just hitting a coverage percentage

Remember, good tests not only verify that the code works as expected but also serve as documentation for how the components should behave. By using data-testid attributes, you make your tests more resilient to changes in the component structure or styling. Happy testing!