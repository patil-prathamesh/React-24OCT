import { useState, useEffect } from "react"

export function UseEffect() {
    const [count,setCount] = useState(0)
    const [trigger,setTrigger] = useState(0)

    console.log("hii")

    useEffect(()=>{
        setTimeout(() => {
            console.log('triggered')
        },500);
    },[trigger])

    return (
        <div>
            {console.log('hii')}
            <button onClick={() => setCount(count+1)}>click me {count}</button>
            <button onClick={() => setTrigger(trigger+1)}>Trigger button {trigger}</button>
        </div>
    )
}