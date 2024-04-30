import RecipeCard from "@/app/components/RecipeCard";
import { base_url } from "@/app/utils/const";
import React from "react";

const CategoryList = async ({ params }) => {
  const recipeList = await fetch(base_url + "/recipe").then((res) =>
    res.json()
  );

  const categoryList = recipeList?.data?.filter(
    (item) => item.category === params?.category_name
  );

  console.log("xc",categoryList)
  return (
    <body>
      <main>
        <section class="container py-8">
          <div>
            <h3 class="font-semibold text-xl">Appetizers & Snacks</h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
              {categoryList?.map((item, index) => (
                <RecipeCard recipe={item} key={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};

export default CategoryList;
