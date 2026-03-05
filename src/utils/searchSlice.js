
import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({

    name : 'searchcache',
    initialState :{

    },
    reducers : {
        addCache : (state,action)=>{
            return {...state, ...action.payload};
        }
    }
});

export default searchSlice.reducer;
export const {addCache} = searchSlice.actions;