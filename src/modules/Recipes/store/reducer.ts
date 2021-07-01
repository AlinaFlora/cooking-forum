import { createReducer } from '@reduxjs/toolkit'
import { fetchRecipes } from './actions'
import { RecipeItem } from "../../../shared/types";

interface State {
  recipes: RecipeItem[]
  isDataLoading: boolean
  isDataFetched: boolean
  error?: string | null
}

const initialState: State = {
  recipes: [],
  isDataLoading: false,
  isDataFetched: false,
  error: null,
}

export default createReducer(initialState, builder =>
  builder
    .addCase(fetchRecipes.pending, state => {
      state.isDataLoading = true
      state.isDataFetched = false
      state.error = null
    })
    .addCase(fetchRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload
      state.isDataLoading = false
      state.isDataFetched = true
      state.error = null
    })
    .addCase(fetchRecipes.rejected, (state, action) => {
      state.isDataLoading = false
      state.isDataFetched = false
      state.error = action.error.message
    }),
)
