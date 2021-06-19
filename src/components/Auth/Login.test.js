import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import { GlobalProvider, GlobalContext } from '../../context/Provider'
// jest.mock('AuthAxios')

global.window = { location: { pathname: null } };


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
    renderWithContext(<BrowserRouter>
        <Login authState={{ error: "" }} />
    </BrowserRouter>);
    const headerText = screen.getByText("Canary");
    const formHeading = screen.getByText("Login");
    expect(headerText).toBeInTheDocument();
    expect(formHeading).toBeInTheDocument();
});

test('login page form cannot be submitted if any empty values', () => {
    renderWithContext(<BrowserRouter>
        <Login />
    </BrowserRouter>);
    const headerText = screen.getByText("Canary");
    const formHeading = screen.getByText("Login");
    const input = screen.getByTestId("email")
    const inputPswd = screen.getByTestId("password")

    expect(headerText).toBeInTheDocument();
    expect(formHeading).toBeInTheDocument();
    fireEvent.change(input, { target: { value: " " } })
    fireEvent.change(inputPswd, { target: { value: "riya" } })
});

test('Submit login page', () => {

    const AuthAxios = jest.fn().mockImplementation(() => ({ data: { access_token: "riya" } }))
    const { getByTestId } = renderWithContext(<BrowserRouter>
        <Login authState={{ error: "" }} />
    </BrowserRouter>);

    const input = screen.getByTestId("email")
    const inputPswd = screen.getByTestId("password")
    // const login = screen.getAllByText("Login")
    fireEvent.change(input, { target: { value: "mike" } })
    fireEvent.change(inputPswd, { target: { value: "mike" } })
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));
    // expect(global.window.location.pathname).toEqual('/login');
    console.log("location:", global.window.location.pathname)

    // expect(getByTestId('loader')).toHaveTextContent('Updating the Dashboard')
    // expect(location.pathname).to.equal('/dashboard')
});