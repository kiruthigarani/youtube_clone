import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import searchReducer from "./searchSlice";
import btnReducer from "./btnSlice";
const toggleStore = configureStore({
    reducer: {
        toggle: toggleReducer,
        cacheStore: searchReducer,
        btnStore: btnReducer
    }
});

export default toggleStore;


