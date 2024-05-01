"use server";
import { base_url } from "../utils/const";
import { redirect } from "next/navigation";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const res = await fetch(base_url + "/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  console.log("res", res.status);
  const data = await res.json()

    if (data.status === 201) {
      redirect("/login");
    }
}

export { registerUser };
