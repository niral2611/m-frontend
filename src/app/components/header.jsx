'use client';

import React, { useState, useEffect } from "react";
import { useSession, signOut } from 'next-auth/react';
import { Box, Avatar, Typography, IconButton, Menu, MenuItem, ListItemIcon } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Header = ({ isOpen }) => {

    const { data: session } = useSession();

    const [isRateLimited, setIsRateLimited] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const userName = session?.user?.name;
    const userImage = session?.user?.image;
    
    function stringToColor(string) {
        if (!string) return '#ccc';
        let hash = 0;
        let i;

        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        const colorHue = hash%360;
        return `hsl(${colorHue}, 70%, 50%)`
    }
      
    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }
    
    useEffect(() => {
        const checkAvatar = async () => {
            if(!userImage) return;
            try{
                const response = await fetch(userImage);
                if (response.status !== 200) {
                    setIsRateLimited(true);
                }
            } catch(error) {
                console.error("Error fetching avatar: ", error);
            }
        }
        checkAvatar();
    }, [userImage]);

    const handleMenuOpen = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const handleLogout = () => {
        signOut();
    }

    return (

        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px 20px',
            color: '#1a1a1a',
            backgroundColor: '#f1f1f1',
            transition: 'transform 2s ease-in-out',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                transform: isOpen ? 'translateX(250px)' : 'translateX(0)',
                transition: 'transform 1s ease-in-out',
            }}>


                <Avatar
                    alt="PierSight Logo"
                    src="https://s3-alpha-sig.figma.com/img/26f1/af87/1e41516f065f506d61892368566a8e19?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uGllddLki9mQXZPSCtbGM1ljTz5hXZRpcaUgunNmCbsng02A9O0QcOO~7FzqJ6GXprlZS~aAjBNA3gqmXbjVTPjM2JN9~CRxrDyD-VHFShyv0xnY3Pl9VojnZSd7Y3i7T0ZERuwnjk7wo1aWZ6rzcxjKQAj3cjYbK~B-zBYVAJ-PGkz6BuTxK3kzjHpO~6pUgbtmDQFlZQwQKs6LswkA4Dme1cNLDoYO4EpXRGHyTzb~2VAfYOYdDLQYmPmqQ3-HISnds-U14FuStibz5El9QG1jxBBiNF5SFkuztae5mCEquXkdgfWC310fQB3FE1UBRqNpeRmI0HZuZTH31naF3Q__"
                    sx={{ 
                        width: '40px', 
                        height: '40px', 
                        marginLeft: '10px' 
                    }}
                />
                <Box ml={2}>
                    <Typography 
                        variant='subtitle1' 
                        sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
                    >
                        PierSight Space
                    </Typography>
                    <Typography 
                        variant="body2" 
                        sx={{ color: "#888", fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Ahmedabad Office
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
            }}>
                {
                    userName && isRateLimited ?
                        <Avatar 
                            alt='User'
                            {...stringAvatar(userName)}
                            sx={{
                                width: 40,
                                height: 40,
                                bgcolor: '#26d1b4',
                                border: '2px solid #10685a',
                                fontFamily: 'Monteserrat, sans-serif',
                                fontSize: '1rem',
                            }} 
                        />
                    :
                        <Avatar 
                            alt='User'
                            src= {userImage}
                            sx={{
                                width: 40,
                                height: 40,
                            }} 
                        />
                }
                
                <Box ml={2}>
                    <Typography 
                        variant='subtitle1' 
                        sx={{ fontWeight: 600, fontFamily: 'Montserrat, sans-serif' }}
                    >
                        {userName}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        color="#888"
                        sx={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        2108 credits
                    </Typography>
                </Box>
                <IconButton size='small' onClick={handleMenuOpen}>
                    <KeyboardArrowDownIcon sx={{color: '#000'}}/>
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    slotProps={{
                        paper: {
                            sx: {
                                marginTop: '20px',
                                borderRadius: '7px',
                                backgroundColor: '#3a3a3a',
                                color: '#fff',
                            }
                        }
                    }}
                >
                    <MenuItem 
                        onClick={handleLogout}
                        sx={{
                            fontSize: {
                                xs: '12px', 
                                sm: '14px', 
                                md: '16px',
                            },
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            '&:hover': {
                                backgroundColor: '#444',
                            },
                        }}   
                    >
                        <ListItemIcon>
                            <LogoutRoundedIcon 
                                fontSize="small" 
                                sx={{
                                    color: '#ccc', 
                                    marginLeft: '0px',
                                    fontSize: {
                                        xs: '16px',
                                        sm: '18px',
                                        md: '20px',
                                    }
                                }}
                            />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Box>            
        </Box>
    );
};

export default Header;
