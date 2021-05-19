import React from 'react'
import { connect } from 'react-redux';
import { decrement, increment } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        message: state.message,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: (message) => dispatch(increment(message)),
        decrementCounter: (message) => dispatch(decrement(message)),
    }
}

const Counter = (props) => {
    console.log(props);
    return (
    <div>
        Counter Value:  { props.counter } 
    <br />
    <button onClick={() => props.incrementCounter("incrmented!")}>+</button>
    <button onClick={() => props.decrementCounter("decremented!")}>-</button>
    <br/><br/>
    <h3>Message:{props.message} </h3>
    </div>
    ); 
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
