import { configureStore } from '@reduxjs/toolkit'
import windowScrollYReducer from './windowScrollYSlice'
import windowInnerSizeSliceReducer from './windowInnerSizeSlice'

export default configureStore({
  reducer: {
    windowScrollY: windowScrollYReducer,
    windowInnerSize: windowInnerSizeSliceReducer
  },
})