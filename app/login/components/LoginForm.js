"use client"

import { performLogin } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginForm() {

    const [error, setError] = useState("");

    const { setAuth } = useAuth();
    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            const found = await performLogin(formData)

            if (found) {
                setAuth(found);
                router.push('/');
            } else {
                setError('Please provide a valid login credential');
            }
        } catch (err) {
            setError(err.message);
        }
    }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div>
        <label for="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button
        type="submit"
        className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
