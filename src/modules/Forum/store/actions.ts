import { createAsyncThunk } from '@reduxjs/toolkit'
import { MODULE_NAME } from '../strings'
import ForumApi from "./services";
import {
  SearchPostsPayload,
  AddNewPostsPayload,
  SearchCommentsPayload,
  AddNewCommentPayload, SearchPostByIdPayload
} from "../../../shared/types";

const api = new ForumApi()

export const fetchPosts = createAsyncThunk(
  `${MODULE_NAME}/searchPosts`,
  async (payload: SearchPostsPayload) => api.searchPosts(payload)
)

export const fetchPostById = createAsyncThunk(
  `${MODULE_NAME}/searchPostById`,
  async (payload: SearchPostByIdPayload) => api.searchPostById(payload)
)

export const fetchCategories = createAsyncThunk(
  `${MODULE_NAME}/searchCategories`,
  async () => api.searchCategories()
)

export const fetchComments = createAsyncThunk(
  `${MODULE_NAME}/searchComments`,
  async (payload: SearchCommentsPayload) => api.searchComments(payload)
)

export const addNewPost = createAsyncThunk(
  `${MODULE_NAME}/addPost`,
  async (payload: AddNewPostsPayload) => api.addPost(payload)
)

export const addNewComment = createAsyncThunk(
  `${MODULE_NAME}/addComment`,
  async (payload: AddNewCommentPayload) => api.addComment(payload)
)
