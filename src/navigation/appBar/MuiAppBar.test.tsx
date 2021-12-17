import React, { SetStateAction } from 'react';
import { render, screen } from '@testing-library/react';
import MuiAppBar from './MuiAppBar';
import {Grid, Paper} from '@mui/material';

test('renders app name on MUIAppar.tsx', () => {
    const {getByTestId} = render(
    <MuiAppBar setDarkMode=
    {
        function (value: SetStateAction<boolean>): void 
        {
            throw new Error('Function not implemented.');
        }
    } darkMode={false} >
        <Grid></Grid>
    </ MuiAppBar>);
    const appBarText = getByTestId('appName');
    expect(appBarText.textContent).toBe('Best Blog Bro');
});
