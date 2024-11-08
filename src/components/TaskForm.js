import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const trimmedName = taskName.trim();
    const trimmedDescription = taskDescription.trim();

    if (!trimmedName || !trimmedDescription) {
      alert("Both task name and description are required!");
      return;
    }

    const newTask = {
      id: uuidv4(),
      name: trimmedName,
      description: trimmedDescription,
      completed: false,
      createdAt: new Date().toISOString()
    };

    addTask(newTask);

    // Clear the form
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input 
        type="text" 
        placeholder="Task Name" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      <input 
        type="text" 
        placeholder="Task Description" 
        value={taskDescription} 
        onChange={(e) => setTaskDescription(e.target.value)}
        required
      />
      <button type="submit" className="add-task-btn">Add Task</button>
    </form>
  );
};

export default TaskForm;