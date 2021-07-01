import { RootState } from "../../../app/App";

export const getRecipes = (state: RootState) => state.Recipes.recipes

export const getRecipesDataLoading = (state: RootState) => state.Recipes.isDataLoading
export const getRecipesIsDataFetched = (state: RootState) => state.Recipes.isDataFetched

export const getError = (state: RootState) => state.Recipes.error
