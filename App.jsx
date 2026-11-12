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

// import React from "react";
// import Counter from "./src/components/Counter";

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// export default App;

// import Child from "./Children.jsx";
// import "./App.css";

// function App() {
//   const users = [
//     { id: 1, name: "Tamilselvan", city: "Salem", age: 25, email: "tamil@gmail.com", phone: "9876543210" },
//     { id: 2, name: "Arun", city: "Chennai", age: 24, email: "arun@gmail.com", phone: "9876543211" },
//     { id: 3, name: "Priya", city: "Bangalore", age: 23, email: "priya@gmail.com", phone: "9876543212" },
//     { id: 4, name: "Ravi", city: "Coimbatore", age: 26, email: "ravi@gmail.com", phone: "9876543213" },
//     { id: 5, name: "Meena", city: "Madurai", age: 22, email: "meena@gmail.com", phone: "9876543214" },
//   ];

//   return (
//     <div className="user-container">
//       {users.map((user) => (
//         <Child
//           key={user.id}
//           name={user.name}
//           city={user.city}
//           age={user.age}
//           email={user.email}
//           phone={user.phone}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import "./App.css";
// import StudentList from "./component/Listrender";
// import Login from "./component/Login";
// import Home from "./component/Home";

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


// import React from "react";
// import Counter from "./component/Counter";

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// export default App;


import React from "react";
import RegistrationForm from "./src/components/Regestrationfrom.jsx";

function App() {
  return (
    <>
      <RegistrationForm />
    </>
  );
}

export default App;


