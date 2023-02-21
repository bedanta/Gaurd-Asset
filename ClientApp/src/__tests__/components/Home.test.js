
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react';
import {Home} from '../../components/Home';
import * as operations from '../../database/operations'

  describe('Test for Home',()=>{
    test('Test getAllAssets is called inside the useEffect',async ()=> { 
       jest.spyOn(React,'useEffect').mockImplementation((fn)=>fn());
       jest.spyOn(operations,'getAllAssets');
       render(<Home/>);
       await waitFor(() => {
        expect(operations.getAllAssets).toHaveBeenCalledTimes(1);
      }); 
    })
})