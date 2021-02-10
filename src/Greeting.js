import React from 'react';

export const Greeting = (props) => {
    console.log(props);
    return (
        <h2>
            Hello {props.name} !!! 
        </h2>
        //JS EXPRESSION {}
    );
};

// export default Greeting;