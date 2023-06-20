import { configureStore, createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    dashboard: {
      totalPrimePacks: 0,
      totalCourses: 0,
      totalEBooks: 0,
      purchasedCourses: 0,
    },
    sidebarExpansion: false,
    menuVisibility: false,
  },
  reducers: {
    slider(state, action) {
      if (action.payload !== undefined) {
        state.sidebarExpansion = action.payload;
        console.log(action);
      } else {
        state.sidebarExpansion = !state.sidebarExpansion;
      }
    },
    headerMenuVisibility(state, action) {
      state.menuVisibility = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
const store = configureStore({
  reducer: { data: dataSlice.reducer },
});

export default store;
