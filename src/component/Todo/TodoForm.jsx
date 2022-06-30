import { useState } from "react";
import { useDispatch } from "react-redux";
import {AddToDoAction} from "../../Redux"


const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");



//   
    const dispach= useDispatch();
    const addTodo = (task) => {
        console.log("task",task)
        dispach(AddToDoAction(task))
    };

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h3 className="text-muted mb-4">Add a TODO</h3>

      <form onSubmit={handleSubmission}>
        Title <br />
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        Content <br />
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button className="my-4 btn btn-primary btn-sm px-4" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;