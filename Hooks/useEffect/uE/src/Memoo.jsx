import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

// export function Memoo() {
//     const [input, setInput] = useState(0);
//     // Your solution starts here
//     const expensiveValue = useMemo(function () {
//         let factorial = 1;
//         for(let i = 1; i <= input; i++) {
//             factorial *= i;
//         }
//         return factorial
//     },[input]); 
//     // Your solution ends here

//     return (
//         <div>
//             <input 
//                 type="number" 
//                 onChange={(e) => setInput(Number(e.target.value))} 
//             />
//             <p>Calculated Value: {expensiveValue}</p>
//         </div>
//     );
// }


// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

// const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
// const TOTAL_LINES = 50;
// const ALL_WORDS = [];
// for (let i = 0; i < TOTAL_LINES; i++) {
//     let sentence = "";
//     for (let j = 0; j < 5; j++) {
//         sentence += (words[Math.floor(words.length * Math.random())])
//         sentence += " "
//     }
//     ALL_WORDS.push(sentence);
// }

// export function Memoo() {
//     const [sentences, setSentences] = useState(ALL_WORDS);
//     const [filter, setFilter] = useState("");

//     console.log(sentences)


//     const filteredSentences = useMemo(() => sentences.filter(x => x.includes(filter)),[sentences,filter])

//     return <div>
//         <input type="text" onChange={(e) => {
//             setFilter(e.target.value)
//         }}></input>
//         {filteredSentences.map((word, index) => <div>
//             {word}{index}
//         </div>)}
//     </div>
// }

export const Memoo = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Chips', value: 20 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'a', value: 30 },
        { name: 'b', value: 30 },
        { name: 'c', value: 30 },
        { name: 'c', value: 30 },
        { name: 'c', value: 30 },
        // Add more items as needed
    ]);
    console.log(typeof items[0].value)
    // Your code starts here
    const totalValue = useMemo(() => {
        let sum = 0
        for(let i = 0; i < items.length; i++) {
            sum += items[i].value
        }
        return sum
    },[items])
    // Your code ends here
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};