import React from "react";

const Home = ({ isLoggedIn }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome to the Home Page</h2>
      {isLoggedIn ? (
        <p style={{ color: "green" }}>You are successfully logged in!</p>
      ) : (
        <p>Please log in to access more features.</p>
      )}
    </div>
  );
};

export default Home;
