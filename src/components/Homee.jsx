
import React from "react";

function Home({ onLogout }) {

  return (
    <div className="home-container">

      <h1>Welcome to Home Page!</h1>

      <p>You have successfully logged in.</p>

      <button onClick={onLogout}>
        Logout
      </button>

    </div>
  );
}

export default Home;