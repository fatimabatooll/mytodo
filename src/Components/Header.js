import React, { useEffect } from "react";
import { useState } from "react";


const Header = ({ onSubmit, todo }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDetail(todo.detail);
      setDate(todo.date);
    }
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title == "") {
      alert("title is required");
    } else if (detail == "") {
      alert("detail is required");
    } else if (date == "") {
      alert("date is required");
    } else {
      if (todo) {
        onSubmit(todo.id, title, detail, date);
      } else {
        onSubmit(null, title, detail, date);
      }
      setTitle("");
      setDetail("");
      setDate("");
    }
  };

  return (
    <>
      
      <section className='sec-center'>
        <form className="form-div" onSubmit={handleSubmit}>
          <div className="form-control">
            <h4>Title</h4>
            <input
              type="text"
              id="title"
              className="todo"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h4> Details </h4>
            <input
              type="text"
              id="detail"
              className="todo"
              name="detail"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
            <h4> Date </h4>
            <input
              type="date"
              id="date"
              className="todo"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button className="submit-btn" type="submit">
            {todo ? "Save" : "Add Todo"}
          </button>
          </div>
         
        </form>
      </section>
    </>
  );
};

export default Header;