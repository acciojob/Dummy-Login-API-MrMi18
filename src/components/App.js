import React, { useState } from "react";
const userData = [
  {
    id: 1,
    name: "ABC",
    email: "abc@gmail.com",
    password: "12",
  },
  {
    id: 2,
    name: "DEF",
    email: "def@gmail.com",
    password: "1234",
  },
  {
    id: 3,
    name: "GHI",
    email: "ghi@gmail.com",
    password: "123456",
  },
];

function App() {
  const [passwordError, setPasswordError] = useState(null);
  const [userError, setUserError] = useState(null);
  const [inputData, setInputData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      for (let i = 0; i < userData.length; i++) {
        if (userData[i].email === inputData.email) {
          if (userData[i].password === inputData.password) {
            console.log(userData[i]);
          } else {
            setPasswordError(true);
          }
          return;
        }
      }
      setUserError(true);
    }, 3000);
  };

  return (
    <div>
      <form>
        <input
          type="email"
          value={inputData.email}
          onChange={(e) => {
            const { value } = e.target;
            setUserError("");
            setInputData((prev) => ({ ...prev, email: value }));
          }}
        />
        <input
          type="password"
          value={inputData.password}
          onChange={(e) => {
            const { value } = e.target;
            setPasswordError("");
            setInputData((prev) => ({ ...prev, password: value }));
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {passwordError && <p id="password-error">Password Incorrect</p>}
      {userError && <p id="user-error">User not found</p>}
    </div>
  );
}

export default App;
