import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "./reducer";

const store = configureStore({
    reducer: {
        actualUser:loginSlice,
    },
});

export default store;