import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Asset from '../../components/Asset';

describe('Test for Asset', () => {
    test('Test Rendering asset name', async () => {
        render(<Asset name="test-asset-name" value={200} />)
        expect(await screen.findByText("test-asset-name")).toBeInTheDocument()
    })

    test('Test Rendering asset value', async () => {
        render(<Asset name="test-asset-name" value={200} />)
        expect(await screen.findByText("200", { exact: false })).toBeInTheDocument()
    })
})