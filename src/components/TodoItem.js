import React from "react";

function TodoItem(props) {
  return(
   <li>
    <input type="checkbox" 
           checked={props.todo.completed} 
           onChange={()=>props.handleChangeProps(props.todo.id)}
    /><button onClick={()=>props.delTodoProps(props.todo.id)}>Delete</button>{props.todo.title}
    </li>
  )
}


export default TodoItem