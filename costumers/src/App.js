import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setUsers(json);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <header>
        <h1>All Customers</h1>
      </header>
      {users.length > 0 && (
        <ul>
          <div>
            <p className="gray_p">Customer Name</p>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </div>
          <div>
            <p className="gray_p">Company</p>
            {users.map((user) => (
              <li key={user.name}>{user.company.name}</li>
            ))}
          </div>
          <div>
            <p className="gray_p">Phone Number</p>
            {users.map((user) => (
              <li key={user.id}>{user.phone}</li>
            ))}
          </div>
          <div>
            <p className="gray_p">Email</p>
            {users.map((user) => (
              <li key={user.id}>{user.email}</li>
            ))}
          </div>
          <div>
            <p className="gray_p">Street</p>
            {users.map((user) => (
              <li key={user.id}>{user.address.street}</li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default App;
