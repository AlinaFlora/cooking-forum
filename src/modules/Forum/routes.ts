import HomeIcon from '@material-ui/icons/Home'
import { addBasePath } from "../../shared/utils";
import { ModuleRoute } from "../../shared/types";
import Forum from "./containers/Forum";

export const BASE_PATH = '/'

const routes = addBasePath<ModuleRoute>(BASE_PATH, [
  {
    path: '/',
    label: 'navigation.home',
    title: 'Forum',
    icon: HomeIcon,
    exact: true,
    component: Forum
  },
])

export default routes
