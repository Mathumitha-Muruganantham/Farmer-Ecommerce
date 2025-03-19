import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setError("Enter a valid email");
      return;
    }

    setError("");
    setMessage("If this email is registered, a reset link will be sent.");

    // Call backend API to send reset link
    try {
      const response = await fetch("http://localhost:5000/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage("Reset link sent! Check your email.");
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Server error, please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url("https://i.pinimg.com/736x/e3/40/2b/e3402bc3a8ff044de0b17b3da0e50244.jpg")` }}
  >
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="mt-4 w-full bg-green-900 text-white py-2 rounded">
            Send Reset Link
          </button>
        </form>
        <p className="mt-3 text-sm text-green-900 cursor-pointer" onClick={() => navigate("/login")}>
          Back to Login
        </p>
      </div>
    </div>
    </div>
  );
}

export default ForgetPassword;
