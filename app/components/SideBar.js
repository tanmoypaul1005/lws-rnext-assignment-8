import Image from "next/image";
import React from "react";

const SideBar = () => {
  return (
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
  );
};

export default SideBar;
