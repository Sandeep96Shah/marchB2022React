import React from "react";
import DComponent from "./DComponent";

class CComponent extends React.Component{
    render(){
        return(
            <div>
                CComponent
                <DComponent name={this.props.name} />
            </div>
        )
    }
}

export default CComponent;