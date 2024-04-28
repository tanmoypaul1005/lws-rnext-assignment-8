import Image from "next/image";

const TopBar = () => {
    return (
        <div>
                <nav>
        <div className="container flex justify-between py-6">
          <a href="index.html">
            <Image className="object-cover h-[40px]" src="/assets/images/logo.png" alt="" width={40} height={40} />
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
        </div>
    )
}

export default TopBar