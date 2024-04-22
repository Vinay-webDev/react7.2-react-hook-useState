import React, {useState} from 'react';

function Component() {
    const [name, setName] = useState("guest");
    const [age, setAge] = useState(0);
    const updateName = () => {
        setName("ninja");
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
    return(
        <div>
            <p> Name: {name} </p>
            <button onClick={updateName} > set name </button>

            <p> Age: {age} </p>
            <button onClick={incrementAge} > incriment age </button>
        
        </div>
    );
}
export default Component







