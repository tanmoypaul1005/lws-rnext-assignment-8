import Link from "next/link";
import { base_url } from "../utils/const";

const SideBar = async () => {
  const recipeList = await fetch(base_url + "/recipe").then((res) =>
    res.json()
  );

  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="text-xl font-bold">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-sm text-gray-500">
        {[...new Set(recipeList?.data?.map((item) => item?.category))].map(
          (category, index) => (
            <li key={index}>
              <Link href={`/categorized/${category}`}>{category}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default SideBar;
