import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./myComponents/header";
import { Footer } from "./myComponents/footer";
import { About } from "./myComponents/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Wrapper } from "./myComponents/wrapper";

function App() {
  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (param) => {
    console.log("I'm on delete function with this parameter: ", param);

    setTodo(
      todos.filter((e) => {
        return e !== param;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // we created a variable named "todos" and then variable is of array
  // const [todos, setTodo] = useState([
  //   {
  //     sno: 1,
  //     title: "Go to the Market",
  //     desc: "you need to buy this thing"
  //   },
  //   {
  //     sno: 2,
  //     title: "Go to the Tuition",
  //     desc: "you need to teach this student"
  //   },
  //   {
  //     sno: 3,
  //     title: "Go to the masjid",
  //     desc: "you need to offer a prayer"
  //   }
  // ]);

  const addTodo = (title, desc) => {
    console.log("I am adding a new Todo ", title, desc);
    let sno;
    if (todos.length === 0) sno = 1;
    else sno = todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodo([...todos, myTodo]);
    console.log(myTodo);
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <Wrapper addTodo={addTodo} todos ={todos} onDelete ={onDelete} />
            }
          />
        </Routes>
        <Footer />
      </Router>

      {/* <Header searchBar={false} />
    <AddTodos addTodo={addTodo} />
    <Todos todo={todos} delete={onDelete} />
    <Footer/>
    <BrowserRouter>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route exact path="/About" component={About} />
        </Routes>
      </div>
    </BrowserRouter> 
       <Router> 
        
        </Router>*/}
    </>
  );
}

export default App;
