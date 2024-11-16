
import React, { useState, useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function UseRef() {
    // const [, forceRender] = useState(0);
    // const count = useRef(0)

    // const handleReRender = () => {
    //     // Update state to force re-render
    //     forceRender(Math.random());
    // };
    // count.current += 1
    // console.log("again")
    // return (
    //     <div>
    //         <Child>
    //             <h1>hello</h1>
    //         </Child>
    //         <p>This component has rendered {count.current} times.</p>
    //         <button onClick={handleReRender}>Force Re-render</button>
    //     </div>
    // );
    console.log('hh')
    return (
        <Child>
          <h1>This is a Header inside App</h1>
        </Child>
      );
};

function Child({children}) {
    return (
        <div>
            <h2>hhhh</h2>
            {children}
            <button>h</button>
        </div>
    )
}




// import { useEffect, useRef } from "react";

// // Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

// export function UseRef() {
//     const focus = useRef(null)

//     useEffect(() => {
//         console.log(focus)
//         focus.current.focus()
//     }, []);

//     const handleButtonClick = () => {
//         focus.current.focus()
//     };

//     return (
//         <div>
//             <input type="text" ref={focus} placeholder="Enter text here" />
//             <button onClick={() => {
//                 handleButtonClick()
//             }}>Focus Input</button>
//         </div>
//     );
// };