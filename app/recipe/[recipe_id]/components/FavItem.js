"use client";
import { useAuth } from "@/app/hooks/useAuth";
import { Toastr } from "@/app/utils/utilityFunctions";


import React from "react";


const FavItem = ({recipe_id}) => {
  const { auth } = useAuth();

  console.log("auth",auth)
  return (
    <div
      onClick={async () => {
      
      }}
      className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
      <span>Favourite</span>
    </div>
  );
};

export default FavItem;
