"use client"

import { performLogin } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { Toastr } from "@/app/utils/utilityFunctions";
import { useRouter } from "next/navigation";
import { useState } from "react";


function LoginForm() {

    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setAuth } = useAuth();
    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const found = await performLogin({email, password})
    
            if (found?.success) {
                Toastr({type:'success',message:found.message});
                setAuth(found?.data);
                setTimeout(() => {
                    router.push('/');
                }, 3000);
                
            } else {
                Toastr({type:'error',message:found.message});
                setError(found.message);
            }
        } catch (err) {
            Toastr({type:'error',message:"An error occurred"});
            setError(err.message);
        }
    }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div>
        <label for="email">Email Address</label>
        <input required value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" id="email" />
      </div>

      <div>
        <label for="password">Password</label>
        <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" />
      </div>

      <button
        type="submit"
        className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
      >
        Login
      </button>

      <div className="text-[#eb4a36]">{error}</div>
    </form>
  );
}

export default LoginForm;
