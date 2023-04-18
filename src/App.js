import './App.css';
import Header from './Components/Header';
import { useState } from 'react';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([])
  const [editingTodo, setEditingTodo] = useState(null);
  const [showArticle, setShowArticle] = useState(false);


  const addTodo = (id, title, detail, date) => {
   console.log(title)
    const newTodo = {id: Date.now(), title, detail, date}
    setTodos([...todos, newTodo])
  }
  const editTodo = todo => {
    console.log(todo)
    setEditingTodo(todo);
  };

  const saveTodo = (id, title, detail, date) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, title, detail, date } : todo
    );
    setTodos(updatedTodos);
    setEditingTodo(null);
  };
  const deleteTodo = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };
  return (
    <div>
    <button className='btn' onClick={() => setShowArticle(true)}>Add Today's Todo</button>

    {showArticle && (
      <article className="article-center">
        {editingTodo ? (
          <Header onSubmit={saveTodo} todo={editingTodo} />
        ) : (
          <Header onSubmit={addTodo} />
        )}
        <TodoList todos={todos} onEdit={editTodo} onDelete={deleteTodo} />
      </article>
    )}
  </div>

  );
}

export default App;