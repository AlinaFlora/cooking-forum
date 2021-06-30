import { RootState } from "../../../app/App";

//todo own

export const getSomething = (state: RootState) => state.Recipes.something

export const getLoading = (state: RootState) => state.Recipes.isDataLoading

export const getError = (state: RootState) => state.Recipes.error
