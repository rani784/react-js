// import { useState } from "react";
// import { users } from "./data";
// import UserCard from "./components/UserCard";
// import Login from "./components/Login";
// import Home from "./components/Home";
 
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
 
//   const toggleLogin = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };
 
//   return (
//     <div className="container">
//       <h1>Task 3 React Assignment</h1>
 
//       {isLoggedIn ? (
//         <Home toggleLogin={toggleLogin} />
//       ) : (
//         <Login toggleLogin={toggleLogin} />
//       )}
 
//       <h2>User List</h2>
 
//       <div className="card-container">
//         {users.map((user) => (
//           <UserCard key={user.id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }
 
// export default App;


// import React, { useState } from "react";
// import "./App.css";
// import StudentList from "./src/components/Listrender";
// import Login from "./src/components/Logine";
// import Home from "./src/components/Homee";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <div className="App">
//       <h1>React Task 3</h1>
//       <h2>List Rendering & Conditional Rendering</h2>

//       {isLoggedIn ? (
//         <Home onLogout={handleLogout} />
//       ) : (
//         <Login onLogin={handleLogin} />
//       )}

//       <StudentList />
//     </div>
//   );
// }

// export default App;

import React from "react";
import Counter from "./src/components/Counter";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;