import Todo from './components/Todo'
import './App.css';
import { FilterButton } from './components/FilterButton';
import { Form } from './components/Form';
import React, { useState } from 'react';
import {nanoid} from 'nanoid';

function App(props) {

  const [tasks, setTask] = useState(props.tasks);

  const taskList = props.tasks.map(task => (
    <Todo 
      id={ task.id } 
      name={ task.name } 
      completed={ task.completed } 
      key={ task.id } 
    />
  ));

  const addTask = (name) => {
    const newTask = {
      id: `todo-${ nanoid() }`,
      name: name, 
      completed: false
    };

    setTask([...tasks, newTask]);
  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={ addTask } />
      <div className="filters btn-group stack-exception">
        <FilterButton name="All" pressed={ true } />
        <FilterButton name="Active" pressed={ false } />
        <FilterButton name="Completed" pressed={ false } />
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
