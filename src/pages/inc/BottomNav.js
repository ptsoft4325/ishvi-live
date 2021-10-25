import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import React, { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function BottomNav() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, pb: 2, pt: 1 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value} onChange={handleChange}
                sx={{ fontFamily: 'Montserrat' }}
            >
                <BottomNavigationAction sx={{ fontFamily: 'Montserrat' }} label="Home" icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteBorderIcon />} />
                <BottomNavigationAction label="Documents" icon={<AssignmentOutlinedIcon />} />
                <BottomNavigationAction label="WhatsApp" icon={<WhatsAppIcon />} />
                <BottomNavigationAction sx={{ fontFamily: 'Montserrat' }} label="More" icon={<MoreHorizIcon />} />
            </BottomNavigation>
        </Paper>
    )
}
