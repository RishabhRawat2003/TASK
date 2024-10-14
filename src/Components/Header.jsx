import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { IoIosCall } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));


function Header() {
    const [userOne, setUserOne] = useState({});

    const userOneDetails = useSelector((state) => state.user.userOne);
    const userTwoDetails = useSelector((state) => state.user.userTwo);

    useEffect(() => {
        if (userOneDetails) {
            setUserOne(userOneDetails);
        }
    }, [userOneDetails]);

    return (
        <header className='w-full h-auto p-4 bg-gray-800 flex justify-between items-center md:w-[60vw] mx-auto lg:w-[50vw] xl:w-[40vw] border-x-white border-b-white border'>
            <div className='w-auto h-full flex gap-4 items-center'>
                <Stack direction="row" spacing={2}>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="User One" src={userOne?.profileImage || '/static/images/avatar/1.jpg'} />
                    </StyledBadge>
                </Stack>
                <div className='w-auto h-auto text-white md:text-lg md:font-semibold'>{userOne?.username}</div>
            </div>
            <div className='w-auto h-full flex items-center gap-2 md:gap-3'>
                <span className='bg-gray-700 p-2 rounded-full md:hover:bg-gray-600 cursor-pointer active:bg-gray-600'><IoIosCall className='text-white lg:size-7' size={20}/></span>
                <span className='bg-gray-700 p-2 rounded-full md:hover:bg-gray-600 cursor-pointer active:bg-gray-600'><FaVideo className='text-white lg:size-7' size={20}/></span>
                <span className='bg-gray-700 p-2 rounded-full md:hover:bg-gray-600 cursor-pointer active:bg-gray-600'><BsThreeDotsVertical className='text-white lg:size-7' size={20}/></span>
            </div>
        </header>
    );
}

export default Header;
