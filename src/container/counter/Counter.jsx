import React, { Component, Fragment } from 'react';
import CounterComp from './CounterComp';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            order : 0
        }
    }
    handleCounterChange = (value) => {
        this.setState({
            order : value
        })
    }
    render(){
        return(
            <Fragment>
                <p>Jumlah {this.state.order}</p>
                <hr />
                <CounterComp handleChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        )
    }
}
export default Counter;