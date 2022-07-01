import { useState } from "react";
import TodoForm from "../../component/Todo/TodoForm";
import TodoList from "../../component/Todo/ToDoList";
import './Todo.css';

function Todo() {

    return (
        <div className="text-center py-2 todo-wrapper container">
            <TodoForm />
            <TodoList />
        </div>
    );
}

export default Todo;