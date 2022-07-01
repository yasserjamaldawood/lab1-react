
// const ADD_TODO = "ADD_TODO";
// const REMOVE_TODO = "REMOVE_TODO";
// // actions
// export const AddToDoAction = (payloud) => {
//     return {
//         type: ADD_TODO,
//         payloud
//     }
// }

// export const RemoveFromToDo = (payloud) => {
//     return {
//         type: REMOVE_TODO,
//         payloud
//     }
// }
// // intial state
// const ToDoIntialState = {
//     ToDos: [
//         {
//             title: "learn node js",
//             content: "Lorem ipsum dolor sit amet.",
//         },
//         {
//             title: "go to the sea",
//             content: "Lorem ipsum dolor sit amet.",
//         },
//         {
//             title: "walk the dog",
//             content: "Lorem ipsum dolor sit amet.",
//         },
//     ],
// }
// // reducer
//  export const ToDoReducer = (state = ToDoIntialState, action) => {
//     if (action.type === ADD_TODO) {
//         return { ...state, ToDos: [...state.ToDos, action.payloud] }
//     }
//     if (action.type === REMOVE_TODO) {
//         return { ...state, ToDos: [...state.ToDos.filter((elem,index) =>{return index!== action.payloud})] }
//     }
//     return state;

// }

