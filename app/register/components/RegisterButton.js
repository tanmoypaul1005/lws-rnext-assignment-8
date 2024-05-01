"use client";
import { useFormStatus } from 'react-dom'

const RegisterButton = () => {

    const status = useFormStatus();

    return (
        <button
        disabled={status.pending}
        type="submit"
        className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
      >
           {status.pending ? "Loading ..." : "Register"} 
      </button>
    )
}

export default RegisterButton