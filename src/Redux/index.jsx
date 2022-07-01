import {toDoSlice} from "./feature/todoSlice";
//
import { configureStore } from "@reduxjs/toolkit";






// store
export const store = configureStore(
    // reducer name
   {

       reducer:{todo:toDoSlice.reducer}
   } 
);