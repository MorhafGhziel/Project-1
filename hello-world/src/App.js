import "./App.css";
// import { useState, useEffect } from "react";
// import Axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/Home";
import { Form } from "./pages/Form";

const client = new QueryClient();

function App() {
  // const age = 20;
  // const isgreen = age >= 18;
  // return (
  //   <div className="App">
  //     {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
  //     <h1 style={{ color: isgreen ? "green" : "red" }}>{age}</h1>
  //     {isgreen && <button>Submit</button>}
  //   </div>
  // );
  //   const names = ["morhaf", "aghyad", "ahmed", "mustafa"];
  //   return (
  //     <div classname="App">
  //       {names.map((name, key) => {
  //         return <h1 key={key}>{name}</h1>;
  //       })}
  //     </div>
  //   );
  //   const users = [
  //     { name: "morhaf", age: 17 },
  //     { name: "aghyad", age: 23 },
  //     { name: "ahmed", age: 27 },
  //   ];
  //   return (
  //     <div classname="App">
  //       {users.map((user, key) => {
  //         return <User name={user.name} age={user.age} />;
  //       })}
  //     </div>
  //   );
  // }
  // const User = (props) => {
  //   return (
  //     <div>
  //       {props.name} {props.age}
  //     </div>
  //   );
  // const [age, setage] = useState(0);
  // const increasseAge = () => {
  //   setage(age + 1);
  //   console.log(age + 1);
  // };
  // return (
  //   <div className="App">
  //     {age}
  //     <button onClick={increasseAge}>Increase Age</button>
  //   </div>
  // );
  //   const [inputValue, setInputValue] = useState("");
  //   const handleInputValue = (event) => {
  //     setInputValue(event.target.value);
  //   };
  //   return (
  //     <div className="App">
  //       <input onChange={handleInputValue} />
  //       {inputValue}
  //     </div>
  //   );
  // const [count, setcount] = useState(0);
  // const Increase = () => {
  //   setcount(count + 1);
  // };
  // const Decrease = () => {
  //   setcount(count - 1);
  // };
  // const setTo0 = () => {
  //   setcount(0);
  // };
  // return (
  //   <div className="App">
  //     <button onClick={Increase}>Increase</button>
  //     <button onClick={Decrease}>Decrease</button>
  //     <button onClick={setTo0}>Set to 0</button>
  //     {count}
  //   </div>
  // );
  // const [todoList, setTodoList] = useState([]);
  // const [newTask, setNewTask] = useState("");
  // const [completedTasks, setCompletedTasks] = useState({});
  // const handleChange = (event) => {
  //   setNewTask(event.target.value);
  // };
  // const addTask = () => {
  //   if (newTask.trim() === "") return; // Prevent adding empty tasks
  //   setTodoList([...todoList, newTask]);
  //   setNewTask("");
  // };
  // const deleteTask = (taskToDelete) => {
  //   setTodoList(todoList.filter((task) => task !== taskToDelete));
  // };
  // const toggleComplete = (task) => {
  //   setCompletedTasks((prev) => ({
  //     ...prev,
  //     [task]: !prev[task],
  //   }));
  // };
  // useEffect(() => {
  //   console.log("component mounted");
  //   return () => {
  //     console.log("component unmounted");
  //   };
  // }, []);
  // return (
  //   <div className="App">
  //     <div className="addTask">
  //       <input value={newTask} onChange={handleChange} />
  //       <button onClick={addTask}>Add Task</button>
  //     </div>
  //     <div className="list">
  //       {todoList.map((task, index) => {
  //         const isCompleted = completedTasks[task];
  //         return (
  //           <div key={index} style={{ color: isCompleted ? "green" : "black" }}>
  //             <h1>{task}</h1>
  //             <button onClick={() => deleteTask(task)}>X</button>
  //             <button onClick={() => toggleComplete(task)}>
  //               {isCompleted ? "Undo" : "Complete"}
  //             </button>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
  // return (
  //   <div className="App">
  // </div>
  // );
  // ----------------------------------------
  // const [catFact, setCatFact] = useState("");
  // const fetchCatFact = () => {
  //   Axios.get("https://catfact.ninja/fact").then((res) => {
  //     setCatFact(res.data.fact);
  //   });
  // };
  // useEffect(() => {
  //   fetchCatFact();
  // }, []);
  // return (
  //   <div className="App">
  //     <button onClick={fetchCatFact}>Generate Cat Facts</button>
  //     <p>{catFact}</p>
  //   </div>
  // );
  // ----------------------------------------
  // const [name, setName] = useState("");
  // const [predictedAge, setPredictedAge] = useState(0);
  // const fetchName = () => {
  //   Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
  //     setPredictedAge(res.data.age);
  //   });
  // };
  // return (
  //   <div className="App">
  //     <input
  //       placeholder="EX. Pedro..."
  //       onChange={(event) => {
  //         setName(event.target.value);
  //       }}
  //     />
  //     <button onClick={fetchName}>Predict Age</button>
  //     <h1> Predicted Age: {predictedAge} </h1>
  //   </div>
  // );
  //-----------------------------------------------
  // const [excuse, setExcuse] = useState("");
  // const fetchPartyExcuse = () => {
  //   Axios.get("https://excuser-three.vercel.app/v1/excuse/party/")
  //     .then((res) => {
  //       if (res.data && res.data.length > 0) {
  //         setExcuse(res.data[0].excuse);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching the excuse:", error);
  //     });
  // };
  // const fetchFamilyExcuse = () => {
  //   Axios.get("https://excuser-three.vercel.app/v1/excuse/family/")
  //     .then((res) => {
  //       if (res.data && res.data.length > 0) {
  //         setExcuse(res.data[0].excuse);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching the excuse:", error);
  //     });
  // };
  // const fetchOfficeExcuse = () => {
  //   Axios.get("https://excuser-three.vercel.app/v1/excuse/office/")
  //     .then((res) => {
  //       if (res.data && res.data.length > 0) {
  //         setExcuse(res.data[0].excuse);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching the excuse:", error);
  //     });
  // };
  // return (
  //   <div className="App">
  //     <h1>Generate An Excuse</h1>
  //     <button onClick={fetchPartyExcuse}>Party</button>
  //     <button onClick={fetchFamilyExcuse}>Family</button>
  //     <button onClick={fetchOfficeExcuse}>Office</button>
  //     <p>{excuse}</p>
  //   </div>
  // );
  //---------------------------------------------
  //   const [generateExcuse, setGenerateExcuse] = useState("");
  //   const fetchExcuse = (excuse) => {
  //     Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
  //       (res) => {
  //         setGenerateExcuse(res.data[0].excuse);
  //       }
  //     );
  //   };
  //   return (
  //     <div className="App">
  //       <h1>Generate An Excuse</h1>
  //       <button onClick={() => fetchExcuse("party")}>Party</button>
  //       <button onClick={() => fetchExcuse("family")}>Family</button>
  //       <button onClick={() => fetchExcuse("office")}>Office</button>
  //       <p>{generateExcuse}</p>
  //     </div>
  //   );
  // const { data } = useQuery(["cat"], () => {
  //   return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  // });
  // return (
  //   <div className="App">
  //     <h1> this is the home page, {data} </h1>
  //   </div>
  // );
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Form" element={<Form />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;

// return (
//   <div className="App">
// </div>
// );
