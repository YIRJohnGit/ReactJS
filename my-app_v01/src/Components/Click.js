//@ /SRC/COMPONENTS/CLICK.JS
import React, { Component } from 'react';
import UpdatedComp from './HigherOrder';

export class Click extends Component {
    // state = {  }

    //Declare the props Variable
    constructor(props){
        super(props);

        this.state = {
            count: 0
        };
    }

    //Declaring the Function
    UpdateClick = () => {
        this.setState({ count: this.state.count + 1 }) ;
    };

    render() {
        const { count } = this.state ;
        return (
            <div>
                <button onClick={this.UpdateClick}>
                    {this.props.name} Clicked { count } Time
                </button>
            </div>
        );
    }
}

export default UpdatedComp(Click);