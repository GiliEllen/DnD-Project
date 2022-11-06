import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = async (e: any) => {
    try {
        e.preventDefault();
        console.log(username, email, password, rePassword);
        const {data} = await axios.post("/api/users/register", {username, email, password, rePassword});
        console.log(data)
    } catch (error) {
        console.log(error)
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          placeholder="Enter your Username:"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Enter your email:"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password:"
        />
        <input
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          type="password"
          name="rePassword"
          id="rePassword"
          placeholder="Repeat Password:"
        />
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default Register;
