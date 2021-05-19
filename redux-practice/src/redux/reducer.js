  /*
  {
    created a reducer function below that takes the initState and action as inputs.
    the actions have a 'type' and 'payload' which can have any details 
  }
  */

import { combineReducers } from "redux";

let initialState = {
    counter:0,
    message: "",
  }

const user = {
    isLoggedIn: false,
    message:"User is not Logged In"
}

   function counterReducer(state = initialState, action){
  
    if (action.type === "increment"){
      return { counter: state.counter + 1, message:action.payload };
    }
    else if(action.type === "decrement"){
      return{ counter: state.counter -1,message:action.payload }
    }
    else {
      return state; 
    }
  }

  function loginReducer(state=user, action){

    if (action.type==="login"){
        return {
            isLoggedIn:true,
            message:"User is Logged In"
        }
    }else if(action.type==="logout"){
            return {
                isLoggedIn:false,
                message:"User is not Logged In"
            }
    }else {
        return state;
    }
  }

  export const reducer = combineReducers({
      counterReducer,
      loginReducer
  })