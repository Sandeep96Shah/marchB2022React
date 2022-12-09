import React from "react";

class DComponent extends React.Component{
    render(){
        return(
            <div>
                DComponent
                {this.props.name}
            </div>
        )
    }
}

export default DComponent;