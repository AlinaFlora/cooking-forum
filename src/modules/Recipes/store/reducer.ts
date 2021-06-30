import { createReducer } from '@reduxjs/toolkit'
import { doSomethingAsync } from './actions'

interface State {
  something: string
  isDataLoading: boolean
  isDataFetched: boolean
  error?: string | null
}

const initialState: State = {
  something: '',
  isDataLoading: false,
  isDataFetched: false,
  error: null,
}

export default createReducer(initialState, builder =>
  builder
    .addCase(doSomethingAsync.pending, state => {
      state.isDataLoading = true
      state.isDataFetched = false
      state.error = null
    })
    .addCase(doSomethingAsync.fulfilled, (state, action) => {
      state.something = action.payload
      state.isDataLoading = false
      state.isDataFetched = true
      state.error = null
    })
    .addCase(doSomethingAsync.rejected, (state, action) => {
      state.isDataLoading = false
      state.isDataFetched = false
      state.error = action.error.message
    }),
)
