import { useState } from "react";
import TodoForm from "../../component/Todo/TodoForm";
import TodoList from "../../component/Todo/ToDoList";
import './Todo.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {AddToDoAction} from "../../Redux"





function Todo() {

    // to store the state
    
    // dispatch
    


    

    // const deleteTodo = (index) => {
    //     setTodos(todos.filter((todo, i) => i !== index))
    // }

    return (
        <div className="text-center py-2 todo-wrapper container">
            <TodoForm  />
            <TodoList  />
        </div>
    );
}

export default Todo;