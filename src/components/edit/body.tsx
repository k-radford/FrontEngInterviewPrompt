import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import TextFieldsIcon from '@mui/icons-material/TextFields';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { writeBody, selectBody } from '../../features/message/messageSlice';

function Body() {
    const dispatch = useAppDispatch();
    const body = useAppSelector(selectBody);

    return(
        <>
        <Card sx={{
            padding: '16px 24px',
            gap: '24px',
            width: '360px',
            maxHeight: '525px',
            background: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.12)',
            borderRadius: '10px',
            marginBottom: '24px',
        }}>
            <CardHeader
                avatar={<TextFieldsIcon sx={{ width: '24px', height: '24px', color: 'rgba(0, 0, 0, 0.54)' }}/>}
                title={<><Typography fontSize={'16px'} fontWeight={500}>Body Message<IconButton><InfoIcon sx={{ width: '12px', height: '12px' }}/></IconButton></Typography></>}
                sx={{
                    alignItems: 'center',
                    padding: '0px',
                    width: '312px',
                    height: '28px',
                    marginBottom: '0px'
                }}
            />
            <FormControl
                sx={{
                    width: '312px',
                    height: '260px',
                    alignItems: 'flex-start',
                    padding: '12px',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    borderRadius: '10px',
                    marginTop: '16px',
                    marginBottom: '12px',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
                >
                <Input
                    id={"body"}
                    disableUnderline
                    multiline
                    fullWidth
                    rows={9}
                    value={body}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {dispatch(writeBody(event.target.value));}}
                />
                <Input
                    fullWidth
                    disabled
                    disableUnderline
                    endAdornment={<InputAdornment position='end'>{body.length}/1024</InputAdornment>}
                />
            </FormControl>
        </Card>
        </>
    );
}

export default Body;