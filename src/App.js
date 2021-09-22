import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebase";
import './App.css';
import  Form  from './components/Form';
import  List from './components/List';
import ListRecover from "./components/ListRecover";

export default function App() {
  const [Atividades, setAtividades] = useState([]);
  useEffect(
    () =>
    onSnapshot(collection(db, "Atividades"), (snapshot) => 
      setAtividades(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ),
    []
  );
  console.log(Atividades)
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
      completeTask={toggleComplete} />
<ListRecover
Atividades={Atividades}/>
    </div>
  );
}
