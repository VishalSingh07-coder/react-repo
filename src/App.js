import { MyContext } from "./context";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";
import "./App.css";
import { useState } from "react";

function App() {
  const [users,setUsers]=useState([]);
  const dispatchUserEvent = (action,payload)=>{
    if(action==="ADD USER"){
      setUsers([...users,payload.newUser])
      console.log("ADDED");
    }

    else if(action==="REMOVE USER"){
      setUsers(users.filter(user=>user.id!==payload.userId));
      console.log("REMOVED");
    }
    else {
      return;
    }
  }
  return (
    <>
    <div className="App">
      <h2>Add and Remove User with context api</h2>
      <MyContext.Provider value={{users,dispatchUserEvent}}>
        <AddUser/>
        <UserList/>
        </MyContext.Provider>
    </div>
    </>    
  );
}

export default App;
