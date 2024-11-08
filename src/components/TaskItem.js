import React, { useState } from 'react';

const TaskItem = ({ task, editTask, deleteTask, toggleCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(task.name);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const handleEdit = () => {
    const trimmedName = updatedName.trim();
    const trimmedDescription = updatedDescription.trim();

    if (!trimmedName || !trimmedDescription) {
      alert("Both fields are required!");
      return;
    }

    editTask({ 
      ...task, 
      name: trimmedName, 
      description: trimmedDescription 
    });
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="task-edit-form">
          <input 
            type="text" 
            value={updatedName} 
            onChange={(e) => setUpdatedName(e.target.value)}
            required
          />
          <input 
            type="text" 
            value={updatedDescription} 
            onChange={(e) => setUpdatedDescription(e.target.value)}
            required
          />
          <div className="task-actions">
            <button 
              className="task-btn edit-btn" 
              onClick={handleEdit}
            >
              Save
            </button>
            <button 
              className="task-btn delete-btn" 
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div 
            className="task-content" 
            onClick={() => toggleCompletion(task.id)}
          >
            <strong>{task.name}</strong>
            <p>{task.description}</p>
          </div>
          <div className="task-actions">
            <button 
              className="task-btn edit-btn" 
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button 
              className="task-btn delete-btn" 
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;