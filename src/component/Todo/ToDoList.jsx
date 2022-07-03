import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RemoveFromToDo } from "../../Redux/rebuxConfig";
import {REMOVE_TODO} from "../../Redux/feature/todoSlice"
import { useEffect } from "react";
import { store } from "../../Redux";


const TodoList = () => {
    const ToDos = useSelector(state => state.todo.ToDos);
    console.log("from list todo",ToDos);
    const dispach= useDispatch();
    const removeToDo=(i)=>{
        dispach(REMOVE_TODO(i))
    }
   
    const todosList =
    ToDos && ToDos.length > 0 ? (
        ToDos.map((todo, i) => {
          return (
            <ul key={i}>

              <li className="border d-flex align-items-center justify-content-center mx-5">
              <div className="text p-2">
                <p>Title : {todo.title}</p>
                <p>Content : {todo.content}</p>
              </div>
              <div>
              <button onClick={()=>removeToDo(i)} className="btn btn-danger mx-5">x</button>
              </div>
              </li>
              
            </ul>
          );
        })
      ) : (
        <p className="h5 mx-5 text-muted">no items on the list ..</p>
      );
  
    return (
      <div className="text-left">
        <h5 className="mx-5 text-muted">Todos List</h5>
        {todosList}
      </div>
    );
  };
  
  export default TodoList;