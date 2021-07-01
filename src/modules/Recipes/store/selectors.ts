import { RootState } from "../../../app/App";

export const getRecipes = (state: RootState) => state.Recipes.recipes

export const getLoading = (state: RootState) => state.Recipes.isDataLoading

export const getError = (state: RootState) => state.Recipes.error
