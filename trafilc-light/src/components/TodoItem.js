import React from 'react';

function TodoItem(props) {

   const {completed, id, title} = props.todo

   return (
         <li className="todo-item">
            <input 
               checked={completed} 
               type="checkbox"
               onChange={() => props.handleChange(id)}/>
            <span className={completed ? "completed" : null}>
               {title}
            </span>
            <button className="btn-style" 
                     onClick={() => props.deleteTodo(id)}
                     > X </button>
         </li>
   );
   
}

export default TodoItem;