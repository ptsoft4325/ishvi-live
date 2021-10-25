import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import { BottomNavigation, BottomNavigationAction, Button, Chip, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Scholar from '../img/scholarship.png';
import Programs from '../img/programs.png';
import Sop from '../img/sop.png';
import Reset from '../img/reset.png';
import Submit from '../img/submit.png';
import User from '../img/user.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import axios from 'axios';
import Result from './Result';
import Navbar from './inc/Navbar';
import BottomNav from './inc/BottomNav';


const useStyles = styled((theme) => ({
    root: {
        flexGrow: 1,
        bgcolor: '#E5E5E5',
        fontFamily: 'Montserrat'
    }

}));



const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const Home = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState('recents');

    const [degree, setDegree] = useState('');
    const [program, setProgram] = useState('');
    const [country, setCountry] = useState('');

    const [searchList, setSearchList] = useState([]);

    const submit = async () => {
        const params = new URLSearchParams();
        params.append('degree_type', degree);
        params.append('program', program);
        params.append('country', country);
        params.append('page', '1');
        params.append('operation', 'profileEvaluationDetails');
        params.append('call_frm', 'mobile');
        params.append('userid', '633575');
        const response = await axios.post("https://erp.bscglobaledu.com/mapi/JsonApi/", params
            , {
                'Access-Control-Allow-Origin': '*',
            });

        setSearchList(response.data.data);
        // console.log(response.data.data);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            {
                !searchList.length > 0 ?

                    <Box className={classes.root} sx={{ bgcolor: '#fafafa', }}>

                        <Navbar />

                        <Box sx={{
                            bgcolor: '#fff',
                            marginLeft: 2,
                            marginRight: 2,
                            borderRadius: 2,
                            marginTop: 4,
                        }}>
                            <Typography sx={{ padding: 2, fontFamily: 'Montserrat' }}>
                                Search Universities
                            </Typography>

                            <FormControl fullWidth sx={{ my: 1, }}>
                                <InputLabel sx={{ fontFamily: 'Montserrat', mx: 2 }}>Degree Type</InputLabel>
                                <Select
                                    sx={{ borderRadius: 2, mx: 2 }}
                                    input={<OutlinedInput label="Degree Type" />}
                                    onChange={(e) => setDegree(e.target.value)}
                                >
                                    <MenuItem value='Masters' selected>
                                        Masters
                                    </MenuItem>

                                </Select>
                            </FormControl>

                            <FormControl fullWidth sx={{ my: 1, }}>
                                <InputLabel sx={{ fontFamily: 'Montserrat', mx: 2 }}>Program Name</InputLabel>
                                <Select
                                    sx={{ borderRadius: 2, mx: 2 }}
                                    input={<OutlinedInput label="Program Name" />}
                                    onChange={(e) => setProgram(e.target.value)}
                                >
                                    <MenuItem selected value="Aerospace Engineering">
                                        Aerospace Engineering
                                    </MenuItem>

                                </Select>
                            </FormControl>

                            <FormControl fullWidth sx={{ my: 1, }}>
                                <InputLabel sx={{ fontFamily: 'Montserrat', mx: 2 }}>Country</InputLabel>
                                <Select
                                    sx={{ borderRadius: 2, mx: 2 }}
                                    input={<OutlinedInput label="Country" />}
                                    onChange={(e) => setCountry(e.target.value)}
                                >
                                    <MenuItem selected value="USA">
                                        USA
                                    </MenuItem>

                                </Select>
                            </FormControl>

                            <Grid container spacing={1}>
                                <Grid item mx='auto' xs={6} sx={{ textAlign: 'center', }}>
                                    <img src={Reset} width="180px" />

                                </Grid>
                                <Grid item mx='auto' xs={6} sx={{ textAlign: 'center', mt: 1 }}>
                                    <img onClick={submit} src={Submit} width="150px" />
                                </Grid>
                            </Grid>

                        </Box>

                        <Box sx={{ height: '500px' }}>
                            <Grid container sx={{ textAlign: 'center', mt: 3, }} spacing={1}>
                                <Grid mx='auto' item sx={{ position: 'relative' }}>
                                    <img src={Scholar} width="100px" />
                                    <Chip sx={{ position: 'absolute', left: 0, right: 0, ml: 'auto', mr: 'auto', width: '60%', mt: 10, bgcolor: '#FFFFFF', boxShadow: 1, fontFamily: 'Montserrat' }} label="View" variant="filled" />
                                </Grid>
                                <Grid mx='auto' item sx={{ position: 'relative' }}>
                                    <img src={Programs} width="100px" />
                                    <Chip sx={{ position: 'absolute', left: 0, right: 0, ml: 'auto', mr: 'auto', width: '60%', mt: 10, bgcolor: '#FFFFFF', boxShadow: 1, fontFamily: 'Montserrat' }} label="View" variant="filled" />
                                </Grid>
                                <Grid mx='auto' item sx={{ position: 'relative' }}>
                                    <img src={Sop} width="100px" />
                                    <Chip sx={{ position: 'absolute', left: 0, right: 0, ml: 'auto', mr: 'auto', width: '60%', mt: 10, bgcolor: '#FFFFFF', boxShadow: 1, fontFamily: 'Montserrat' }} label="View" variant="filled" />
                                </Grid>
                            </Grid>
                        </Box>


                        <BottomNav />
                    </Box >
                    :
                    <Result searchList={searchList} />
            }
        </>
    )
}

export default Home;
