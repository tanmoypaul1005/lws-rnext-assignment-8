import React from "react";
import { registerUser } from "../actions";
import RegisterButton from "./components/RegisterButton";


const Register = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="text-2xl font-bold">Sign in</h4>
        <form action={registerUser} className="login-form">
          <div>
            <label for="email">FirstName</label>
            <input required type="text" name="firstName" id="email" />
          </div>

          <div>
            <label for="email">LastName</label>
            <input required type="text" name="lastName" id="email" />
          </div>

          <div>
            <label for="email">Email Address</label>
            <input required type="email" name="email" id="email" />
          </div>

          <div>
            <label for="password">Password</label>
            <input required type="password" name="password" id="password" />
          </div>

       <RegisterButton/>
        </form>

        <p className="text-xs text-center text-gray-600">Or</p>

        <a
          href="/login"
          className="block mx-auto mt-4 text-sm text-center text-gray-600 underline"
        >
          Already have an account? Login
        </a>
      </div>
    </div>
  );
};

export default Register;
