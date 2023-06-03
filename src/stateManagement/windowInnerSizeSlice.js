import { createSlice } from '@reduxjs/toolkit'

export const windowInnerSizeSlice = createSlice({
  name: 'windowInnerSize',
  initialState: {
    value: { height: window.innerHeight, width: window.innerWidth },
  },
  reducers: {
    setWindowInnerSize: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setWindowInnerSize } = windowInnerSizeSlice.actions

export default windowInnerSizeSlice.reducer