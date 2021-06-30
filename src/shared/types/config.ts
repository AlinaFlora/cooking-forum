import { SvgIconComponent } from '@material-ui/icons'
import { RouteProps } from 'react-router-dom'

export interface ModuleRoute extends RouteProps {
  title: string
  path: string
  label?: string
  icon?: SvgIconComponent
  navDisplay?: boolean
}

export interface Module<Reducer> {
  name: string
  routes: ModuleRoute[]
  reducer: Reducer
}
