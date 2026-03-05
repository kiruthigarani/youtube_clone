import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import searchReducer from "./searchSlice";
const toggleStore = configureStore({
    reducer: {
        toggle: toggleReducer,
        cacheStore: searchReducer
    }
});

export default toggleStore;


