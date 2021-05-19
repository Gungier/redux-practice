import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
import { countReducer, logReducer } from "./slices";

export const store = configureStore({
    reducer: {
        counterReducer: countReducer,
        loginReducer: logReducer,
    }
})

//store where we pass the reducer function
// export const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && 
//     window.__REDUX_DEVTOOLS_EXTENSION__({
//       trace: true,
//     })
//     );

    console.log(store.getState());
