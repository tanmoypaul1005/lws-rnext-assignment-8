import Link from "next/link";

const RecipeCard = () => {
  return (
    <Link href={`/recipe/98`} className="card">
      <img
        src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
        className="rounded-md"
        alt=""
      />
      <h4 className="my-2">Chef Johns Turkey Sloppy Joes</h4>
      <div className="flex justify-between py-2 text-xs text-gray-500">
        <span>⭐️ 5.0</span>
        <span>By: John Doe</span>
      </div>
    </Link>
  );
};

export default RecipeCard;
