import { createSlice } from "@reduxjs/toolkit"

const ToDoIntialState = {
    ToDos: [
        {
            title: "learn node js",
            content: "Lorem ipsum dolor sit amet.",
        },
        {
            title: "go to the sea",
            content: "Lorem ipsum dolor sit amet.",
        },
        {
            title: "walk the dog",
            content: "Lorem ipsum dolor sit amet.",
        }
    ]
}

export const toDoSlice=createSlice({
    name:"toDo",
    initialState: ToDoIntialState,
 
    reducers:{
        ADD_TODO:(state,action)=>{  console.log(action)
            state.ToDos.push(action.payload)},
        REMOVE_TODO:(state,action)=>{state.ToDos.splice(action.payload,1)},

    }
})

export const {ADD_TODO}= toDoSlice.actions;
export const {REMOVE_TODO}= toDoSlice.actions;

