import connectMongo from "@/dbConnect/connectMongo";
import recipes from "@/model/Recipes";


export async function POST(request) {
  try {
    const new_recipe = await request.json();
      await connectMongo();
    const recipe = new recipes({
      ...new_recipe,
    });

    await recipe.save();
    return Response.json({
      status: 201,
      success: true,
      data: recipe,
      message: "Recipe added successfully",
    });
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
