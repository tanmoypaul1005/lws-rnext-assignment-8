"use server";

import User from "@/model/User";

async function createUser(user) {
  const _user = new User({ ...user });
  return await _user.save();
}

export { createUser };
