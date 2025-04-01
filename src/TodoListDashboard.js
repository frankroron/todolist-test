import React, { useState } from 'react';

function TodoListDashboard() {
  // State for task input field
  const [taskInput, setTaskInput] = useState('');
  
  // State for tasks array
  const [tasks, setTasks] = useState([]);
  
  // State for interaction counts
  const [addTaskClicks, setAddTaskClicks] = useState(0);
  const [completeTaskToggles, setCompleteTaskToggles] = useState(0);
  const [deleteTaskClicks, setDeleteTaskClicks] = useState(0);

  // Handler for input field change
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Handler for adding a new task
  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      // Create a new task object
      const newTask = {
        id: Date.now(),
        text: taskInput,
        completed: false
      };
      
      // Add the new task to the tasks array
      setTasks([...tasks, newTask]);
      
      // Increment the add task clicks count
      setAddTaskClicks(addTaskClicks + 1);
      
      // Clear the input field
      setTaskInput('');
    }
  };

  // Handler for toggling task completion status
  const handleToggleComplete = (taskId) => {
    // Update the tasks array by mapping through it
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
    
    // Increment the complete task toggles count
    setCompleteTaskToggles(completeTaskToggles + 1);
  };

  // Handler for deleting a task
  const handleDeleteTask = (taskId) => {
    // Remove the task from the tasks array
    setTasks(tasks.filter(task => task.id !== taskId));
    
    // Increment the delete task clicks count
    setDeleteTaskClicks(deleteTaskClicks + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Dashboard Area */}
        <div className="bg-indigo-600 p-4 text-white">
          <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-indigo-700 p-2 rounded text-center">
              <span className="block text-sm">Tasks Added</span>
              <span className="text-2xl font-bold">{addTaskClicks}</span>
            </div>
            <div className="bg-indigo-700 p-2 rounded text-center">
              <span className="block text-sm">Tasks Toggled</span>
              <span className="text-2xl font-bold">{completeTaskToggles}</span>
            </div>
            <div className="bg-indigo-700 p-2 rounded text-center">
              <span className="block text-sm">Tasks Deleted</span>
              <span className="text-2xl font-bold">{deleteTaskClicks}</span>
            </div>
          </div>
        </div>
        
        {/* To-Do List Area */}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">To-Do List</h2>
          
          {/* Input and Add Button */}
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              value={taskInput}
              onChange={handleInputChange}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleAddTask}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Add
            </button>
          </div>
          
          {/* Tasks List */}
          {tasks.length > 0 ? (
            <ul className="space-y-2">
              {tasks.map(task => (
                <li 
                  key={task.id} 
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleToggleComplete(task.id)}
                      className="h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {task.text}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="px-2 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500 my-4">No tasks yet. Add a task to get started!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoListDashboard;