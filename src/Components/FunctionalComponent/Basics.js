import React, { useState } from "react";

const LearningBasics = (props) => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        if(count < 10) {
            setCount(count + 1);
        }else{
            console.log("Cannot increment further!");
        }
    }
    const handleDecrement = () => {
        if(count > 0){
            setCount(count - 1);
        }else {
            console.log("Cannot decrement further!");
        }
    }
    return(
        <div>
            <div>Functional component</div>
            <button onClick={() => handleIncrement()}>Increment</button>
            <div>{count}</div>
            <button onClick={() => handleDecrement()}>Decrement</button>
            {props.greet}
        </div>
    )
}

export default LearningBasics;