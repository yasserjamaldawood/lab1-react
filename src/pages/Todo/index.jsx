import { useState } from "react";
import TodoForm from "../../component/Todo/TodoForm";
import TodoList from "../../component/Todo/ToDoList";
import './Todo.css';

function Todo() {

    return (
        <div className="text-center py-2 todo-wrapper container d-flex my-5 ">
            <div className="w-50 my-5 border">
            <TodoForm />
            </div>
            <div className="w-50 my-5 border">
            <TodoList  />
            </div>
        </div>
    );
}

export default Todo;