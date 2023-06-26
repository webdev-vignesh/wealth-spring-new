import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: '',
    password: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        }
    }
});

export const { setUser, setPassword } = userSlice.actions;

export default userSlice.reducer;