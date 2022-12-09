import React from "react";

import { OurContext } from './AComponent';

class DComponent extends React.Component{
    render(){
        return(
            <OurContext.Consumer>
                {value => (
                   <>
                   <h1>{value.name}</h1>
                   <h2>{value.course}</h2>
                   <h3>{value.branch}</h3>
                   </>
                )}
            </OurContext.Consumer>
        )
    }
}

export default DComponent;