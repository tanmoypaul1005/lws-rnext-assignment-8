"use client";
import { useAuth } from "@/app/hooks/useAuth";
import { Toastr } from "@/app/utils/utilityFunctions";
import { ToastContainer, toast } from 'react-toastify';

const FavItem = ({ recipe_id }) => {
  const { auth, setAuth } = useAuth();

  return (
    <>

    <ToastContainer />
      {auth?._id ? (
        <div
          onClick={async () => {
            const body = { recipe_id: recipe_id, user_id: auth?._id };
            const res = await fetch("http://localhost:3000/api/user/fav", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            });
            const data = await res.json();
            // console.log("data", data);

            if (data.success) {
              Toastr({ type: "success", message: data.message });
              setAuth(data?.data);
            } else {
              Toastr({ type: "error", message: data.message });
              return data;
            }
          }}
          className={`${
            auth?.favourites.includes(recipe_id)
              ? "text-[#eb4a36]"
              : "text-gray-600"
          } flex gap-2  cursor-pointer`}
        >
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
      ) : (
        ""
      )}
    </>
  );
};

export default FavItem;
