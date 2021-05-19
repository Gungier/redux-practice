import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    counter: 0,
    message: "",
}

const user = {
    isLoggedIn: false,
    message: "User is not Logged In"
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state, action) => {
            return {
                counter: state.counter + 1,
                message: action.payload
            };
        },
        decrement: (state, action) => {
            return {
                counter: state.counter - 1,
                message: action.payload
            };
        },
    }
})

const loginSlice = createSlice({
    name: "login",
    initialState: user,
    reducers: {
        login: (state, action) => {
            return {
                isLoggedIn: true,
                message: "User is Logged In"
            };
        },
        logout: (state, action) => {
            return {
                isLoggedIn: false,
                message: "User is not Logged In"
            };
        },
    }
})

//export the actions from the slices below

export const { increment, decrement } = counterSlice.actions;
export const { login, logout } = loginSlice.actions;

//export the reducers 

export const countReducer = counterSlice.reducer;
export const logReducer = loginSlice.reducer;