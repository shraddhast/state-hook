import React, {useState} from 'react'

function Hookcounter4() {
    const [items,setItems]  = useState([]) //default value is empty arrayset
    
    const addItem =() =>  {
      setItems([...items, {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
    }])
 }
    
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>{
                   items.map (item => (
                    <li kei= {item.id}>{item.value}</li>
                   ))}
            </ul>
        </div>
    )
}

export default Hookcounter4
