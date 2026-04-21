
import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name : 'searchcache',
    initialState :{
       // searchQuery: '',
    },
    reducers : {
        addCache : (state,action)=>{
            return {...state, ...action.payload};
        },
        searchQueryParam:(state, action)=>{
            state.searchText = action.payload;
        }
    }
});

export default searchSlice.reducer;
export const {addCache,searchQueryParam} = searchSlice.actions;