import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import User from '../../img/user.png';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
    return (
        <Box sx={{ display: 'inline', display: 'flex', flexGrow: 1, flexDirection: 'row', bgcolor: '#fafafa' }}>
            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"

                color="inherit"
                sx={{ marginTop: 2, marginLeft: 1, }}
            >
                <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>

            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"

                color="inherit"
                sx={{ marginTop: 2, flex: 2, justifyContent: 'flex-end' }}
            >
                <SearchIcon sx={{ fontSize: 25 }} />
            </IconButton>

            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"

                color="inherit"
                sx={{ marginTop: 2, justifyContent: 'flex-end' }}
            >
                <ShareOutlinedIcon sx={{ fontSize: 25 }} />
            </IconButton>

            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"

                color="inherit"
                sx={{ marginTop: 2, justifyContent: 'flex-end' }}
            >
                <NotificationsNoneIcon sx={{ fontSize: 25 }} />
            </IconButton>

            <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                aria-haspopup="true"

                color="inherit"
                sx={{ marginTop: 2, marginRight: 1, justifyContent: 'flex-end' }}
            >
                <img src={User} />
            </IconButton>


        </Box>
    )
}
