import React, {FC} from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";

export const Footer: FC = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: 'auto',
                backgroundColor: 'secondary.main',
                paddingTop: '1rem',
                paddingBottom: '1rem',
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography
                            color="black"
                            variant="h5"
                        >
                            React Starter App
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            color="textSecondary"
                            variant="subtitle1"
                        >
                            &copy;
                            {`${(new Date().getFullYear())} All Rights Reserved.`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
