import { createStore } from "redux";
import { reducer } from "./reducer";

//store where we pass the reducer function
export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__({
      trace: true,
    })
    );

    console.log(store.getState());
