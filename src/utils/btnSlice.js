import { createSlice } from "@reduxjs/toolkit";

const btnSlice = createSlice({

    name: 'btn',
    initialState:{

    },
    reducers:{
        setBtnName: (state, action) => {
            state.btnName = action.payload;
        }
    }
});

export default btnSlice.reducer;
export const {setBtnName} = btnSlice.actions;

