import { createReducer } from '@reduxjs/toolkit'
import { fetchPosts } from './actions'
import { PostItem } from "../../../shared/types";

interface State {
  posts: PostItem[]
  isDataLoading: boolean
  isDataFetched: boolean
  error?: string | null
}

const initialState: State = {
  posts: [],
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
    }),
)
