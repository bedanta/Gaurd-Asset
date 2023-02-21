import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import AssetForm from '../../components/AssetForm';

describe('Test for AssetForm', () => {
    test('Test addAsset() is not called if  input fields are empty ', async () => {
        const mockedAddAsset = jest.fn()
        window.alert = () => { }
        render(<AssetForm addAsset={mockedAddAsset} categories={["CategoryA"]} />)
        const button = screen.getByText("Add")
        fireEvent.click(button)
        expect(mockedAddAsset).not.toHaveBeenCalled()
    })

    test('Test form submission is success if input fields are not empty ', async () => {
        const mockedAddAsset = jest.fn()
        window.alert = () => { }
        render(<AssetForm addAsset={mockedAddAsset} categories={["CategoryA"]} />)

        const nameInput = screen.getByTestId("input-name")
        const valueInput = screen.getByTestId("input-value")
        fireEvent.change(nameInput, { target: { value: "Spoon" } })
        fireEvent.change(valueInput, { target: { value: 250 } })

        const button = screen.getByText("Add");
        fireEvent.click(button)
        expect(mockedAddAsset).toHaveBeenCalledTimes(1);
    })
})