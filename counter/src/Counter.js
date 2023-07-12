import { useState } from "react"
export default function Counter() {
    const [val, setVal] = useState(0)
    return (
        <div>
            <button onClick={() => { setVal(val - 1) }}>-</button>
            <span>{val}</span>
            <button onClick={() => { setVal(val + 1) }}>+</button>
            <br></br>
            <button onClick={() => {
                setVal(0)
            }}>RESET</button>
        </div>
    )
}
