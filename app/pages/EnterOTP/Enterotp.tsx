import React, { useState } from 'react'
import OtpInput from "otp-input-react";
const Enterotp = () => {
const [otp, setOtp] = useState("");
const [ph, setPh] = useState("");
const [loading, setLoading] = useState(false);
const [showOTP, setShowOTP] = useState(false);
const [user, setUser] = useState(null);


  return (
    <div className="w-[100%]">
      <label htmlFor="OTP" className="text-white m-1  px-1 text-sm">
        Email OTP
      </label>

      <div className="flex justify-between py-1 px-2 border-red-700 items-center">
        <OtpInput
          value={otp}
          onChange={setOtp}
          background="#1E1E1E"
          OTPLength={6}
          otpType="number"
          disabled={false}
          width={100}
          autoFocus
          className="opt-container"
        ></OtpInput>
      </div>

      <div className="py-2 px-2 mt-5  bg-[#636363] flex items-center justify-center border-yellow-600 rounded-md">
        <button className="text-white py-1 px-2 font-semibold text-sm text-center ">
          Verify
        </button>
      </div>

      <div className="py-5 px-2 flex items-center justify-center border-yellow-600 rounded-md">
        <div className="flex justify-between gap-2 border-red-600">
          <h2 className="text-[#1E1E1E] text-base sm:text-sm font-semibold">
            Don't have an account?{" "}
          </h2>
          <h2 className="text-red-500 underline block"> SignUp </h2>
        </div>
      </div>
    </div>
  );
}

export default Enterotp