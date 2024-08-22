import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
 
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  const submit = (e) => {
    e.preventDefault();
    if (!title||!desc)(
        alert("title or description can't be empty")
     );
else {{addTodo(title,desc)
   setTitle("")
   setDesc("")}}
}

  return (
    <div className='container my-3'>
      <h3>Add todo here</h3>
      {}
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          {/* Added onChange handler to update state */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title" // Changed id to match the label's htmlFor
            aria-describedby="titleHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          {/* Added onChange handler to update state */}
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        
        <button
          type="submit"
          className="btn btn-primary btn-sm btn-success"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
