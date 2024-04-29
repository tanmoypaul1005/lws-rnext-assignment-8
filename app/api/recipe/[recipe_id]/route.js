import connectMongo from "@/dbConnect/connectMongo";
import recipes from "@/model/Recipes";

export async function GET(request) {
  try {
    await connectMongo();

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('recipe_id')
  
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