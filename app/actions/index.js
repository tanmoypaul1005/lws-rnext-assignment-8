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


async function performLogin(formData) {
    // try {
    //     const credential = {};
    //     credential.email = formData.get("email");
    //     credential.password = formData.get("password");
    //     const found = await findUserByCredentials(credential);
    //     return found;
    // } catch (error) {
    //     throw error;
    // }
}

export { registerUser,performLogin };
