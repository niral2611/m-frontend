'use client'

import React from "react";
import { useSession } from "next-auth/react";
import { Box, Avatar, Typography, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '800'],
    variable: '--font-poppins',
})

const Header = () => {
    const { data: session } = useSession();

    const userName = session?.user?.name;
    const userImage = session?.user?.image;


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px 20px',
            backgroundColor: '#f5f5f5',
            }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <img
                    alt="PierSight Logo"
                    src="https://s3-alpha-sig.figma.com/img/26f1/af87/1e41516f065f506d61892368566a8e19?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uGllddLki9mQXZPSCtbGM1ljTz5hXZRpcaUgunNmCbsng02A9O0QcOO~7FzqJ6GXprlZS~aAjBNA3gqmXbjVTPjM2JN9~CRxrDyD-VHFShyv0xnY3Pl9VojnZSd7Y3i7T0ZERuwnjk7wo1aWZ6rzcxjKQAj3cjYbK~B-zBYVAJ-PGkz6BuTxK3kzjHpO~6pUgbtmDQFlZQwQKs6LswkA4Dme1cNLDoYO4EpXRGHyTzb~2VAfYOYdDLQYmPmqQ3-HISnds-U14FuStibz5El9QG1jxBBiNF5SFkuztae5mCEquXkdgfWC310fQB3FE1UBRqNpeRmI0HZuZTH31naF3Q__"
                    style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '100%' 
                    }}
                />
                <Box ml={2}>
                    <Typography variant='subtitle1' >
                        PierSight Space
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#888"}}>
                        Ahmedabad Office
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt='User'
                    src={userImage}
                    sx={{
                        width: 40,
                        height: 40, 
                        bgcolor: '#f5a623'
                    }} 
                />
                <Box ml={2}>
                    <Typography variant='subtitle1' fontWeight="600" className={poppins.className}>
                        {userName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        2108 credits
                    </Typography>
                </Box>
                <IconButton size='small'>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </Box>            
        </Box>
    )
}

export default Header;