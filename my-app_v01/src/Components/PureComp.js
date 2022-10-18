//@ /src/Components/PureComp.js

import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
    // state = {  }
    render() {
        console.log("I am Pure Component") ;
        return (
            <div>
                I'm the pure component { this.props.name }
            </div>
        );
    }
}

export default PureComp ;