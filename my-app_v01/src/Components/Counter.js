//@ /src/Components/Counter.JS
import React, { Component } from 'react';
import UpdatedComp from './HigherOrder';

export class Counter extends Component {
    // state = {  }

    //Declare the props Variable
    constructor(props){
        super(props);

        this.state = {
            count: 0
        };
    }

    //Declaring the Function
    IncrementCount = () => {
        this.setState({ count: this.state.count + 1 }) ;
    };

    render() {
        const { count } = this.state ;
        return (
            <div>
                <button onMouseOver={this.IncrementCount}>
                    {this.props.name} incremented to { count } Time
                </button>
            </div>
        );
    }
}

export default UpdatedComp(Counter);