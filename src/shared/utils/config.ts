import { RouteProps } from 'react-router-dom'

export const DATE_FORMAT = 'MM/DD/YYYY'

export const addBasePath = <T extends RouteProps>(
  basePath: string,
  routes: T[]
) =>
  routes.map(({ path, ...route }) => ({
    ...route,
    path: `${basePath}${path}`.replace('//', '/'),
  }))
