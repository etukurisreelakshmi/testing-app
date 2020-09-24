import React from 'react';

const Counter=(props)=>{
    return(
        <div>
            {props.inputLength>5?
                (<p>Text long enogh</p>):
                (<p>Text too short!</p>)
                }
        </div>
    )
};

export default Counter;
