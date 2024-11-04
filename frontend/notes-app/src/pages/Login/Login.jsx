import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
  }
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center mt-28">
        <div className="w-96 border rounded bg-white px-8 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-3xl mb-8">Login</h4>
            <input
              type="email"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-center text-sm mt-4">
              Don't have an account? {""}
              <Link to="/signup" className="font-medium text-primary underline">
                Create a account:{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
