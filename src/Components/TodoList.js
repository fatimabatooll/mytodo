import React from 'react'

const TodoList = ({todos}) => {
  return (
    <div className='todo-list'>
        <ul>
            {
                todos.map(todo => (
                    <article className='todo-item' key={todo.id}> 
                    <h3>{todo.title}</h3>
                    <p className='title'>{todo.detail}</p>
                    <date className='title'>{todo.date}</date>

                    </article>
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList