import {combineReducers} from "@reduxjs/toolkit";
import recipesSlice from "./recipesSlice";

const rootReducer = combineReducers({
  recipes: recipesSlice,
})

export default rootReducer