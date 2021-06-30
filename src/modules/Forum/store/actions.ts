import { createAsyncThunk } from '@reduxjs/toolkit'
import { MODULE_NAME } from '../strings'
import ForumApi from "./services";
import { SearchPostsPayload , AddNewPostsPayload} from "../../../shared/types";

const api = new ForumApi()

export const fetchPosts = createAsyncThunk(
  `${MODULE_NAME}/searchPosts`,
  async (payload: SearchPostsPayload) => api.searchPosts(payload)
)

export const addNewPost = createAsyncThunk(
  `${MODULE_NAME}/addPost`,
  async (payload: AddNewPostsPayload) => api.addPost(payload)
)
