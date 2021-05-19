  /*
  {
    created a reducer function below that takes the initState and action as inputs.
    the actions have a 'type' and 'payload' which can have any details 
  }
  */

let initialState = {
    counter:0,
    message: "",
  }

  export function counterReducer(state = initialState, action){
  
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