import { createAsyncThunk } from '@reduxjs/toolkit'
import { MODULE_NAME } from '../strings'

export const doSomethingAsync = createAsyncThunk(
  `${MODULE_NAME}/doSomethingAsync`,
  () =>
    new Promise(resolve =>
      setTimeout(() => resolve('Done'), 1000),
    ) as Promise<string>,
)
