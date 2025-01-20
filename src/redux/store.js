import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoslice/TodoSilice'

export default configureStore({
  reducer: {
    todo: todoSlice,
  }
})