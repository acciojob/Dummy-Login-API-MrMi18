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
    const onSubmit = (e) =>{
        e.preventDefault()
        const data = userData.filter(dt => dt.email === email);
        if(data.length==0){
            setErrorMessage("User not found")
            setId("user-error")
            setTimeout(() =>{
                console.log(errorMessage);
                
            },3000)
            return;
        }
        const pass = userData.filter(dt => dt.email === email && dt.password === password);
        setId("password-error");
        if(pass.length===0){
            setErrorMessage("Password Incorrect")
            setTimeout(() =>{
                console.log(errorMessage);
                
            },3000)
            return;
        }
        setTimeout(()=>{
            console.log(data[0]);
            setEmail("");
            setPassword("");
            setErrorMessage("")
            setId("")
        },3000)

    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor='email'>Email</label>
            <input id='input-email' type='text' value={email} onChange={(e) => setEmail (e.target.value)}/>
           
            <br/>
            <br/>
            <label htmlFor='password'>Password</label>
            <input id='input-password' type='password' value={password} onChange={(e) => setPassword (e.target.value)}/>
            <br/>
            {errorMessage &&  <p id={id} >{errorMessage}</p>}
            <button type='submit' id='submit-form-btn' >Submit</button>
        </form>

    </div>
  )
}

export default App