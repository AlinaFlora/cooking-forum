import { createAsyncThunk } from '@reduxjs/toolkit'
import { MODULE_NAME } from '../strings'
import { SearchRecipesPayload } from "../../../shared/types";
import RecipesApi from "./services";

const api = new RecipesApi()


export const fetchRecipes = createAsyncThunk(
  `${MODULE_NAME}/searchRecipes`,
  async (payload: SearchRecipesPayload) => api.searchRecipes(payload)
)