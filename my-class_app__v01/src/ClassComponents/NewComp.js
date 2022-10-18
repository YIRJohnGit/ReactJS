//@ ./src/ClassComponents/NewComp.js

import React, { Component } from 'react';
import bellA from "../images/bell_a.PNG"
import bellB from "../images/bell_b.PNG"

export class NewComp extends Component {

constructor(props) {
  super(props)

  this.state = {
     message: "Please do Subscribe",
     sub: "Subscribe",
     imageURL: bellA
  };
};

styles = {
    fontStyle: "italic",
    color: "purple" 
};

imga = {
    width: "40px",
    height: "44px"
 }

ButtonChange = () => {
    this.setState({ 
        message: "Hit the Bell Icon to never miss an update",
        sub : "Subscribed"
     });
};

imageChange = () => {
    this.setState({ 
       imageURL : bellB,
       message: "Thank you! Happy Learning..."  
    });
};
render() {
    return (
      <div className='App'> 
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <p/>
        <img
            style={this.imga} 
            src={this.state.imageURL} 
            alt=""
            onClick={this.imageChange}
        />
      </div>
    );
  }
}

export default NewComp;
