import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) {
      setError("Invalid or expired reset link.");
    }
  }, [token]);

  const handleReset = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage("Password reset successfully!");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(data.message || "Reset failed.");
      }
    } catch (err) {
      setError("Server error, try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        {message && <p className="text-green-900">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleReset}>
          <label className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="block text-sm font-medium text-gray-700 mt-2">Confirm Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded mt-1"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="mt-4 w-full bg-green-900 text-white py-2 rounded">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
