import SideBar from "./components/SideBar";
import RecipeList from "./components/RecipeList";

export default function Home() {
  return (
    <main>
      <section className="container">
        <div
          style={{
            backgroundImage: "url('./assets/images/cover.png')",
          }}
          className="py-4 rounded-lg p-4 md:p-12 min-h-[450px] bg-cover grid place-items-center grid-cols-12"
        >
          <div className="col-span-12 md:col-span-6">
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              Choose from thousands of recipes
            </h1>
            <p className="my-4 text-white">
              Appropriately integrate technically sound value with scalable
              infomediaries negotiate sustainable strategic theme areas
            </p>
          </div>
        </div>
      </section>

      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <SideBar />
          <RecipeList />
        </div>
      </section>
    </main>
  );
}
