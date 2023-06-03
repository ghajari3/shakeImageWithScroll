import { createSlice } from '@reduxjs/toolkit'

export const windowScrollYSlice = createSlice({
  name: 'windowScrollY',
  initialState: {
    value: window.scrollY,
  },
  reducers: {
    setWindowScrollY: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setWindowScrollY } = windowScrollYSlice.actions

export default windowScrollYSlice.reducer