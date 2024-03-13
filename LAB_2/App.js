"use client";
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoForm from './component/ToDoForm';
import ToDoList from "./component/ToDoList";

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };
  
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;