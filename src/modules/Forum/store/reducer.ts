import { createReducer } from '@reduxjs/toolkit'
import { addNewPost, fetchCategories, fetchComments, fetchPosts } from './actions'
import { CommentItem, PostItem, TopicCategory } from "../../../shared/types";

interface State {
  posts: PostItem[]
  comments: CommentItem[]
  categories: TopicCategory[]
  isDataLoading: boolean
  isDataFetched: boolean
  error?: string | null
}

const initialState: State = {
  posts: [],
  comments: [],
  categories: [],
  isDataLoading: false,
  isDataFetched: false,
  error: null,
}

export default createReducer(initialState, builder =>
  builder
    .addCase(fetchPosts.pending, state => {
      state.isDataLoading = true
      state.isDataFetched = false
      state.error = null
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload
      state.isDataLoading = false
      state.isDataFetched = true
      state.error = null
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.isDataLoading = false
      state.isDataFetched = false
      state.error = action.error.message
    })

  .addCase(fetchCategories.pending, state => {
    state.isDataLoading = true
    state.isDataFetched = false
    state.error = null
  })
  .addCase(fetchCategories.fulfilled, (state, action) => {
    state.categories = action.payload
    state.isDataLoading = false
    state.isDataFetched = true
    state.error = null
  })
  .addCase(fetchCategories.rejected, (state, action) => {
    state.isDataLoading = false
    state.isDataFetched = false
    state.error = action.error.message
  })

    .addCase(addNewPost.pending, state => {
    state.isDataLoading = true
    state.isDataFetched = false
    state.error = null
  })
  .addCase(addNewPost.fulfilled, (state, action) => {
    state.isDataLoading = false
    state.isDataFetched = true
    state.error = null
  })
  .addCase(addNewPost.rejected, (state, action) => {
    state.isDataLoading = false
    state.isDataFetched = false
    state.error = action.error.message
  })

    .addCase(fetchComments.pending, state => {
      state.isDataLoading = true
      state.isDataFetched = false
      state.error = null
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload
      state.isDataLoading = false
      state.isDataFetched = true
      state.error = null
    })
    .addCase(fetchComments.rejected, (state, action) => {
      state.isDataLoading = false
      state.isDataFetched = false
      state.error = action.error.message
    })
)
