import React, {useState} from 'react'

function HookCounter() {
   
   const [count, setCount]= useState(0)  //arry destructuring es6


    return (
        <div>
           <button onClick={ () => setCount(count + 1)}>Count {count}</button> 
        </div>
    )
}

export default HookCounter
