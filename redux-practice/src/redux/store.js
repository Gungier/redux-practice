import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
import { counterReducer, loginReducer } from "./reducer";

export const store = configureStore({
    reducer: {
        counterReducer: counterReducer,
        loginReducer: loginReducer,
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
