import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeList = () => {
    return (
        <div className="col-span-12 md:col-span-9">
        <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    )
}

export default RecipeList