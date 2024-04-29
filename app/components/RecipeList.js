import { base_url } from '../utils/const'
import RecipeCard from './RecipeCard'

const RecipeList = ({ recipeList }) => {
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

export async function getServerSideProps() {
    const response = await fetch(base_url + "/recipe",{ cache: 'no-store' })
    const recipeList = await response.json()

    return {
        props: {
            recipeList
        }
    }
}

export default RecipeList