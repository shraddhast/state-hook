import React, {useState, useEffect } from 'react'

function HookCounter1() {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        document.title = "You clicked ${count} times" // do same using tick
    })
    return (
        <div>
            <button onClick = {() =>  setCount(count + 1)}> Clickhc1 {count} times </button>
        </div>
    )
}

export default HookCounter1
