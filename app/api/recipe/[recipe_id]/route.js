import connectMongo from "@/dbConnect/connectMongo";
import recipes from "@/model/Recipes";

export async function GET(request,{ params }) {
  try {
    await connectMongo();
    const id = params?.recipe_id

  
    const recipe = await recipes.findOne({_id:id});
    return Response.json({
      status: 201,
      success: true,
      data: recipe,
      message: "Recipe find successfully",
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