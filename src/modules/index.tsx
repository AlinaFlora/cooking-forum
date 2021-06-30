import forum from './Forum'
import Recipes from './Recipes'

export const routes = [
  ...forum.routes,
  ...Recipes.routes,
]

export const reducers = {
  forum: forum.reducer,
  Recipes: Recipes.reducer,
}
