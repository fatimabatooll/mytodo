import React from "react";

const TodoList = ({ todos, onEdit, onDelete }) => {
  const currentDate = new Date();
  return (
    <div className="todo-list ">
      <ul>
        {todos.map((todo) => {
          const previousDate = new Date(todo.date);
          const isActive = currentDate.getTime() > previousDate.getTime();
          const articleClassName = `todo-item ${isActive ? "active" : ""}`;
          return (
            <article className={articleClassName} key={todo.id}>
              <h3>{todo.title}</h3>
              <p className="title">{todo.detail}</p>
              <date className="title">{todo.date}</date>
              <div className="btn-container">
                <button className="edit-btn" onClick={() => onEdit(todo)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => onDelete(todo.id)}
                >
                  Del
                </button>
              </div>
            </article>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
