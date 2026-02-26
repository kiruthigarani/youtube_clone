import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
const toggleStore = configureStore({
    reducer: {
        toggle: toggleReducer
    }
});

export default toggleStore;


