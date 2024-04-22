import React, {useState} from 'react';

function Component() {
    const [name, setName] = useState("guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setisEmployed] = useState(false);
    
    const updateName = () => {
        setName("ninja");
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
    const toggleIsEmployed = () => {
        /* inorder to toggle between true and false
         we use ! (not operator) */
        setisEmployed(!isEmployed);
    }
    return(
        <div>
            <p> Name: {name} </p>
            <button onClick={updateName} > set name </button>

            <p> Age: {age} </p>
            <button onClick={incrementAge} > increment age </button>

            <p> is Employed: {isEmployed? "yes":"no"} </p>
            <button onClick={toggleIsEmployed} > set Employed status </button>
        
        </div>
    );
}
export default Component







