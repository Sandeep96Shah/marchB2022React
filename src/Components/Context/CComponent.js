import React from "react";
import DComponent from "./DComponent";

class CComponent extends React.Component{
    render(){
        return(
            <div>
                <div>CComponent</div>
                <DComponent />
            </div>
        )
    }
}

export default CComponent;