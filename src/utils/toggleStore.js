import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import searchReducer from "./searchSlice";
import btnReducer from "./btnSlice";
import chatSlice from "./chatSlice";
const toggleStore = configureStore({
    reducer: {
        toggle: toggleReducer,
        cacheStore: searchReducer,
        btnStore: btnReducer,
        chatStore: chatSlice

    }
});

export default toggleStore;


