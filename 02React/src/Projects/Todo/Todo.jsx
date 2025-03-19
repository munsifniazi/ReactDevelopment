import React from 'react';
import './Todo.css';
const Todo = () => {
  return (
    <section className='todo-container'>
      <header>
        <h1>Todo Lists</h1>
      </header>
      <section className='form'>
        <form >
            <div>
                <input type="text" className='todo-input' autoComplete='off'/>
            </div>
            <div>
                <button type='submit' className='todo-btn'> Add Task</button>
            </div>
        </form>
      </section>
    </section>
  );
};

export default Todo;
