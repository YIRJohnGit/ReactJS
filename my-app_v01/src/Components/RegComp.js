//@ /src/components/RegComp.js

import React, { Component } from 'react';

class RegComp extends Component {
    // state = {  } 
    render() { 
        console.log("I am Regular Component") ;
        return (
            <div>
                I'm Regular Components { this.props.name }
            </div>

        );
    }
}
 
export default RegComp;