
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./MyComponent/Header";
import { Footer } from "./MyComponent/Footer";
import { Todos } from "./MyComponent/Todos";
import { AddTodo } from "./MyComponent/AddTodo";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { About } from "./MyComponent/About";

function App() {
  // Initialize todos from localStorage
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // State to manage todos
  const [todos, setTodos] = useState(initTodo);

  // Effect to sync todos with localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to handle deleting a todo
  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  // Function to handle adding a new todo
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, mytodo]);
    console.log(mytodo);
  };

  return (
    <Router>
      <Header title="My Todos List" searchbar={false} />
      <Routes>
        <Route path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
        } />
        <Route path ="/About" element={<About/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
