//@ ./src/Functionprops.js
import React from 'react';

function FunctionProp(props){
    return (
        <div>
            <h3>This is functional component</h3>
            <h3>Hello { props.name } from { props.place } wel come to React JS Components</h3>
        </div>
    );
}

export default FunctionProp;