import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) navigate("/dashboard");
  };

  return (
    <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f3f4f6"
    }}>
    <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        width: "350px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Employee Portal
        </h2>

        <form onSubmit={handleSubmit}>
            <input placeholder="Email" value={email}
            onChange={e => setEmail(e.target.value)} />

            <input type="password" placeholder="Password" value={password}
            onChange={e => setPassword(e.target.value)} />

            <button style={{ width: "100%", marginTop: "10px" }}>
            Login
            </button>
        </form>
        </div>
    </div>
   );
}
