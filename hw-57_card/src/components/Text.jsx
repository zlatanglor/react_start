import React, { Component } from "react";

class Text extends Component {

    render() {
        return <p className="card-text">{this.props.children}</p>
    };
}

export default Text;