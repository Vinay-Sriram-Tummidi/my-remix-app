import React, { useState, useEffect, useRef } from "react";

// Requirements:

// Create a component TodoApp.  -->done

// Props: isLoggedIn (boolean) — use it to conditionally show the app.

// If isLoggedIn = false, show: "Please login to view todos".

// If true, show the todo app.

// State: todos (array of strings) and newTodo (string).

// Render a list of todos using .map() + key.

// Input field to add a new todo (newTodo) → controlled input with onChange.

// Button Add Todo → on click, add newTodo to todos array using functional updates.

// Each todo item should be displayed in a <li>.
// export function TodoApp(props: any) {
//   const { isLoggedIn } = props;

//   // const todos =["Learn Linux","Learn Cloud"];

//   const [todos, setTodos] = useState(["Learn Linux"]);

//   const [newTodo, setNewTodo] = useState("");

//   // const todos=["Learn Linux","Learn Cloud"];

//   function handleonChange(event) {
//     setNewTodo(event.target.value);
//   }

//   function handleClick() {
//     setTodos((prev) => [...prev, newTodo]);
//     setNewTodo("");
//   }

//   function deleteLastTodo() {
//     setTodos((prev) => prev.slice(0, -1));
//   }

//   return (
//     <>
//       {isLoggedIn ? <p>TodoApp</p> : <p>Please login to view todos</p>}

//       {todos.map((i) => (
//         <li key={i}>{i}</li>
//       ))}

//       <div>
//         <h2>Add a Todo</h2>
//         <input placeholder="Add Your Todo" onChange={handleonChange} />
//         <button onClick={handleClick}>Add Todo</button>
//         <button onClick={deleteLastTodo}>Delete Todo</button>
//       </div>
//     </>
//   );
// }

///Controlled Inputs ////

// export default function Controlled() {

//   const[disabled,setDisabled]=useState(true);

//   const[email,setEmail]=useState("");

//   const[pwd,setPwd]=useState("");

//   useEffect(()=>{
//  if (email.trim() !== "" && pwd.trim() !== "") {
//       setDisabled(false);
//     } else {
//       setDisabled(true);
//     }
//   },[email,pwd])
//   return (
//     <div>
//       <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your Email"/>

//       <input type="password" value={pwd} onChange={e=>setPwd(e.target.value)} placeholder="Enter your Email"/>
//       <button type="submit" disabled={disabled} className="border rounded-xl">Login</button>

//         <p>Email :{email}</p>
//         <p>Password :{pwd}</p>
//     </div>
//   );
// }

export function Parent() {
  const [color, setColor] = useState("");

  return (
    <>
      <ChildSelect onColorChange={setColor} />
      <ChildPreview value={color} />
    </>
  );
}

function ChildSelect({ onColorChange }) {
  return (
    <select onChange={(e) => onColorChange(e.target.value)}>
      <option value="">Select a color</option>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select>
  );
}

function ChildPreview({ value }) {
  return <p>Selected color: {value || "None"}</p>;
}
