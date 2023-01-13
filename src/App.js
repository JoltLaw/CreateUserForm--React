import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
  const [usersArray, setUsersArray] = useState([]);

  const AddUserHandler = (userName, UserAge) => {
    setUsersArray((prevUsersArray) => {
      return [
        ...prevUsersArray,
        { name: userName, age: UserAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UserList users={usersArray} />
    </div>
  );
}

export default App;
