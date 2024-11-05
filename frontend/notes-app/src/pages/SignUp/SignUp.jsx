import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Name is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email, Please Enter a valid Email");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }
    setError(null);
    // Sign Up API call later
  };
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center mt-28">
        <div className="w-96 border rounded bg-white px-8 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-3xl mb-8">Sign Up</h4>
            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button type="submit" className="btn-primary">
              Create Account
            </button>
            <p className="text-center text-sm mt-4">
              Already have an account? {""}
              <Link to="/login" className="font-medium text-primary underline">
                Login{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
