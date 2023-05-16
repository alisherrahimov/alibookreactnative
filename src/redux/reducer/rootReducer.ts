import {combineReducers} from '@reduxjs/toolkit';

import userSlice from './user';
import {api} from '../../api/mainApi';

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  [api.reducerPath]: api.reducer,
});
