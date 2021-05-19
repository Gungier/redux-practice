  /*
  {
    created a reducer function below that takes the initState and action as inputs.
    the actions have a 'type' and 'payload' which can have any details 
  }
  */

  import {
      createReducer
  } from "@reduxjs/toolkit";
  import {
      decrement,
      increment,
      login,
      logout
  } from "./actions";

  let initialState = {
      counter: 0,
      message: "",
  }

  const user = {
      isLoggedIn: false,
      message: "User is not Logged In"
  };


  //these functions take two inputs; state & function, then returns the updated state.  Furthermore, don't have to write code for the default case.
  export const counterReducer = createReducer(initialState, {
      [increment]: (state, action) => {
          return {
              counter: state.counter + 1,
              message: action.payload
          };
      },
      [decrement]: (state, action) => {
          return {
              counter: state.counter - 1,
              message: action.payload
          };
      },
  })

  //the below switch statements get even more simplified with the "createReducer" function and don't need to include the default now as it's included with the function as well.


  /*export function counterReducer(state = initialState, action) {
      switch (action.type) {
          case "increment":
              return {
                  counter: state.counter + 1, message: action.payload
              };
          case "decrement":
              return {
                  counter: state.counter - 1, message: action.payload
              }
          default:
              return state;
      }
  };
  */

  //all the below if / else if / else statements were simplified into switch statements above 

  /*if (action.type === "increment") {
      return {
          counter: state.counter + 1,
          message: action.payload
      };
  } else if (action.type === "decrement") {
      return {
          counter: state.counter - 1,
          message: action.payload
      }
  } else {
      return state;
  };
*/

  export const loginReducer = createReducer(user, {
      [login]: (state, action) => {
          return {
              isLoggedIn: true,
              message: "User is Logged In"
          };
      },
      [logout]: (state, action) => {
          return {
              isLoggedIn: false,
              message: "User is not Logged In"
          };
      },

  })


  /* export function loginReducer(state = user, action) {

      switch (action.type) {
          case "login":
              return {
                  isLoggedIn: true,
                      message: "User is Logged In"
              }
              case "logout":
                  return {
                      isLoggedIn: false,
                          message: "User is not Logged In"
                  }
                  default:
                      return state;
      }
*/

  //   if (action.type === "login") {
  //       return {
  //           isLoggedIn: true,
  //           message: "User is Logged In"
  //       }
  //   } else if (action.type === "logout") {
  //       return {
  //           isLoggedIn: false,
  //           message: "User is not Logged In"
  //       }
  //   } else {
  //       return state;
  //   }


  //   export const reducer = combineReducers({
  //       counterReducer,
  //       loginReducer
  //   })