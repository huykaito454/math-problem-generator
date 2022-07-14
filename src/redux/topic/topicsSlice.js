import { createSlice } from "@reduxjs/toolkit";
const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: [],
  },
  reducers: {
    setTopics: (state, action) => ({
      ...state,
      topics: action.payload,
    }),
    getTopics() {},
  },
});
export const { setTopics, getTopics } = topicsSlice.actions;
export default topicsSlice.reducer;
