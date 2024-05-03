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
  try {
    const res = await fetch(base_url + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log("data", data);
    if (data.success) {
      return data;
    } else {
      return data;
    }
  } catch (error) {
    return false;
  }
}

async function setFavorite(body) {
  const res = await fetch(base_url + "/user/fav", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
}

export { registerUser, performLogin, setFavorite };
