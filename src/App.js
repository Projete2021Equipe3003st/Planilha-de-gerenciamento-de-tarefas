import { useState } from 'react';
import './App.css';
import  Form  from './components/Form';
import  List from './components/List';

export default function App() {

  const [tasks, setTask] = useState([]);

  const addTask = task => {
    const newTask = {
      task: task,
      isComplete: false
    }    

    setTask([...tasks, newTask]);
  };

  const deleteTask = index => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);

    setTask(newTasks)
  };

  const toggleComplete = index => {
    const newTasks = [...tasks];
    newTasks[index].isComplete = !newTasks[index].isComplete;
    setTask(newTasks);
  }

  return (
    
    <div className="App">
      <Form onSave={addTask} />
      <List 
      tasks={tasks} 
      deleteTask={deleteTask} 
      completetask={toggleComplete} />
    </div>
  );
}
