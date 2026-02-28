import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        isOpen: true
    },
    reducers: {
        toggle: (state) => {
            state.isOpen = !state.isOpen;
        },
        closeMenu: (state) =>{
            state.isOpen = false;
        }
    }
});

export default toggleSlice.reducer;
export const {toggle,closeMenu} = toggleSlice.actions;