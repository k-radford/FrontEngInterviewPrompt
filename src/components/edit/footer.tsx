import React, { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';
import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { writeFooter, selectFooter } from '../../features/message/messageSlice';

function Footer() {
    const dispatch = useAppDispatch();
    const footer = useAppSelector(selectFooter);
    const [include, setIncluded] = useState(false);

    const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.checked) {
            dispatch(writeFooter(''));
        }
        setIncluded(event.target.checked);
    }

    return(
        <>
        <Card sx={{
            padding: '16px 24px',
            width: '360px',
            minHeight: '60px',
            background: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.12)',
            borderRadius: '10px',
            marginBottom: '24px'
        }}>
            <CardHeader
                avatar={<TextFieldsIcon sx={{ width: '24px', height: '24px', color: 'rgba(0, 0, 0, 0.54)' }}/>}
                title={<><Typography fontSize={'16px'} fontWeight={500}>Footer text<IconButton><InfoIcon sx={{ width: '12px', height: '12px' }}/></IconButton></Typography></>}
                action={<Switch checked={include} onChange={handleToggle} color='default' sx={{  }}/>}
                sx={{
                    alignItems: 'center',
                    padding: '0px',
                    width: '312px',
                    height: '28px',
                }}
            />
            <Collapse in={include}>
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
                    value={footer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {dispatch(writeFooter(event.target.value));}}
                />
                <Input
                    fullWidth
                    disabled
                    disableUnderline
                    endAdornment={<InputAdornment position='end'>{footer.length}/60</InputAdornment>}
                />
                </FormControl>
            </Collapse>    
        </Card>
        </>
    );

}

export default Footer;