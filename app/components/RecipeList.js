import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeList =async () => {

    const recipeList=await fetch("http://localhost:3000/api/recipe")
    .then((res)=>res.json())
    console.log("recipeList",recipeList)

    return (
        <div className="col-span-12 md:col-span-9">
        <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {
            recipeList?.data?.map((item,index)=>(
              <RecipeCard recipe={item} key={index} />
            ))
          }
        </div>
      </div>
    )
}

export default RecipeList