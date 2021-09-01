import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

import "./styles.css";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function App() {
  const [tasks, setTask] = useState([]);

  const addTask = (task) => {
    setTask([...tasks, task]);
  };

  const deleteTask = (index) => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTask(newTasks);
  };

  return (
    <div className="App">
      <Calendar />
      <Form onSave={addTask} />
      <List tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}
