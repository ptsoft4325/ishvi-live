import React from 'react';
import BottomNav from './inc/BottomNav';
import Navbar from './inc/Navbar';
import { styled } from "@mui/material/styles";
import { Box } from '@mui/system';

const useStyles = styled((theme) => ({
    root: {
        flexGrow: 1,
        bgcolor: '#E5E5E5',
        fontFamily: 'Montserrat'
    }

}));

const CollegeDetails = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root} sx={{ bgcolor: '#fafafa', }}>
            <Navbar />


            <BottomNav />
        </Box>
    )
}

export default CollegeDetails;
