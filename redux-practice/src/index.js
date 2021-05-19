import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
//import reportWebVitals from './reportWebVitals';

let initState = {
  counter:0,
}
/*
{
  created a reducer function below that takes the initState and action as inputs.
  the actions have a 'type' and 'payload' which can have any details 
}
*/
function counterReducer(state= initState, action){

  if(action.type === "increment"){
    return{ counter: state.counter + action.payload };
  }
  else if(action.type === "decrement"){
    return{ counter: state.counter -1 }
  }
  else {
    return state; 
  }
}

//store where we pass the reducer function
const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    trace: true,
  })
  );

console.log(store.getState());
store.subscribe(() => console.log("store is changed", store.getState())
);

store.dispatch({
  type: "increment",
  payload: 5,
})
store.dispatch({
  type: "increment",
  payload: 10,
})

//console.log(store.getState());

store.dispatch({ type: "decrement" })

//console.log(store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
