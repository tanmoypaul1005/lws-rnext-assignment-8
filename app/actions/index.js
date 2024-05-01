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
  const data = await res.json();

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
console.log("formData",formData)
  try {
    const res = await fetch(base_url + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log("data",data)
    if (data.success) {
     return data;
    } else {
      return data;
    }
  } catch (error) {
    return false
  }
}

export { registerUser, performLogin };
