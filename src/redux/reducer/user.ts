import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  initialState: {
    darkType: false,
    username: '',
    phone: '',
    image: '',
    active: false,
    code: '',
    interest: [],
    updatedAt: '',
    createdAt: '',
    review: '',
    mybooks: [],
    balance: '',
  },
  name: 'userSlice',
  reducers: {
    setDark: (state, action) => {
      state.darkType = action.payload;
    },
    setUser: (state, action) => {
      state.active = action.payload.active;
      state.balance = action.payload.balance;
      state.code = action.payload.code;
      state.createdAt = action.payload.createdAt;
      state.image = action.payload.image;
      state.interest = action.payload.interest;
      state.mybooks = action.payload.mybooks;
      state.phone = action.payload.phone;
      state.review = action.payload.review;
      state.updatedAt = action.payload.updatedAt;
      state.username = action.payload.username;
    },
  },
});

export const {setDark, setUser} = userSlice.actions;

export default userSlice;
