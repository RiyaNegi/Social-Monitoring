import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import { createMemoryHistory } from 'history'
import { GlobalProvider, GlobalContext } from '../../context/Provider'
import { useContext } from "react"
import InitialState from "../../context/InitialState"
import Dashboard from '../Dashboard';

const renderWithContext = (
    component) => {
    return {
        ...render(
            <GlobalProvider value={GlobalContext}>
                {component}
            </GlobalProvider>)
    }
}



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
    fireEvent.change(input, { target: { value: "riyanegi" } })
    fireEvent.change(inputPswd, { target: { value: "riya" } })
    // fireEvent.click(screen.getByRole('button', { name: 'Login' }));
});

// test('end to end test for succesful login action', async () => {
//     const { getByTestId } = renderWithContext(<BrowserRouter>
//         <Login />
//     </BrowserRouter>);

//     const formHeading = screen.getByText("Login");
//     const input = screen.getByTestId("email")
//     const inputPswd = screen.getByTestId("password")
//     const warning = screen.getByTestId('warning')

//     expect(formHeading).toBeInTheDocument();
//     fireEvent.change(input, { target: { value: "riyanegi" } })
//     fireEvent.change(inputPswd, { target: { value: "riya" } })
//     fireEvent.click(screen.getByRole('button', { name: 'Login' }));
//     // await expect(warning).toBeInTheDocument()
//     await expect(getByTestId('warning')).toBeInTheDocument()
// });


// test('Integration test for login page to dashboard', () => {
//     render(<BrowserRouter>
//         <Login />
//     </BrowserRouter>);
//     const authState = { error: "Login failed. Wrong email or password" }
//     const headerText = screen.getByText("Social Sprout");
//     const formHeading = screen.getByText("Login");
//     const input = screen.getByTestId("email")
//     const inputPswd = screen.getByTestId("password")

//     expect(headerText).toBeInTheDocument();
//     expect(formHeading).toBeInTheDocument();
//     fireEvent.change(input, { target: { value: "mike" } })
//     fireEvent.change(inputPswd, { target: { value: "mike" } })
//     // fireEvent.click(screen.getByRole('button', { name: 'Login' }));
//     const { getByTestId } = render(<BrowserRouter>
//         <Dashboard />
//     </BrowserRouter>);
//     expect(getByTestId('loader')).toHaveTextContent('Updating the Dashboard')

// });