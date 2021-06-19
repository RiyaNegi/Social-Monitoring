import React, { useContext } from 'react'
import { render, waitFor } from '@testing-library/react'
import { GlobalProvider, GlobalContext } from '../../context/Provider'
import Dashboard from "./index"
import { outreach, totalMentions, buzz, sentiment, wordCloud, identity } from '../../context/actions/dashboard'
import AxiosInstance from '../../helpers/AxiosInstance'
import axios from "axios"
jest.mock('../../context/actions/dashboard')
jest.mock('../../helpers/AxiosInstance');
const renderWithContext = (
    component) => {

    return {
        ...render(
            <GlobalProvider value={GlobalContext}>
                {component}
            </GlobalProvider>)
    }
}

jest.mock("axios", () => ({
    get: jest.fn(() => {
        return Promise.resolve();
    }),
    create: jest.fn(() => {
        return this;
    }),
    post: jest.fn(() => {
        return Promise.resolve();
    })
}));

it('should display a loader and then display dashboard', async () => {
    const data = {
        "highlow": [
            {
                "date": "2021-06-06",
                "high": 6,
                "low": 4
            }, {
                "date": "2021-06-07",
                "high": 2,
                "low": 8
            }
        ]
    }

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    buzz.mockResolvedValueOnce(data);

    const { getByTestId } = renderWithContext(<Dashboard />)

    expect(getByTestId('loader')).toHaveTextContent('Updating the Dashboard')
    expect(identity).toHaveBeenCalledTimes(1);
    expect(buzz).toHaveBeenCalledTimes(1);
})
