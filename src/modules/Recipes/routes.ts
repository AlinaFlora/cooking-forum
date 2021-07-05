import HomeIcon from '@material-ui/icons/Home'
import { addBasePath } from "../../shared/utils";
import { ModuleRoute } from "../../shared/types";
import Recipes from "./containers/Recipes";

export const BASE_PATH = '/'

const routes = addBasePath<ModuleRoute>(BASE_PATH, [
  {
    path: '/recipes',
    label: 'News',
    title: 'Recipes',
    icon: HomeIcon,
    exact: true,
    component: Recipes
  },
])

export default routes
