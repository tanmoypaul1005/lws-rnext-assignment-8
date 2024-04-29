import Image from "next/image";

const RecipeDetails = async ({ params }) => {
  // http://localhost:3000/api/recipe/662ef0e14b2a1df29fbde4ca

  const recipeDetails = await fetch(
    "http://localhost:3000/api/recipe/" + params?.recipe_id
  ).then((res) => res.json());Í

  return (
    <body>
      <main>
        <section>
          <div className="container grid grid-cols-12 gap-8 justify-items-center">
            <div className="col-span-12 md:col-span-6">
              <Image
                src={recipeDetails?.data?.image}
                alt=""
                className="object-contain w-full h-full rounded-lg"
                width={500}
                height={400}
              />
            </div>
            <div className="flex flex-col justify-center col-span-12 py-8 md:col-span-6">
              <h2 className="text-4xl font-semibold leading-10 lg:w-8/12">
                {recipeDetails?.data?.name}
              </h2>
              <p className="text-xs text-[#eb4a36] italic my-2">
                {recipeDetails?.data?.category}
              </p>
              <p className="my-6 text-sm leading-6 text-gray-600">
                {recipeDetails?.data?.description}
              </p>

              <div className="flex justify-center gap-4 my-12 divide-x">
                <div className="flex-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="mx-auto"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-700">
                    Prep time
                  </h3>
                  <p className="text-sm text-gray-500">
                  {recipeDetails?.data?.activeTime}
                  </p>
                </div>
                <div className="flex-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="mx-auto"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6.5 17h11" />
                    <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
                    <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-700">
                    Cook time
                  </h3>
                  <p className="text-sm text-gray-500">
                    {" "}
                    {recipeDetails?.data?.totalTime}
                  </p>
                </div>
                <div className="flex-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="mx-auto"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                  </svg>
                  <h3 className="mt-2 text-lg font-medium text-gray-700">
                    Servings
                  </h3>
                  <p className="text-sm text-gray-500">4</p>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <div className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                  <span>Favourite</span>
                </div>

                <div className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M8.7 10.7l6.6 -3.4" />
                    <path d="M8.7 13.3l6.6 3.4" />
                  </svg>
                  <span>Share</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container py-12">
            <h3 className="py-6 text-xl font-semibold">How to Make it</h3>
            <div>
              {recipeDetails?.data?.steps?.map((item, index) => (
                <div className="step" key={index}>
                  <h3>Step {index + 1}</h3>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};

export default RecipeDetails;
