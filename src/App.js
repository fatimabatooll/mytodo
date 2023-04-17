import './App.css';
import Header from './Components/Header';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (id, title, detail, date) => {
   console.log(title)
    const newTodo = {id: Date.now(), title, detail, date}
    setTodos([...todos, newTodo])
  }

  return (
    <div className="App">
      <Header onSubmit={addTodo} />
    </div>  
  );
}

export default App;
