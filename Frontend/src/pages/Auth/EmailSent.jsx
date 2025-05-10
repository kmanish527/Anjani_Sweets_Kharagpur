import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";

export default function EmailSent() {
  const [otp, setOtp] = useState("");
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Focus first box when any box is clicked
  useEffect(() => {
    const handleClick = () => {
      const firstInput = containerRef.current?.querySelector("input");
      firstInput?.focus();
    };
    const container = containerRef.current;
    container?.addEventListener("click", handleClick);
    return () => container?.removeEventListener("click", handleClick);
  }, []);

  const handleVerify = () => {
    if (otp === "123456") {
      navigate("/login");
    } else {
      alert("Incorrect OTP");
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="max-w-md w-full rounded-xl p-8 shadow-lg backdrop-filter backdrop-blur-lg border border-white border-opacity-20 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Mail Sent Successfully
        </h1>
        <p className="text-lg text-gray-100 mb-8">
          Please check your email and enter the OTP
        </p>
        <div
          className="flex justify-center mb-10 text-white gap-2 cursor-pointer"
          ref={containerRef}
        >
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputType="tel"
            renderSeparator={
              <span className="text-white text-0.2xl m-1">•</span>
            }
            inputStyle="!w-12 !h-12 !text-center !text-xl !rounded-md !bg-transparent !border !border-white/50 focus:!outline-none focus:!ring-2 focus:!ring-white transition-all duration-150"
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleVerify}
            disabled={otp.length !== 6}
            className="w-full bg-[#602020] text-white py-2 rounded-md hover:bg-[#3b1010] transition disabled:opacity-50"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}
