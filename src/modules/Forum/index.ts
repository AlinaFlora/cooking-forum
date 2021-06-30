import { reducer } from './store'
import { MODULE_NAME } from './strings'
import routes from './routes'
import { Module } from "../../shared/types";

const moduleConfig: Module<typeof reducer> = {
  name: MODULE_NAME,
  reducer,
  routes,
}

export default moduleConfig
