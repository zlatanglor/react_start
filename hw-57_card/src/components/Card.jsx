import React, { Component } from "react";
import Body from "./Body";
import Text from "./Text";
import Title from "./Title";

class Card extends Component {
    static Body = Body;
    static Text = Text;
    static Title = Title;

    render() {
        return <div className="card"> {this.props.children} </div>
    };
}

export default Card;