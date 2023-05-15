import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';

import messageReducer from '../features/message/messageSlice';

const rootReducer = combineReducers({
  message: messageReducer
})

// export const store = configureStore({
//   reducer: {
//     message: messageReducer,
//   },
// });

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
