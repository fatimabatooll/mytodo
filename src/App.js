import './App.css';
import Header from './Components/Header';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (id, title, detail, date) => {
    const newTodo = {id: Date.now(), title, detail, date}
    setTodos([...todos, newTodo])
  }

  return (
    <div className="App">
      <Header />
    </div>  
  );
}

export default App;
