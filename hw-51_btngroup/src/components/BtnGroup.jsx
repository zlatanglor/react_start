import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from "classnames";

class BtnGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clickedId: -1
        }
    }

    render() {
        const { buttons } = this.props;
        const { clickedId } = this.state;

        return  <div className="btn-group" role="group" aria-label="Basic example">
                    {buttons.map((btnLabel, i) => {
                        return <button
                                    onClick={() => this.setState({clickedId:i})}
                                    key={i}
                                    type="button"
                                    className={classNames('btn btn-primary', {'active': i === clickedId})}
                                > {btnLabel}
                                </button>
                    })}
                </div>;
    }
}

export default BtnGroup;