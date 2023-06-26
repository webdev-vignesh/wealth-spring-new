import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedBasket: '',
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setSelectedBasket: (state, action) => {
      state.selectedBasket = action.payload;
    },
  },
});

export const { setSelectedBasket } = basketSlice.actions;

export default basketSlice.reducer;
