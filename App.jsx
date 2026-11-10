import { useState } from "react";
import { users } from "./data";
import UserCard from "./components/UserCard";
import Login from "./components/Login";
import Home from "./components/Home";
 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
 
  return (
    <div className="container">
      <h1>Task 3 React Assignment</h1>
 
      {isLoggedIn ? (
        <Home toggleLogin={toggleLogin} />
      ) : (
        <Login toggleLogin={toggleLogin} />
      )}
 
      <h2>User List</h2>
 
      <div className="card-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
 
export default App;