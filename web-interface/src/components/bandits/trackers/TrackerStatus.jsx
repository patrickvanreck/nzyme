import React from 'react';

class TrackerStatus extends React.Component {

    render() {
        switch(this.props.status) {
            case "ONLINE":
                return <span className="badge badge-success">ONLINE</span>;
            case "DARK":
                return <span className="badge badge-danger">DARK</span>;
            default:
                return this.props.status;
        }
    }

}

export default TrackerStatus;