import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    date: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "confirmPassword") {
      setPasswordMismatch(e.target.value !== formData.password);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMismatch(true);
      return;
    }
    setPasswordMismatch(false);
    navigate("/email-sent");
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 overflow-auto">
      <form
        onSubmit={handleSubmit}
        className="w-[500px] bg-white/20 backdrop-blur-md text-white border border-white/30 p-8 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center text-white">
          Namaste
        </h2>
        <div className="flex items-center gap-4 mt-1 mb-8">
          <div className="flex-grow h-px bg-white/30" />
          <span className="text-sm text-white whitespace-nowrap">
            Please enter your details
          </span>
          <div className="flex-grow h-px bg-white/30" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white-700 mb-1 required">
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            id="name"
            name="name"
            required
            pattern="^[A-Za-z]+( [A-Za-z]{2,}){1,}$"
            title="Name should have at least two words. First word: 1+ letters, others: 2-3 letters each. Only alphabets allowed."
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-white-50"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white-700 mb-1 required">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="Enter Username"
            pattern="^(?=.*[0-9!@#$%^&*])[\w!@#$%^&*]+$"
            title="Username must contain at least one number or special character"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-white-50"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white-700 mb-1 required">
            Email Id:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-white-50"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white-700 mb-1 required">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Enter Phone Number"
            pattern="^[6-9][0-9]{9}$"
            title="Enter a valid 10-digit Indian phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-white-50"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-white-700 mb-1 required">
            DOB:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            placeholder="Enter Date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-white-50"
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-white-700 mb-1 required">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            required
            placeholder="Enter Password"
            pattern="^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$"
            title="Password must contain at least one number and one special character and atleast six letters"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-white-50"
          />
          <span
            className="absolute right-3 top-9 cursor-pointer text-white"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-white-700 mb-1 required">
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full px-4 py-2 pr-10 border ${
  passwordMismatch ? "border-red-500" : "border-gray-300"
} rounded-md focus:outline-none focus:ring-1 ${
  passwordMismatch ? "focus:ring-red-500" : "focus:ring-white"
}`}

          />
          <span
            className="absolute right-3 top-9 cursor-pointer text-white"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
          {passwordMismatch && (
            <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
          )}
        </div>

        <div className="flex items-center mb-3 mt-3">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            className="mr-2 h-4 w-4 appearance-none border rounded border-white bg-transparent checked:bg-white checked:after:content-['✔'] checked:after:text-[#2c0f0f] checked:after:block checked:after:text-center checked:after:text-xs checked:after:leading-4"
            required
          />
          <label htmlFor="terms" className="text-sm text-white">
            I accept the{" "}
            <a href="/terms" className="underline">
              Terms and Conditions
            </a>
          </label>
        </div>

        
        <button
          type="submit"
          disabled={passwordMismatch}
          className="w-full bg-[#602020] text-white py-2 rounded-md hover:bg-[#3b1010] transition disabled:opacity-50"
        >
          Submit
        </button>
   
      </form>
    
    </div>
  );
}
