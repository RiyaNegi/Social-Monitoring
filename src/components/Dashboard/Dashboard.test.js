import React from 'react'
import { render } from '@testing-library/react'
import { GlobalProvider, GlobalContext } from '../../context/Provider'
import Dashboard from "./index"


const renderWithContext = (
    component) => {
    return {
        ...render(
            <GlobalProvider value={GlobalContext}>
                {component}
            </GlobalProvider>)
    }
}


it('should display a loader and then display dashboard', () => {

    const { getByTestId } = renderWithContext(<Dashboard />)

    expect(getByTestId('loader')).toHaveTextContent('Updating the Dashboard')
})
