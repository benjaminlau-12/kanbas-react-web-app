import { configureStore } from "@reduxjs/toolkit";
import moduleReducer from "../Courses/Modules/moduleReducer";


const store = configureStore({
  reducer: {
    moduleReducer,
  }
});


export default store;