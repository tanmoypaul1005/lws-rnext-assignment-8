import Image from "next/image";

export default function Home() {
  return (
    <div>
      <body>
        <nav>
          <div className="container flex justify-between py-6">
            <a href="index.html">
              <img
                src="./assets/images/logo.png"
                alt=""
                className="object-cover h-[40px]"
              />
            </a>

            <ul className="flex gap-4 text-sm text-gray-500">
              <li className="py-2 active">
                <a href="./index.html">Home</a>
              </li>

              <li className="py-2">
                <a href="./index.html">Recipe</a>
              </li>

              <li className="py-2">
                <a href="./index.html">About us</a>
              </li>

              <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
                <a href="./login.html">Login</a>
              </li>
            </ul>
          </div>
        </nav>

        <main>
          <section className="container">
            <div
              style={{
                backgroundImage: "url('./assets/images/cover.png')",
                padding: "1rem",
                borderRadius: "1rem",
                minHeight: "450px",
                display: "grid",
                alignItems: "center",
                gridTemplateColumns: "repeat(12, 1fr)",
              }}
            >
              <div style={{ gridColumn: "span 12/span 6" }}>
                <h1
                  style={{
                    fontWeight: "bold",
                    fontSize: "3rem",
                    color: "white",
                  }}
                >
                  Choose from thousands of recipes
                </h1>
                <p style={{ color: "white", margin: "1rem 0" }}>
                  Appropriately integrate technically sound value with scalable
                  infomediaries negotiate sustainable strategic theme areas
                </p>
              </div>
            </div>
          </section>

          <section className="container py-8">
            <div className="grid grid-cols-12 py-4">
              <div className="col-span-12 md:col-span-3">
                <h3 className="text-xl font-bold">Recipes</h3>
                <ul className="pl-2 my-6 space-y-4 text-sm text-gray-500">
                  <li>
                    <a href="#">Morning Bliss Café</a>
                  </li>

                  <li>
                    <a href="#">Sunrise Bites Kitchen</a>
                  </li>

                  <li>
                    <a href="#">Brunch Haven Delights</a>
                  </li>

                  <li>
                    <a href="#">Rise & Dine Eatery</a>
                  </li>

                  <li>
                    <a href="#">Breakfast Oasis Junction</a>
                  </li>
                </ul>
              </div>

              <div className="col-span-12 md:col-span-9">
                <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                  <div className="card">
                    <img
                      src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
                      className="rounded-md"
                      alt=""
                    />
                    <h4 className="my-2">Chef John's Turkey Sloppy Joes</h4>
                    <div className="flex justify-between py-2 text-xs text-gray-500">
                      <span>⭐️ 5.0</span>
                      <span>By: John Doe</span>
                    </div>
                  </div>

                  <div className="card">
                    <img
                      src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
                      className="rounded-md"
                      alt=""
                    />
                    <h4 className="my-2">Chef John's Turkey Sloppy Joes</h4>
                    <div className="flex justify-between py-2 text-xs text-gray-500">
                      <span>⭐️ 5.0</span>
                      <span>By: John Doe</span>
                    </div>
                  </div>

                  <div className="card">
                    <img
                      src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
                      className="rounded-md"
                      alt=""
                    />
                    <h4 className="my-2">Chef John's Turkey Sloppy Joes</h4>
                    <div className="flex justify-between py-2 text-xs text-gray-500">
                      <span>⭐️ 5.0</span>
                      <span>By: John Doe</span>
                    </div>
                  </div>

                  <div className="card">
                    <img
                      src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
                      className="rounded-md"
                      alt=""
                    />
                    <h4 className="my-2">Chef John's Turkey Sloppy Joes</h4>
                    <div className="flex justify-between py-2 text-xs text-gray-500">
                      <span>⭐️ 5.0</span>
                      <span>By: John Doe</span>
                    </div>
                  </div>

                  <div className="card">
                    <img
                      src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
                      className="rounded-md"
                      alt=""
                    />
                    <h4 className="my-2">Chef John's Turkey Sloppy Joes</h4>
                    <div className="flex justify-between py-2 text-xs text-gray-500">
                      <span>⭐️ 5.0</span>
                      <span>By: John Doe</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </div>
  );
}
