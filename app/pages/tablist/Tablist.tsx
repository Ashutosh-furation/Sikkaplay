
'use client'
import React, { useState } from "react";
import PhoneNumber from "../phonenumber/PhoneNumber";
import EmailLogin from "../EmailLogin/EmailLogin";
import Enterotp from "../EnterOTP/Enterotp";


const Tablist = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };


  return (
    <div className="w-[100%]   border-green-500  mx-auto p-2">
      <div className="flex ">
        <button
          onClick={() => handleTabChange("login")}
          className={`w-full  py-1 text-sm font-semibold focus:outline-none ${
            activeTab === "login"
              ? "text-red-500 border-b border-red-500"
              : "text-gray-500"
          }`}
        >
          Phone Number
        </button>
        <button
          onClick={() => handleTabChange("signup")}
          className={`w-full  py-2 text-sm font-semibold focus:outline-none ${
            activeTab === "signup"
              ? "text-red-500 border-b border-red-500"
              : "text-gray-500"
          }`}
        >
          Email Address
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "login" && (
          <div className="py-2">
             <PhoneNumber/>
          </div>
        )}

        {activeTab === "signup" && (
          <div className="py-2">
           <EmailLogin/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tablist;
