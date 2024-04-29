import Link from "next/link";

const RecipeCard = ({ recipe }) => {
  const {_id, name, description, author, image, thumbnail, category, rating } =
    recipe;

  return (
    <Link href={`/recipe/${_id}`} className="card">
      <img
        src={thumbnail}
        className="rounded-md"
        alt=""
      />
      <h4 className="my-2">{name}</h4>
      <div className="flex justify-between py-2 text-xs text-gray-500">
        <span>⭐️ {rating}</span>
        <span>By: {author}</span>
      </div>
    </Link>
  );
};

export default RecipeCard;
