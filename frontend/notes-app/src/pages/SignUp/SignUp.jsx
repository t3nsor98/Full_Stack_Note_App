import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    // Make handleSignUp async
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

    try {
      const response = await axiosInstance.post("/create-account", {
        // Await the API call
        fullName: name,
        email: email,
        password: password,
      });

      // console.log("Full API response:", response); // Log the full response

      if (response.data && response.data.error) {
        setError(response.data.message);
        return;
      }

      if (response.data && response.data.accessToken) {
        console.log(response.data.accessToken);
        localStorage.setItem("token", response.data.accessToken);

        navigate("/dashboard");
      }
    } catch (error) {
      console.error("API Error:", error); // Log the error
      console.error("Error response:", error.response); // Log the full error response

      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
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
              Already have an account?{" "}
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
