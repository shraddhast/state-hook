import React, {useState} from 'react'

function HookCounter3() {
    const [name, setName] = useState({firstName:'', lastName: ''})

    return (
       <form>
           <input 
           type ='text' 
           value= {name.firstName} 
           onChange={ (e) => setName({ ...name, firstName:e.target.value})} />

           <input 
           type ='text'
           value= {name.lastName} 
           onChange={ (e) => setName({ ...name, lastName:e.target.value})} />

           <h2> Your firstname is {name.firstName} and your lastname is {name.lastName}</h2>
           <h2>{JSON.stringify(name)}</h2>
           {/* setter funxtion provided by usestae hook doesnt auto merge and update 
           so manuually do it and tha pass it to setter func */}
       </form>
    )
}

export default HookCounter3
