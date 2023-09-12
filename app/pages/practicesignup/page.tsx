// pages/signup.tsx
'use client';

import { useState } from "react";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"

interface FormData {
  phoneNumber: string;
  email: string;
  password: string;
}

const page = () => {
const [formData, setFormData] = useState<FormData>({
  phoneNumber: "",
  email: "",
  password: "",
});

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const isFormValid = () => {
  const { phoneNumber, email, password } = formData;
  return (
    phoneNumber.trim() !== "" && email.trim() !== "" && password.trim() !== ""
  );
};
  return (
    <div>
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        placeholder="Enter phone number"
        className="border p-2"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter email"
        className="border p-2"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Enter password"
        className="border p-2"
      />
      <button
        className={`text-white p-2 rounded ${
          isFormValid() ? "bg-green-500" : "bg-gray-300"
        }`}
        // disabled={!isFormValid()}
      >
        Sign Up
      </button>
    </div>
  );
};

export default page;

/**
 *  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Update the respective state variable based on the input field name
    switch (name) {
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }

    // Calculate the button background color
    if (phoneNumber !== "" && email !== "" && password !== "") {
      setButtonColor("bg-green-500"); // Change to your desired color
    } else {
      setButtonColor("bg-gray-300");
    }
  };
 * const calculateButtonColor = () => {
  if (phoneNumber !== "" && email !== "" && password !== "") {
    setButtonColor("bg-green-500"); // Change to your desired color
  } else {
    setButtonColor("bg-gray-300");
  }
};

// Effect to update the button color whenever any input field changes
useEffect(() => {
  calculateButtonColor();
}, [phoneNumber, email, password]);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 *   <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={handleInputChange}
              />
            </div>
            
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleInputChange}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring focus:ring-opacity-50"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <AiFillEyeInvisible className="h-5 w-5" /> 
                  ) : (
                    <AiFillEye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
 */
