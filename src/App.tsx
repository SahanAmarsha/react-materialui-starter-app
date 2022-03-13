import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {createTheme} from '@mui/material/styles';
import Home from "./pages/Home";
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from "./components/Layout";

function App() {

    // define theme
    const theme = createTheme({
        palette: {
            primary: {
                light: '#63b8ff',
                main: '#0989e3',
                dark: '#005db0',
                contrastText: '#000',
            },
            secondary: {
                main: '#4db6ac',
                light: '#82e9de',
                dark: '#00867d',
                contrastText: '#000',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <Layout>
                    <Home/>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;
