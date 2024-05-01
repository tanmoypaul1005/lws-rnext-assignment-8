"use client";
import Image from "next/image";
import Link from "next/link";
import { iLogo } from "../utils/imageImports";
import { useAuth } from "../hooks/useAuth";

const TopBar = () => {
  const { auth } = useAuth();

  console.log("dddd", auth);

  return (
    <div>
      <nav>
        <div className="container flex justify-between py-6">
          <Link href="/">
            <Image
              style={{ maxHeight: "40px", minHeight: "40px" }}
              className=""
              src={iLogo}
              alt=""
            />
          </Link>

          <ul className="flex gap-4 text-sm text-gray-500">
            <li className="py-2 active">
              <Link href="/index.html">Home</Link>
            </li>

            <li className="py-2">
              <Link href="/index">Recipe</Link>
            </li>

            <li className="py-2">
              <Link href="/index">About us</Link>
            </li>

           {
           auth?.email ?
           <li className="py-2 text-black">
              <Link href="/login">
                {auth?.firstName} {auth?.lastName}
                </Link>
            </li>
           : 
           <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
              <Link href="/login">Login</Link>
            </li>
            }
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
