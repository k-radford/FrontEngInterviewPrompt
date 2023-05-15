import React, { useState, useEffect, Fragment } from 'react';
import Switch from '@mui/material/Switch';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InfoIcon from '@mui/icons-material/Info';
import Crop169Icon from '@mui/icons-material/Crop169';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { addButton, removeButton, clearButtons, selectButtons } from '../../features/message/messageSlice';

function Buttons() {
    const dispatch = useAppDispatch();
    const buttons = useAppSelector(selectButtons);
    const [include, setIncluded] = useState(false);

    const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.checked) {
            dispatch(removeButton(0));
            dispatch(removeButton(1));
            dispatch(removeButton(2));
        }
        setIncluded(event.target.checked);
        
    }

    function buttonInput(num: number): JSX.Element {
        return (
            <>
                <Box sx={{ height: '73px', marginTop: '16px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <Typography fontSize={'14px'} fontWeight={500}>
                            Button {num}
                        </Typography>
                        <IconButton sx={{ width: '20px', height: '20px' }}>
                            <DeleteOutlineIcon sx={{ height: '20px', color: 'rgba(0, 0, 0, 0.54)' }}/>
                        </IconButton>
                    </Box>
                    <FormControl size='small' sx={{ display: 'flex', flexDirection: 'row', height: '45px', border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '10px', padding: '12px' }}>
                        <Input
                            id={`button${num}`}
                            value={buttons[num-1]}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {dispatch(addButton({index: num-1, str: event.target.value}));}}
                            endAdornment={<InputAdornment position='end'>{buttons[num-1].length}/25</InputAdornment>}
                            disableUnderline
                            fullWidth
                        />
                    </FormControl>
                </Box>
            </>
        );
    }

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
                avatar={<Crop169Icon sx={{ width: '24px', height: '24px', color: 'rgba(0, 0, 0, 0.54)' }}/>}
                title={<><Typography fontSize={'16px'} fontWeight={500}>Buttons<IconButton><InfoIcon sx={{ width: '12px', height: '12px' }}/></IconButton></Typography></>}
                action={<Switch checked={include} onChange={handleToggle} color='default' sx={{  }}/>}
                sx={{
                    alignItems: 'center',
                    padding: '0px',
                    width: '312px',
                    height: '28px'
                }}
            />
            <Collapse in={include} sx={{  }}>
                {buttonInput(1)}
                {buttonInput(2)}
                {buttonInput(3)}
            </Collapse>    
        </Card>
        </>
    );
}

export default Buttons;