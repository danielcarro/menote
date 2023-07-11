import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'user',
    initialState: {
        name: 'Daniel',
        email: 'danielcarrobr@gmail.com'
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        }
    }
});

export const {setName, setEmail} = slice.actions;
export default slice.reducer;