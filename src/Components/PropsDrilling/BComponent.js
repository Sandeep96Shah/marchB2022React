import React from "react";
import CComponent from "./CComponent";

class BComponent extends React.Component{
    render(){
        return(
            <div>
                BComponent
                <CComponent name={this.props.name} />
            </div>
        )
    }
}

export default BComponent;