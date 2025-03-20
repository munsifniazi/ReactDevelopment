import React, { useState } from "react";
import "./Todo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";
const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");
  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      return setInputValue("");
    }
    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };
  // Time and Date

  setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate} - ${formattedTime}`);
  }, 1000);

  const handleDeleteTodo = () => {
    console.log(task);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo Lists</h1>
      </header>
      <h2>{dateTime}</h2>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{curTask}</span>
                <button className="check-btn">
                  <MdCheck />
                </button>
                <button className="delete-btn" onClick={handleDeleteTodo}>
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default Todo;
