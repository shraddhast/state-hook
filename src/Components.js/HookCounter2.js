import React, {useState} from 'react'

function HookCounter2() {
    const initialCount = 0
    const [count,setCount]= useState(initialCount)
 //when we want to update  a state value based on a previous state value always use seperate function

 const incrementFive = () =>{
    for (let i = 0;i<5; i++){
       // setCount(count+1) will increment by 1
       setCount(prevcount => prevcount + 1)
    }
 }
 
    return (
        <div>
            
            Count: {count}
            <button onClick={() => setCount(initialCount)} > Rest</button>
         {/* <button onClick={() => setCount(count + 1)} >Increment</button>
            <button onClick={() => setCount(count - 1)} >Decrement</button>  easy but not effective instead */}   

            <button onClick={() => setCount(prevcount => prevcount + 1)} >Increment</button>
            <button onClick={() => setCount(prevcount => prevcount - 1)} >Decrement</button> 

            <button onClick={incrementFive}>Increment by 5</button>
        </div>
    )
}

export default HookCounter2
