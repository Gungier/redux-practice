import { createStore } from "redux";
import { counterReducer } from "./reducer";

//store where we pass the reducer function
export const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__({
      trace: true,
    })
    );
