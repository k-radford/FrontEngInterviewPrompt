import React, { useState, useEffect } from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MessageIcon from '@mui/icons-material/Message';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectHeader, selectBody, selectFooter, selectButtons } from '../../features/message/messageSlice';

function MessageNode() {

    const dispatch = useAppDispatch();
    const header = useAppSelector(selectHeader);
    const body = useAppSelector(selectBody);
    const footer = useAppSelector(selectFooter);
    const buttons = useAppSelector(selectButtons);

    function headerPreview(header: {format: string, str: string}): JSX.Element {
        const titleStyle = {
            padding: '4px 12px',
            height: '28px',
            background: '#F5F5F5',
            borderRadius: '4px',
            marginBottom: '3px'
        } as const;
        return (
            <>
            <Typography color='#41C352' fontSize={'12px'} fontWeight={400} sx={titleStyle}>Header</Typography>
            { header.format == 'text' ?
            <Typography>{header.str}</Typography>
            : header.format == 'image' ?
            <img src={header.str} width={'220px'}/>
            : header.format == 'video' ?
            <Typography>{header.str}</Typography>
            : header.format == 'document' ? 
            <Typography>{header.str}</Typography>
            : null }
            </>
        );
    }

    function textPreview(title: string, text: string): JSX.Element {
        const titleStyle = {
            padding: '4px 12px',
            height: '28px',
            background: '#F5F5F5',
            borderRadius: '4px',
            marginBottom: '3px'
        } as const;
        return (
            <>
            <Typography color='#41C352' fontSize={'12px'} fontWeight={400} sx={titleStyle}>{title}</Typography>
            <Typography>{text}</Typography>
            </>
        );
    }

    function dashedLine(): JSX.Element {
        const lineStyle = {
            width: '218px',
            height: '0px',
            border: '1px dashed #25D366',
            marginBottom: '8px',
            marginTop: '8px'
        } as const;
        return (
            <Box sx={lineStyle}></Box>
        );
    }

    function buttonPreview(num: number): JSX.Element {
        const buttonStyle = {
            width: '232px',
            height: '30px',
            marginTop: '8px',
            backgroundColor: '#FFFFFF',
            padding: '5.34103px 0px'
        } as const;
        return (
            <Card variant='elevation' sx={buttonStyle}>
                <Typography align='center' color={'#007DFF'} fontSize={'14px'} fontWeight={400}>{buttons[num]}</Typography>
            </Card>
        );
    }

    return (
        <>
        <Paper variant="outlined" sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '12px',
            width: '304px', 
            //minHeight: '420px',
            border: '2px solid #007DFF',
            background: '#FFFFFF',
            borderShadow: '0px 2px 6px rgba(0, 0, 0, 0.18)',
            borderRadius: '8px',
        }}>
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: "center", 
            gap: '8px',
            marginBottom: '14px'
        }}>
            <Avatar sx={{ bgcolor: '#7986CB', height: '32px', width: '32px', padding: '10px', gap: '10px' }}>
                <MessageIcon sx={{ height: '16px', width: '16px' }}/>
            </Avatar>
            <Typography fontSize={16} fontWeight={500} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                Message Example
            </Typography>
        </Box>
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: "center", 
            justifyContent: 'center',
            width: '280px',
            backgroundColor: '#F5F5F5',
            borderRadius: '8px',
            padding: '20px'
        }}>
        <Card variant='elevation' sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            width: '232px',
            backgroundColor: '#FFFFFF',
            padding: '7.12px'
        }}>
        { header.format !== '' ? 
        <>
            {headerPreview(header)}
            {dashedLine()}
        </>
        : null }
        { body !== '' ? textPreview('Body message', body) : null }
        { footer !== '' ? 
        <>
            {dashedLine()}
            {textPreview('Footer', footer)}
        </>
        : null }
        </Card>
        { buttons[0] !== '' ? buttonPreview(0) : null }
        { buttons[1] !== '' ? buttonPreview(1) : null }
        { buttons[2] !== '' ? buttonPreview(2) : null }
        </Box>
        </Paper>
        </>
    );
}

export default MessageNode;