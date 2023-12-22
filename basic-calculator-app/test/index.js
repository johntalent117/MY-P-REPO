// Import the necessary modules.
import { render, screen } from '@testing-library/react';
import App from '../src/App';

// Define the test suite.
describe('Basic Calculator App', () => {
  // Define the test case.
it('should render the calculator correctly', () => {
    // Render the App component.
    render(<App />);

    // Check if the input field is rendered.
    const input = screen.getByRole('textbox');
expect(input).toBeInTheDocument();

    // Check if the equals button is rendered.
    const equalsButton = screen.getByText('=');
expect(equalsButton).toBeInTheDocument();

    // Check if the number buttons are rendered.
    const numberButtons = screen.getAllByRole('button', { name: /[0-9]/ });
expect(numberButtons).toHaveLength(10);

    // Check if the operator buttons are rendered.
    const operatorButtons = screen.getAllByRole('button', { name: /[+-/*]/ });
expect(operatorButtons).toHaveLength(4);

    // Check if the clear button is rendered.
    const clearButton = screen.getByText('C');
expect(clearButton).toBeInTheDocument();
  });
});