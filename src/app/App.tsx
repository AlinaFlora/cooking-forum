import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import { routes, reducers } from '../modules'
import theme from "../config/theme";

export const store = configureStore({
  reducer: combineReducers({ ...reducers }),
})

export type RootState = ReturnType<typeof store.getState>

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <Switch>
              {routes.map(route => (
                <Route key={`route-${route.path}`} {...route} />
              ))}
            </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
