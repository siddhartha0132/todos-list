import React from 'react'
import {TodoItem} from "../MyComponent/TodoItem";


export const Todos = (props) => {
  return (
    <div className="container my-3">
      { <h3 className=' my-3'>Todos-list</h3> }
      {props.todos.length===0? "no todos to display":
      props.todos.map((todo)=>{
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
         })}
      
      </div>
  )
}
