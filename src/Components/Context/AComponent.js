import React from "react";
import BComponentTesting from "./BComponent";

export const OurContext = React.createContext();

class AComponent extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            name: "Coding nInjas",
            student: {
                name: "XYZ",
                course: "Btech",
                branch: "civil",
            }
        }
    }
    render(){
        return(
            <OurContext.Provider value={this.state.student}>
                AComponent
                <BComponentTesting />
            </OurContext.Provider>
        )
    }
}

export default AComponent;