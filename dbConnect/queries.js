"use server";

import User from "@/model/User";

async function createUser(user) {
    return User.create(user)
}

export { createUser };
