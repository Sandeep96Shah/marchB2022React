import React from "react";
import BComponent from "./BComponent";

class AComponent extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            name: "Coding nInjas",
        }
    }
    render(){
        return(
            <div>
                AComponent
                <BComponent name={this.state.name} />
            </div>
        )
    }
}

export default AComponent;