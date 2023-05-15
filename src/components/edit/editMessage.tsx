import React, { useState, useEffect } from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Header from './header';
import Body from './body';
import Footer from './footer';
import Buttons from './buttons';

function EditMessage() {
    return(
        <>
        <Paper variant="outlined" sx={{ 
            //minHeight: '1273px', 
            width: '360px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            background: '#FFFFFF',
            boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.08)',
            padding: '0px'
        }}>
            <Box sx={{ 
                width: '360px',
                height: '40px',
                display: 'flex',
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginBottom: '14px',
                padding: '2px'
            }}>
            <Typography fontSize={'24px'} fontWeight={400} sx={{  }}>
                Edit Message
            </Typography>
            <IconButton sx={{
                width: '40px',
                height: '40px',
                background: '#F5F5F5',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '100px',
            }}>
                <CloseIcon/>
            </IconButton>
            </Box>
            <Typography fontSize={'16px'} fontWeight={500} sx={{ marginBottom: '16px' }}>
                Content
            </Typography>
            <Header/>
            <Body/>
            <Footer/>
            <Buttons/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '12px',
                width: '360px',
                height: '84px',
            }}>
                <Button variant='contained' sx={{
                    width: '360px',
                    height: '36px',
                }}>
                    SAVE
                </Button>
                <Button variant='outlined' sx={{
                    width: '360px',
                    height: '36px',
                }}>
                    DELETE
                </Button>
            </Box>
        </Paper>
        </>
    );
}

export default EditMessage;