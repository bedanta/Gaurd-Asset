import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import AssetGroup from '../../components/AssetGroup';

const testAssets = [{ name: "Knife", value: 200 }, { name: "Spoon", value: 100 }]

describe('Test for AssetGroup', () => {
    test('Test sum of all asset values in a group', async () => {
        render(<AssetGroup assets={testAssets} />)

        const element = screen.getByTestId('group-total')
        expect(element).toHaveTextContent("300")
    })

    test('Test Rendering asset names', async () => {
        render(<AssetGroup assets={testAssets} />)

        expect(await screen.findByText("Knife")).toBeInTheDocument()
        expect(await screen.findByText("Spoon")).toBeInTheDocument()
    })

    test('Test Rendering asset values', async () => {
        render(<AssetGroup assets={testAssets} />)

        expect(await screen.findByText("200", { exact: false })).toBeInTheDocument()
        expect(await screen.findByText("100", { exact: false })).toBeInTheDocument()
    })
})