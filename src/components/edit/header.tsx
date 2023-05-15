import React, { useState, useEffect, Fragment } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ImageIcon from '@mui/icons-material/Image';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { writeHeader, selectHeader } from '../../features/message/messageSlice';

function TextHeader(): JSX.Element {
    const dispatch = useAppDispatch();
    const header = useAppSelector(selectHeader);

    return (
        <FormControl
            sx={{
                width: '312px',
                height: '100px',
                alignItems: 'flex-start',
                padding: '12px',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                borderRadius: '10px',
                marginTop: '12px',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}
        >
            <Input
                id={"footer"}
                disableUnderline
                multiline
                fullWidth
                rows={2}
                value={header.str}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {dispatch(writeHeader({ format: 'text', str: event.target.value}));}}
            />
            <Input
                fullWidth
                disabled
                disableUnderline
                endAdornment={<InputAdornment position='end'>{header.str.length}/60</InputAdornment>}
            />
        </FormControl>
    );
}

function ImageHeader(): JSX.Element {
    const dispatch = useAppDispatch();
    const header = useAppSelector(selectHeader);

    return (
        <Box sx={{ marginTop: '12px' }}>
            <input
                accept='image/*'
                type='file'
                id='select-image'
                style={{ display: "none" }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files !== null) {
                        dispatch(writeHeader({ format: 'image', str: URL.createObjectURL(e.target.files[0])}));
                    }
                }}
            />
            <label htmlFor='select-image'>
            <Button variant='outlined' component="span">
                UPLOAD IMAGE
            </Button>
            </label>
        </Box>
    );
}

function VideoHeader(): JSX.Element {
    const dispatch = useAppDispatch();
    const header = useAppSelector(selectHeader);

    return (
        <Box sx={{ marginTop: '12px' }}>
            <input
                accept='image/*'
                type='file'
                id='select-image'
                style={{ display: "none" }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files !== null) {
                        dispatch(writeHeader({ format: 'video', str: URL.createObjectURL(e.target.files[0])}));
                    }
                }}
            />
            <label htmlFor='select-image'>
            <Button variant='outlined' component="span">
                UPLOAD VIDEO
            </Button>
            </label>
        </Box>
    );
}

function DocumentHeader(): JSX.Element {
    const dispatch = useAppDispatch();
    const header = useAppSelector(selectHeader);

    return (
        <Box sx={{ marginTop: '12px' }}>
            <input
                accept='.doc,.docx,.pdf'
                type='file'
                id='select-image'
                style={{ display: "none" }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files !== null) {
                        dispatch(writeHeader({ format: 'document', str: URL.createObjectURL(e.target.files[0])}));
                    }
                }}
            />
            <label htmlFor='select-image'>
            <Button variant='outlined' component="span">
                UPLOAD DOCUMENT
            </Button>
            </label>
        </Box>
    );
}

function Header() {
    const dispatch = useAppDispatch();
    const header = useAppSelector(selectHeader);
    const [include, setIncluded] = useState(false);
    const [format, setFormat] = useState('');

    const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.checked) {
            dispatch(writeHeader({ format: '', str: '' }));
            setFormat('');
        }
        setIncluded(event.target.checked);
    }

    const handleChange = (event: SelectChangeEvent) => {
        setFormat(event.target.value as string);
    };

    return(
        <>
        <Card sx={{
            padding: '16px 24px',
            gap: '24px',
            width: '360px',
            minHeight: '60px',
            background: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.12)',
            borderRadius: '10px',
            marginBottom: '24px'
        }}>
            <CardHeader
                avatar={<ImageIcon sx={{ width: '24px', height: '24px', color: 'rgba(0, 0, 0, 0.54)' }}/>}
                title={<><Typography fontSize={'16px'} fontWeight={500}>Header<IconButton><InfoIcon sx={{ width: '12px', height: '12px' }}/></IconButton></Typography></>}
                action={<Switch checked={include} onChange={handleToggle} color='default' sx={{  }}/>}
                sx={{
                    alignItems: 'center',
                    padding: '0px',
                    gap: '12px',
                    width: '312px',
                    height: '28px',
                }}
            />
            <Collapse in={include}>
                <FormControl fullWidth sx={{ width: '264px', height: '45px', marginTop: '8px', marginBottom: '10px' }}>
                    <InputLabel id="label">Format</InputLabel>
                    <Select
                        id="format"
                        value={format}
                        label="Format"
                        onChange={handleChange}
                    >
                        <MenuItem value={'text'}>Text</MenuItem>
                        <MenuItem value={'image'}>Image</MenuItem>
                        <MenuItem value={'video'}>Video</MenuItem>
                        <MenuItem value={'document'}>Document</MenuItem>
                    </Select>
                </FormControl>
                { 
                format == 'text' ? 
                    <TextHeader/>
                : format == 'image' ?
                    <ImageHeader/>
                : format == 'video' ?
                    <VideoHeader/>
                : format == 'document' ?
                    <DocumentHeader/>
                : null }
            </Collapse>    
        </Card>
        </>
    );

}

export default Header;