import HomeIcon from '@material-ui/icons/Home'
import { addBasePath } from "../../shared/utils";
import { ModuleRoute } from "../../shared/types";
import Forum from "./containers/Forum";
import ForumTopic from "./containers/ForumTopic";

export const BASE_PATH = '/'

const routes = addBasePath<ModuleRoute>(BASE_PATH, [
  {
    path: '/',
    label: 'Forum',
    title: 'Forum',
    icon: HomeIcon,
    exact: true,
    component: Forum
  },
  {
    path: `/topic`,
    label: 'Topic',
    title: 'Topic',
    icon: HomeIcon,
    exact: true,
    component: ForumTopic,
    navDisplay: false,

  },
])

export default routes
