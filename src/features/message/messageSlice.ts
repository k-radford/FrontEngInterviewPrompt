import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface MessageState {
    header: { format: string, str: string },
    body: string,
    footer: string,
    button1: string,
    button2: string,
    button3: string
}

const initialState: MessageState = {
    header: { format: '', str: '' },
    body: 'We have an exciting offer {{1}}. Are you interested in hearing more?',
    footer: '',
    button1: '',
    button2: '',
    button3: ''
};

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        // reducer: (state, action: PayloadAction<type>) => {}
        writeHeader: (state, action: PayloadAction<{ format: string, str: string }>) => {
            state.header = {
                format: action.payload.format,
                str: action.payload.str
            };
        },
        writeBody: (state, action: PayloadAction<string>) => {
            state.body = action.payload;
        },
        writeFooter: (state, action: PayloadAction<string>) => {
            state.footer = action.payload;
        },
        addButton: (state, action: PayloadAction<{ index: number, str: string }>) => {
            switch(action.payload.index) {
                case 0:
                    state.button1 = action.payload.str;
                    break;
                case 1:
                    state.button2 = action.payload.str;
                    break;
                case 2:
                    state.button3 = action.payload.str;
                    break;
                default:
                    break;
            }
        },
        removeButton: (state, action: PayloadAction<number>) => {
            switch(action.payload) {
                case 0:
                    state.button1 = '';
                    break;
                case 1:
                    state.button2 = '';
                    break;
                case 2:
                    state.button3 = '';
                    break;
                default:
                    break;
            }
        },
        clearButtons: (state) => {
            state.button1 = '';
            state.button2 = '';
            state.button3 = '';
        }
    }
});

export const { 
    writeHeader,
    writeBody, 
    writeFooter,
    addButton,
    removeButton,
    clearButtons 
} = messageSlice.actions;

// selector
export const selectHeader = (state: RootState) => state.message.header;
export const selectBody = (state: RootState) => state.message.body;
export const selectFooter = (state: RootState) => state.message.footer;
export const selectButtons = (state: RootState) => [ state.message.button1, state.message.button2, state.message.button3 ];

export default messageSlice.reducer;


  