import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

test('renders login page', () => {
    render(<BrowserRouter>
        <Login />
    </BrowserRouter>);
    const headerText = screen.getByText("Social Sprout");
    const formHeading = screen.getByText("Login");
    const input = screen.getByTestId("email")
    const inputPswd = screen.getByTestId("password")

    expect(headerText).toBeInTheDocument();
    expect(formHeading).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "riyanegi221b@gmail.com" } })
    fireEvent.change(inputPswd, { target: { value: "Test@123" } })
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));


});
