import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Progress extends React.Component  {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {'width': `${this.props.percentage}%`};
        return  <div className='progress'>
                    <div className='progress-bar'
                         role='progressbar'
                         aria-valuenow={this.props.percentage}
                         aria-valuemin='0'
                         aria-valuemax='100'
                         aria-label='progressbar'
                         style={style}>
                    </div>
                </div>
    }
}

export default Progress;