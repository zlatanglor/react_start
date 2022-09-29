import React, { Component } from "react";

class Body extends Component {

    render() {
        return  <div className="card-body">{this.props.children}</div>
    };
}

export default Body;