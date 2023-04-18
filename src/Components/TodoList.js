import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa'


const TodoList = ({ todos, onEdit, onDelete }) => {
  const currentDate = new Date();
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => {
          const previousDate = new Date(todo.date);
          const isActive = currentDate.getTime() > previousDate.getTime();
          const articleClassName = `todo-item ${isActive ? "active" : ""}`;
          return (
            <div className='section-center'>
            <article className={articleClassName} key={todo.id}>
              <h3>{todo.title}</h3>
              <p className="title">{todo.detail}</p>
              <date className="title">{todo.date}</date>
              <div className="btn-container">
                <button className="edit-btn" onClick={() => onEdit(todo)}>
                  <FaEdit/>
                </button>
                <button
                  className="delete-btn"
                  onClick={() => onDelete(todo.id)}
                >
                <FaTrash/>
                </button>
              </div>
            </article>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;