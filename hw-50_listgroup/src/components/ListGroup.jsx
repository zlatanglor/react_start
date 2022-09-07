import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class ListGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let id = 0;
        return  <ul className='list-group'>
                    {this.props.children.map(item => <li className='list-group-item' key={id++}>{item}</li>)}
                </ul>
    }
}

export default ListGroup;