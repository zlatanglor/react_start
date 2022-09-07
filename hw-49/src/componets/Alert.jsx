import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Alert extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const alertType = `alert alert-${this.props.type}`;
        return <div className={alertType} role='alert'> {this.props.text} </div>
    }
}

export default Alert;