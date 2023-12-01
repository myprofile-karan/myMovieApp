import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    url: {},
    genres: {}
  },
  reducers: {
    getApiconfiguration: (state, action)=>{
        state.url = action.payload;
    },
    getGenres: (state, action) =>{
        state.genres = action.payload;
    }
  },
})

export const { getApiconfiguration, getGenres } = homeSlice.actions;
export default homeSlice.reducer