import React from 'react';

class GrandChildComponent extends React.Component{
    render() {
        return (
            <div>
                <h1>{this.props.name1}</h1>
                <h2>{this.props.name2}</h2>
                <h3>{this.props.namastehChild}</h3>
            </div>
        )
    }
}

export default GrandChildComponent;