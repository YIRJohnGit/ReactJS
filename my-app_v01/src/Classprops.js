//@ ./src/Classprops.js
import React, { Component } from 'react';

export class Classprops extends Component {
    // state = {  }
    render() {
        return (
            <div>
                <h1>Hello { this.props.name } from { this.props.place } Welcom to ReactJS Component </h1>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Classprops;