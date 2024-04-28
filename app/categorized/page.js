const Categorized = () => {
    return (
        <div>
            <body>
  <nav>
    <div className="container flex justify-between py-6">
      <a href="index.html">
        <img src="./assets/images/logo.png" alt="" className="object-cover h-[40px]" />
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

    <section className="container py-8">
      <div>

        <h3 className="text-xl font-semibold">Appetizers & Snacks</h3>

        <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          <div className="card">
            <img src="https://source.unsplash.com/-YHSwy6uqvk/300x160" className="rounded-md" alt=""/>
            <h4 className="my-2">Chef John's Turkey Sloppy Joes</h4>
            <div className="flex justify-between py-2 text-xs text-gray-500">
              <span>⭐️ 5.0</span>
              <span>By: John Doe</span>
            </div>
          </div>

          <div className="card">
            <img src="https://source.unsplash.com/-YHSwy6uqvk/300x160" className="rounded-md" alt=""/>
            <h4 className="my-2">Chef John's Turkey Sloppy Joes</h4>
            <div className="flex justify-between py-2 text-xs text-gray-500">
              <span>⭐️ 5.0</span>
              <span>By: John Doe</span>
            </div>
          </div>

          <div className="card">
            <img src="https://source.unsplash.com/-YHSwy6uqvk/300x160" className="rounded-md" alt=""/>
            <h4 className="my-2">Chef John's Turkey Sloppy Joes</h4>
            <div className="flex justify-between py-2 text-xs text-gray-500">
              <span>⭐️ 5.0</span>
              <span>By: John Doe</span>
            </div>
          </div>

          <div className="card">
            <img src="https://source.unsplash.com/-YHSwy6uqvk/300x160" className="rounded-md" alt=""/>
            <h4 className="my-2">Chef John's Turkey Sloppy Joes</h4>
            <div className="flex justify-between py-2 text-xs text-gray-500">
              <span>⭐️ 5.0</span>
              <span>By: John Doe</span>
            </div>
          </div>

          <div className="card">
            <img src="https://source.unsplash.com/-YHSwy6uqvk/300x160" className="rounded-md" alt=""/>
            <h4 className="my-2">Chef John's Turkey Sloppy Joes</h4>
            <div className="flex justify-between py-2 text-xs text-gray-500">
              <span>⭐️ 5.0</span>
              <span>By: John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</body>
        </div>
    )
}

export default Categorized