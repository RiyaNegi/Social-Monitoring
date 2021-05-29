import React from 'react'
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react'
import { GlobalProvider, GlobalContext } from '../../context/Provider'
import axiosMock from 'axios'
import Dashboard from "./index"

jest.mock('../../helpers/mock')


const renderWithContext = (
    component) => {
    return {
        ...render(
            <GlobalProvider value={GlobalContext}>
                {component}
            </GlobalProvider>)
    }
}

afterEach(cleanup);


it('should display a loader', () => {

    const { getByTestId } = renderWithContext(<Dashboard />)

    expect(getByTestId('loader')).toHaveTextContent('Updating the Dashboard')
})

it('should load and display the data', async () => {
    const url1 = '/outreach'
    // const url2 = '/sentiment'
    // const url3 = '/buzz'
    // const url4 = '/wordCloud'
    // const url5 = '/totalMentions'
    // url2={url2} url3={url3} url4={url4} url5={url5}
    const { getByTestId } = renderWithContext(<Dashboard url1={url1} />)

    const Data = await waitFor(() => getByTestId('show-data'))
    const outreach = getByTestId('outreach')

    expect(axiosMock.get).toHaveBeenCalledTimes(1)
    expect(axiosMock.get).toHaveBeenCalledWith(url1)

    // expect(axiosMock.get).toHaveBeenCalledWith(url2)
    // expect(axiosMock.get).toHaveBeenCalledWith(url3)
    // expect(axiosMock.get).toHaveBeenCalledWith(url4)
    // expect(axiosMock.get).toHaveBeenCalledWith(url5)
    expect(getByTestId('loader')).toHaveTextContent('Updating the Dashboard')

    expect(Data).toContainElement(outreach)
})