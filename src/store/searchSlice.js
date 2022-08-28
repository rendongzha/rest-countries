import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
  },
  reducers: {
    changeSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeSearch } = searchSlice.actions;
export default searchSlice.reducer;
