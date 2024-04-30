
import { base_url } from '../utils/const'
import RecipeCard from './RecipeCard'

const RecipeList =async () => {

    
    const recipeList = await fetch( "http://127.0.0.1:3000/api/recipe",{ cache: 'force-cache' })
    .then(res => res.json());


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