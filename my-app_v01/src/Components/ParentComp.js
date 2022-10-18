//@ /src/components/ParentComp.js

import React, { Component } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';

class ParentComp extends Component {
    // state = {  }
    constructor(props){
        super(props)

        this.state ={
            name: "Simpl i learn" 
        };
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({ 
                name:  "Simpl-i-Learn"
            });
        }, 3000);
    }

    render() { 
        console.log("I am Parent Component") ;
        return ( 
            <div>
                I'm the Parent
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div> 
        );
    }
}
 
export default ParentComp;