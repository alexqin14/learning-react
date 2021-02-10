import React from 'react';

export const Greeting = (props) => {
    console.log(props);
    return (
        <>
        <h2>
            Hello {props.name} !!! 
        </h2>
        {/* //JS EXPRESSION {} */}
        <h3>
            {props.name}'s favorite number is {props.favoriteNumber}
        </h3>
        <h3>
            {props.name}'s favorite number plus 10 is {props.favoriteNumber + 10}
        </h3>
        <h3>
            {props.name}'s favorite colors are:
           
        </h3>
        <ul>
        
            {props.favoriteColors 
            && [
                ... new Set(props.favoriteColors)
                ].map(x => (
                <li 
                    key={x}
                >
                    {x}
                </li>)
                )
                }

            {/* array literal, [] create new set elements, array literal, set is used for uniquess*/}
            {/* boolean evaluator (boolean shortcircus) &&, if first one is false, then don't call second one */}
            {!props.favoriteColors && <li>None</li>}
        </ul>
        </>
        
    );
};

// export default Greeting;