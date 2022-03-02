import React from 'react';
import {CssBaseline, Typography} from "@mui/material";

function App() {
  return (
    <div
        style={{
            flex: '1',
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <CssBaseline />
        <Typography variant="h2">
            Starter App
        </Typography>
    </div>
  );
}

export default App;
