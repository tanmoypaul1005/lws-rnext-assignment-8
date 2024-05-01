"use server"
import { createUser } from "@/dbConnect/queries";

async function registerUser(formData) {
    const user = Object.fromEntries(formData);
    const created = await createUser(user);
    redirect("/login");
}

export { registerUser };