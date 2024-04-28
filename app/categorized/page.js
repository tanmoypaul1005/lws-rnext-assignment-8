import RecipeCard from "../components/RecipeCard";

const Categorized = () => {
  return (
      <section className="container py-8">
        <div>
          <h3 className="text-xl font-semibold">Appetizers & Snacks</h3>

          <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </div>
        </div>
      </section>
  );
};

export default Categorized;
