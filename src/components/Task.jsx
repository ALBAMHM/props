import React from 'react';

const Task = ({ task, deleteTask, toggleCompleteTask }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <button onClick={() => toggleCompleteTask(task.id)}>
        {task.completed ? 'Desmarcar' : 'Completar'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  );
}

export default Task;