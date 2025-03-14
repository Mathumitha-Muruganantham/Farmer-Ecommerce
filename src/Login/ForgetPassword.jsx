import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // Eye icon for password visibility toggle

function ForgetPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(newPassword)) {
      setError("Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    alert("Password updated successfully!");
    navigate("/Login"); // Redirect to login page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat px-6"
      style={{ backgroundImage: `url("https://i.pinimg.com/736x/e3/40/2b/e3402bc3a8ff044de0b17b3da0e50244.jpg")` }}
    >
      <div className="flex flex-col items-center justify-center gap-4 p-10 md:p-8 sm:p-6 bg-black bg-opacity-70 text-white rounded-lg w-[500px] max-w-full">
        <h1 className="text-white text-5xl mb-5 font-bold">Reset Password</h1>

        <label className="text-lg sm:text-base mb-2 lg:text-4xl">New Password</label>
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-3 text-black rounded-md mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <span className="absolute right-3 top-4 cursor-pointer text-gray-600" onClick={togglePasswordVisibility}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        <label className="text-lg sm:text-base mb-2 lg:text-4xl">Confirm Password</label>
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 text-black rounded-md mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <span className="absolute right-3 top-4 cursor-pointer text-gray-600" onClick={togglePasswordVisibility}>
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="bg-green-500 text-white text-lg sm:text-base px-6 py-3 rounded-md w-full hover:bg-green-700 transition duration-300"
          onClick={handleSubmit}
        >
          Update Password
        </button>

        <h1
          className="text-2xl text-white hover:text-green-900 font-bold transition duration-300 text-right cursor-pointer"
          onClick={() => navigate("/Choose")}
        >
          Back to Login
        </h1>
      </div>
    </div>
  );
}

export default ForgetPassword;

