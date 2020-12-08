import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    getUsersStart: (state) => {
      state.isLoading = true;
    },
    getUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    getUsersFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.data = [];
    },
  },
});

export const {
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
} = usersSlice.actions;
