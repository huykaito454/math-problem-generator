import { createSlice } from "@reduxjs/toolkit";
const questionSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
  },
  reducers: {
    setQuestions: (state, action) => ({
      ...state,
      questions: action.payload,
    }),
    getQuestions() {},
  },
});
export const { setQuestions, getQuestions } = questionSlice.actions;
export default questionSlice.reducer;
