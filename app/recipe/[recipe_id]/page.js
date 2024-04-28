const RecipeDetails = () => {
  return (
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
        <section>
          <div className="container grid grid-cols-12 gap-8 justify-items-center">
            <div className="col-span-12 md:col-span-6">
              <img
                src="https://source.unsplash.com/Zh0mYmMBZjQ/600x600"
                alt=""
                className="object-contain w-full h-full rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center col-span-12 py-8 md:col-span-6">
              <h2 className="text-4xl font-semibold leading-10 lg:w-8/12">
                White calzones with marinara sauce
              </h2>
              <p className="text-xs text-[#eb4a36] italic my-2">
                Breakfast and Brunch
              </p>
              <p className="my-6 text-sm leading-6 text-gray-600">
                Supermarket brands of ricotta contain stabilizers, which can
                give the cheese a gummy texture when baked. Check the label and
                choose ricotta made with as few ingredients as possible.
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
                  <p className="text-sm text-gray-500">30 minutes</p>
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
                  <p className="text-sm text-gray-500">1 hour</p>
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
              <div className="step">
                <h3>Step 1</h3>
                <p>
                  Labour, of evaluated would he the a the our what is in the
                  arduous sides behavioural is which the have didn't kicked
                  records the it framework by the for traveler sure the can most
                  well her. Entered have break himself cheek, and activity, for
                  bit of text.
                </p>
              </div>

              <div className="step">
                <h3>Step 2</h3>
                <p>
                  Labour, of evaluated would he the a the our what is in the
                  arduous sides behavioural is which the have didn't kicked
                  records the it framework by the for traveler sure the can most
                  well her. Entered have break himself cheek, and activity, for
                  bit of text.
                </p>
              </div>

              <div className="step">
                <h3>Step 3</h3>
                <p>
                  Labour, of evaluated would he the a the our what is in the
                  arduous sides behavioural is which the have didn't kicked
                  records the it framework by the for traveler sure the can most
                  well her. Entered have break himself cheek, and activity, for
                  bit of text.
                </p>
              </div>

              <div className="step">
                <h3>Step 4</h3>
                <p>
                  Labour, of evaluated would he the a the our what is in the
                  arduous sides behavioural is which the have didn't kicked
                  records the it framework by the for traveler sure the can most
                  well her. Entered have break himself cheek, and activity, for
                  bit of text.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};

export default RecipeDetails;
