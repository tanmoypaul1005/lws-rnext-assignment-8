import Link from "next/link";

const RecipeCard = ({ recipe }) => {

  return (
    <Link href={`/recipe/${recipe?._id}`} className="card">
      <img
        src={recipe?.thumbnail}
        className="rounded-md"
        alt=""
      />
      <h4 className="my-2">{recipe?.name}</h4>
      <div className="flex justify-between py-2 text-xs text-gray-500">
        <span>⭐️ {recipe?.rating}</span>
        <span>By: {recipe?.author}</span>
      </div>
    </Link>
  );
};

export default RecipeCard;
