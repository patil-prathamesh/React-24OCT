import { useState, useMemo } from "react"

export function Memo() {
    const [value, setValue] = useState(0)

    const targetSum = useMemo(() => {
        console.log("hii")
        let sum = 0
        for (let i = 0; i <= value; i++) {
            sum += i
        }
        return sum
    }, [value])

    return (
        <div>
            <input type="number"
                onChange={
                    (e) => {
                        setValue(Number(e.target.value))
                    }
                }
            />
            <h2>Sum: {targetSum}</h2>
        </div>
    )
}