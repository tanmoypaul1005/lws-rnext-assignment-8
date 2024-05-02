import User from "@/model/User";


export async function POST(request) {
  try {
    const req = await request.json();
    const user = await User.findById(req.user_id);
    if (!user) {
      return Response.json({status:500,success: false, message: "User not found" });
    }
    const index = user.favourites.indexOf(req?.recipe_id);

    if (index !== -1) {
      // Recipe is in favourites, so remove it
      user.favourites.splice(index, 1);
      await user.save();
      return Response.json({status:200,success: true, message: "Recipe removed from favourites" });
    } else {
      // Recipe is not in favourites, so add it
      user.favourites.push(req?.recipe_id);
      await user.save();
      return Response.json({status:200,success: true, message: "Recipe added to favourites" });
    }
  } catch (err) {
    console.error(err);
    return Response.json({
      status: 500,
      success: false,
      data: null,
      message: "Internal Server Error",
    });
  }
}
