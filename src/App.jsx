import { useState } from "react";
import "./App.css";
import { ImCross } from "react-icons/im";
import Home from "./components/Home";

function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  /////////  Adding task to list ///////////
  const Addtask = (e) => {
    e.preventDefault();
    if (input !== "") {
      setTask([...task, input]);
      setInput("");
    } else {
      alert("Please input text");
    }
  };
  /////////  removing task from list ///////////
  const removetask = (i) => {
    var newtask = [...task];
    newtask.splice(i, 1);
    setTask(newtask);
  };
  return (
    <>
      <div className="m-heading">
        <h1>Todo List</h1>
      </div>

      <div className="inputs">
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={Addtask}>Add Task</button>
      </div>

      <div className="lists">
        {task.map((item, i) => (
          <div className="list" key={i}>
            <p>{item}</p>
            <span className="icon">
              <ImCross onClick={() => removetask(i)} />
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
