# Todo List Dashboard

A simple Todo List application built with React and styled with Tailwind CSS. The application features a dashboard that tracks button interactions.

## Getting Started

### Prerequisites

Before you can run this application, you'll need to have Node.js installed on your computer. Node.js is a free program that lets you run JavaScript applications.

To install Node.js:
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the "LTS" (Long Term Support) version recommended for most users
3. Run the installer and follow the on-screen instructions
4. When it asks about additional tools, accept the defaults

### Installation

After installing Node.js, follow these steps to set up the Todo List app:

1. If someone shared this project with you as a ZIP file:
   - Extract/Unzip the file to a location you can easily find (like your Desktop)
   - The extracted folder should be called "todo-dashboard"

2. If you're getting this from GitHub:
   - Download or clone this repository
   - For downloading: Look for the green "Code" button, click it, then "Download ZIP"
   - Extract the ZIP file after downloading

3. Open your computer's terminal or command prompt:
   - Windows: Search for "Command Prompt" or "PowerShell" in the start menu
   - Mac: Open the "Terminal" application from Applications > Utilities

4. In the terminal, navigate to the project folder:
   ```
   cd path\to\todo-dashboard
   ```
   Replace "path\to" with the actual location where you saved the folder
   (Example: `cd C:\Users\YourName\Desktop\todo-dashboard`)

5. Install all the required packages by typing this command and pressing Enter:
   ```
   npm install
   ```
   This might take a minute or two to complete.

### Running the Application

To start the application:

1. Open a terminal or command prompt
2. Navigate to the todo-dashboard folder:
   ```
   cd C:\Users\Fabro\testground\todo-dashboard
   ```
   (If your project is stored elsewhere, replace this path with the correct location)
3. Run the following command exactly as shown:
   ```
   npm start
   ```
4. Wait for the application to start - you'll see a "Compiled successfully!" message
5. The application should automatically open in your web browser
6. If it doesn't open automatically, open your browser and go to: http://localhost:3000

### Stopping the Application

To stop the running application:

1. Return to the terminal or command prompt where you started the application
2. Click on the terminal window to make sure it's active
3. Press the `Ctrl` key and while holding it, press the `C` key (written as `Ctrl + C`)
4. If prompted with "Terminate batch job (Y/N)?", type `Y` and press Enter
5. The terminal should return to the command prompt, indicating the application has stopped

## Using the Application

When you open the application in your browser, you'll see a clean, simple interface. The Todo List Dashboard consists of two main sections:

### Dashboard Area (Top Section)
- This is the purple/blue section at the top
- It shows three important counters:
  - **Tasks Added**: Shows how many times you've added a new task
  - **Tasks Toggled**: Shows how many times you've checked or unchecked a task
  - **Tasks Deleted**: Shows how many times you've deleted a task
- These numbers update automatically as you interact with your tasks

### Todo List Area (Main Section)
- **Adding a New Task**:
  1. Look for the text box that says "Add a new task..."
  2. Click inside this box and type what you need to do
  3. Click the blue "Add" button to add your task to the list
  4. You'll see your new task appear in the list below

- **Marking Tasks as Complete**:
  1. When you finish a task, find it in your list
  2. Click the checkbox at the left side of the task
  3. The text will be crossed out to show it's completed
  4. You can click the checkbox again to mark it as incomplete

- **Removing Tasks from Your List**:
  1. To delete a task you no longer need, find it in your list
  2. Click the red "Delete" button on the right side of the task
  3. The task will immediately disappear from your list

## Codebase Structure

- `package.json` - Project dependencies and scripts
- `tailwind.config.js` - Tailwind CSS configuration
- `public/index.html` - HTML entry point
- `src/`
  - `index.js` - JavaScript entry point
  - `index.css` - Global styles (Tailwind imports)
  - `TodoListDashboard.js` - Main React component

### Key Components

`TodoListDashboard.js` contains the following:

- **State Management**:
  ```javascript
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [addTaskClicks, setAddTaskClicks] = useState(0);
  const [completeTaskToggles, setCompleteTaskToggles] = useState(0);
  const [deleteTaskClicks, setDeleteTaskClicks] = useState(0);
  ```

- **Main Functions**:
  - `handleInputChange` - Updates input field state
  - `handleAddTask` - Adds new tasks
  - `handleToggleComplete` - Toggles task completion status
  - `handleDeleteTask` - Removes tasks

## Creating a Version for the Web (For Advanced Users)

If you want to put this application on a website:

1. Open a terminal or command prompt
2. Navigate to the todo-dashboard folder just like you did when starting the application
3. Type this command and press Enter:
   ```
   npm run build
   ```
4. Wait for the process to complete
5. When it's done, you'll have a new folder called "build" inside your todo-dashboard folder
6. This "build" folder contains files that can be uploaded to any web hosting service

Note: Deploying to a web server requires some technical knowledge. If you're new to this, consider asking someone with web development experience for help.

## For Developers: Customizing the Application

If you're a developer who wants to modify this application, here's how you can customize it:

### Changing the Appearance

The application uses Tailwind CSS for styling. To change colors, spacing, or other visual elements:

1. Open `src/TodoListDashboard.js` in a code editor
2. Look for Tailwind class names (like `bg-indigo-600`, `p-4`, `rounded-lg`)
3. Modify these classes according to Tailwind's documentation: [Tailwind CSS Documentation](https://tailwindcss.com/docs)

Examples:
- Change the dashboard color: Find `bg-indigo-600` and replace with another color like `bg-blue-600` or `bg-green-600`
- Change button styles: Find the Add button's `bg-indigo-600` class and replace it with a different color

### Adding New Features

To add new features to the application:

1. Open `src/TodoListDashboard.js` in a code editor
2. Understand the current state structure:
   ```javascript
   const [taskInput, setTaskInput] = useState('');
   const [tasks, setTasks] = useState([]);
   const [addTaskClicks, setAddTaskClicks] = useState(0);
   const [completeTaskToggles, setCompleteTaskToggles] = useState(0);
   const [deleteTaskClicks, setDeleteTaskClicks] = useState(0);
   ```

3. Add new state variables as needed for your features
4. Implement handler functions for new interactions
5. Update the JSX to include new UI elements

Example features you might add:
- Due dates for tasks
- Priority levels
- Task categories or tags
- Task search functionality
- Local storage to save tasks between sessions

### Modifying Existing Behavior

To change how existing features work:

1. Find the relevant handler function:
   - `handleAddTask` - Controls adding new tasks
   - `handleToggleComplete` - Controls completing/uncompleting tasks
   - `handleDeleteTask` - Controls removing tasks

2. Modify the function logic to implement your desired behavior

For example, to add task validation (preventing empty tasks):
```javascript
const handleAddTask = () => {
  if (taskInput.trim() !== '') {
    // Existing code...
  } else {
    alert("Please enter a task description!");
  }
};
```
