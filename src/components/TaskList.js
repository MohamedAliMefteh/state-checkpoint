import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, editTask, deleteTask, toggleCompletion }) => {
  // Sort tasks: uncompleted tasks first, then completed
  const sortedTasks = [...tasks].sort((a, b) => 
    a.completed === b.completed ? 0 : a.completed ? 1 : -1
  );

  return (
    <ul className="task-list">
      {sortedTasks.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          color: 'var(--dark-gray)', 
          padding: '1rem' 
        }}>
          No tasks yet. Add a new task!
        </div>
      ) : (
        sortedTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleCompletion={toggleCompletion}
          />
        ))
      )}
    </ul>
  );
};

export default TaskList;