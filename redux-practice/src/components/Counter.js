import React from 'react'
import { connect } from 'react-redux';
import { decrement, increment, login, logout } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.counter,
        message: state.counterReducer.message,
        login: state.loginReducer.isLoggedIn,
        loginMessage: state.loginReducer.message,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: (message) => dispatch(increment(message)),
        decrementCounter: (message) => dispatch(decrement(message)),
        loginFx: () => dispatch(login()),
        logoutFx: () => dispatch(logout()),

    }
}

const Counter = (props) => {
    return (
    <div>
    { props.login ?

        (
            <button onClick={() => props.logoutFx()} >Logout</button>
        ) : ( 
            <button onClick={() => props.loginFx()}>Login</button>
        )}

        <h1>{props.loginMessage}</h1>
        <br/> 
        <br/>
            {
                props.login ?
                    
                    <div>
                        Counter Value:  { props.counter } 
    <br />
    <button onClick={() => props.incrementCounter("incremented!")}>+</button>
    <button onClick={() => props.decrementCounter("decremented!")}>-</button>
    <br/><br/>
    <h3>Message:{props.message} </h3>
                    </div>
                    : <h2>Please Login To Use The Counter</h2>
        }
    </div>
    ); 
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
/*
    login State: { props.loginMessage}
        Counter Value:  { props.counter } 
    <br />
    <button onClick={() => props.incrementCounter("incremented!")}>+</button>
    <button onClick={() => props.decrementCounter("decremented!")}>-</button>
    <br/><br/>
    <h3>Message:{props.message} </h3>
    */