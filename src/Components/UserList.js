import React,{useContext} from "react";
import { MyContext } from "../context";
import User from "./User";
const UserList = () => {
    const { users }=useContext(MyContext)
  return (
    <>
      <h1>UserList</h1>
      {
        users.map(user=><User key={user.id} user={user}/>)
      }
    </>
  );
};

export default UserList;
