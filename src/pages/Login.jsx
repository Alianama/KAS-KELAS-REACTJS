import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        username,
        password,
      });

      console.log("Login success:", response.data);
      onLogin(); // Call the onLogin function passed as a prop
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error
    }
  };

  return (
    <div className="w-full h-screen gap-10 flex justify-center items-center flex-col">
      <div className="flex text-2xl font-bold justify-center items-center flex-col">
        <h1>Wellcome Back</h1>
        <h1>KAS Kelas System</h1>
      </div>
      <div className="flex flex-col items-center gap-10 p-11 bg-0 rounded-setup shadow-2xl">
        <h1 className="font-bold">Login</h1>
        <div className="flex flex-col gap-3  items-center">
          <input
            placeholder="Username"
            className="flex mx-10 p-2 shadow-sm rounded-setup w-full"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col  items-center">
          <input
            placeholder="Password"
            className="flex mx-10 p-2 shadow-sm rounded-setup w-full"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-2 w-full p-2 rounded-setup text-white hover:bg-1 active:scale-105 transition-all"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
