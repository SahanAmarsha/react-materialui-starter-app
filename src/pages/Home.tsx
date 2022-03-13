import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";

const Home: FC<any> = (): ReactElement => {
    return (
        <Box flex={1} sx={{flexGrow: 1, backgroundColor: 'lightblue', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h3">Home</Typography>
        </Box>
    );
};

export default Home;