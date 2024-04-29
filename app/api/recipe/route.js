import connectMongo from "@/dbConnect/connectMongo";
import recipes from "@/model/Recipes";

export async function GET() {
  try {
    await connectMongo();

    const recipe = await recipes.find({});
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