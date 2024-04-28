import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="text-xl font-bold">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-sm text-gray-500">
        <li>
          <Link href="/categorized">Morning Bliss Café</Link>
        </li>

        <li>
          <Link href="/categorized">Sunrise Bites Kitchen</Link>
        </li>

        <li>
          <Link href="/categorized">Brunch Haven Delights</Link>
        </li>

        <li>
          <Link href="/categorized">Rise & Dine Eatery</Link>
        </li>

        <li>
          <Link href="/categorized">Breakfast Oasis Junction</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
