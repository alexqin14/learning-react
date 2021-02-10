import React from 'react';

export const Greeting = ({
    name
    , favoriteNumber
    , favoriteColors
}) => {

    return (
        <>
        <h2>
            Hello {name} !!! 
        </h2>
        {/* //JS EXPRESSION {} */}
        <h3>
            {name}'s favorite number is {favoriteNumber}
        </h3>
        <h3>
            {name}'s favorite number plus 10 is {favoriteNumber + 10}
        </h3>
        <h3>
            {name}'s favorite colors are:
           
        </h3>
        <ul>
        
            {favoriteColors 
            && [
                ... new Set(favoriteColors)
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
            {!favoriteColors && <li>None</li>}
        </ul>
        </>
        
    );
};

// export default Greeting;