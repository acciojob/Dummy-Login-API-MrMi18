import React, {  useState } from 'react'
const userData = [
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }
]
const App = () => {
    const [email,setEmail] = useState("");
    const [ password , setPassword] = useState("")
    const[errorMessage,setErrorMessage] = useState("");
    const [id,setId] = useState("")
    const onsubmit = () =>{
        const data = userData.filter(dt => dt.email === email);
        if(!data){
            setErrorMessage("User not found")
            setId("user-error")
            setTimeout(() =>{
                console.log(errorMessage);
                
            },3000)
            return;
        }
        const pass = userData.filter(dt => dt.email === email && dt.password === password);
        setId("password-error");
        if(!pass){
            setErrorMessage("Password Incorrect")
            setTimeout(() =>{
                console.log(errorMessage);
                
            },3000)
            return;
        }
        setTimeout(()=>{
            console.log(data);
            setEmail("");
            setPassword("");
        },3000)

    }
  return (
    <div>
        <form>
            <input id='input-email' type='text' value={email} onChange={(e) => setEmail (e.target.value)}/>
            
            <input id='nput-password' type='password' value={password} onChange={(e) => setPassword (e.target.value)}/>
            {errorMessage &&  <p id={id} >{errorMessage}</p>}
            <button onClick={onsubmit} type='submit' id='submit-form-btn' >Submit</button>
        </form>

    </div>
  )
}

export default App